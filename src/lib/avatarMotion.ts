export interface AvatarMotionState {
  pitch: number
  yaw: number
  roll: number
  offsetY: number
  time: number
  reactionTime: number | null
}

export interface AvatarPointerTarget {
  /** Normalized coordinates: right and down are positive. */
  x: number
  y: number
  active: boolean
}

export interface AvatarMotionOptions {
  reducedMotion: boolean
  finePointer: boolean
  rigged: boolean
}

const radians = (degrees: number) => degrees * Math.PI / 180
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))
const normalized = (value: number) => Number.isFinite(value) ? clamp(value, -1, 1) : 0
const reactionDuration = 0.7

export function createAvatarMotion(): AvatarMotionState {
  return { pitch: 0, yaw: 0, roll: 0, offsetY: 0, time: 0, reactionTime: null }
}

/** Repeated clicks cannot restart an in-progress gesture. */
export function triggerAvatarReaction(state: AvatarMotionState): boolean {
  if (state.reactionTime !== null) return false
  state.reactionTime = 0
  return true
}

/** Mutates a ref-owned state; never schedules a React update. Angles are radians. */
export function stepAvatarMotion(
  state: AvatarMotionState,
  target: AvatarPointerTarget,
  delta: number,
  options: AvatarMotionOptions,
): void {
  if (options.reducedMotion) {
    Object.assign(state, createAvatarMotion())
    return
  }

  // Ignore suspension time and invalid deltas instead of jumping on tab resume.
  const dt = Number.isFinite(delta) ? clamp(delta, 0, 0.05) : 0
  if (dt === 0) return
  state.time += dt

  let reaction = 0
  if (state.reactionTime !== null) {
    state.reactionTime += dt
    if (state.reactionTime >= reactionDuration) {
      state.reactionTime = null
    } else {
      // Zero slope at either end prevents abrupt interruption of cursor following.
      reaction = Math.sin(Math.PI * state.reactionTime / reactionDuration) ** 2
    }
  }

  const following = options.finePointer && target.active
  const idleStrength = (options.finePointer ? 1 : 0.45) * (following ? 0.3 : 1)
  const idlePitch = Math.sin(state.time * 0.73) * radians(0.24) * idleStrength
  const idleYaw = Math.sin(state.time * 0.41 + 0.2) * radians(0.3) * idleStrength
  const idleRoll = Math.sin(state.time * 0.57) * radians(0.16) * idleStrength
  const pitchLimit = radians(options.rigged ? 7 : 2)
  const yawLimit = radians(options.rigged ? 10 : 3)
  const followStrength = following ? 1 - reaction * 0.85 : 0
  const pitchTarget = clamp(
    normalized(target.y) * pitchLimit * followStrength + idlePitch
      + reaction * radians(options.rigged ? 3.5 : 1.2),
    -pitchLimit, pitchLimit,
  )
  const yawTarget = clamp(normalized(target.x) * yawLimit * followStrength + idleYaw, -yawLimit, yawLimit)
  const rollTarget = idleRoll - reaction * radians(options.rigged ? 2 : 0.8)
  const bobTarget = Math.sin(state.time * 1.17) * 0.0015 * idleStrength

  // Exponential damping has the same response at different refresh rates.
  const alpha = 1 - Math.exp(-7 * dt)
  state.pitch += (pitchTarget - state.pitch) * alpha
  state.yaw += (yawTarget - state.yaw) * alpha
  state.roll += (rollTarget - state.roll) * alpha
  state.offsetY += (bobTarget - state.offsetY) * alpha
}
