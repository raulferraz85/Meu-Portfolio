import assert from 'node:assert/strict'
import test from 'node:test'
import { createAvatarMotion, stepAvatarMotion, triggerAvatarReaction } from '../src/lib/avatarMotion.ts'

const options = { reducedMotion: false, finePointer: true, rigged: true }
const neutral = { x: 0, y: 0, active: false }
const radians = (degrees: number) => degrees * Math.PI / 180

test('extreme pointer inputs stay inside rigged and unrigged angle limits', () => {
  for (const rigged of [true, false]) {
    const state = createAvatarMotion()
    for (let frame = 0; frame < 1200; frame++) {
      if (frame % 120 === 0) triggerAvatarReaction(state)
      stepAvatarMotion(state, { x: 500, y: -500, active: true }, 1 / 60, { ...options, rigged })
      assert.ok(Math.abs(state.yaw) <= radians(rigged ? 10 : 3))
      assert.ok(Math.abs(state.pitch) <= radians(rigged ? 7 : 2))
    }
  }
})

test('cursor exit returns smoothly to subtle idle instead of snapping', () => {
  const state = createAvatarMotion()
  for (let frame = 0; frame < 180; frame++) {
    stepAvatarMotion(state, { x: 1, y: 1, active: true }, 1 / 60, options)
  }
  const priorYaw = state.yaw
  stepAvatarMotion(state, neutral, 1 / 60, options)
  assert.ok(state.yaw > 0 && state.yaw < priorYaw)
  assert.ok(priorYaw - state.yaw < radians(2))
  for (let frame = 0; frame < 180; frame++) stepAvatarMotion(state, neutral, 1 / 60, options)
  assert.ok(Math.abs(state.yaw) < radians(0.5))
  assert.ok(Math.abs(state.pitch) < radians(0.5))
})

test('reaction lasts 0.7 seconds, ignores repeated clicks, and settles without drift', () => {
  const state = createAvatarMotion()
  assert.equal(triggerAvatarReaction(state), true)
  let largestPitch = 0
  for (let frame = 0; frame < 40; frame++) {
    assert.equal(triggerAvatarReaction(state), false)
    stepAvatarMotion(state, neutral, 1 / 60, options)
    largestPitch = Math.max(largestPitch, state.pitch)
  }
  assert.ok(largestPitch > radians(1))
  assert.notEqual(state.reactionTime, null)
  for (let frame = 0; frame < 4; frame++) stepAvatarMotion(state, neutral, 1 / 60, options)
  assert.equal(state.reactionTime, null)
  for (let frame = 0; frame < 180; frame++) stepAvatarMotion(state, neutral, 1 / 60, options)
  assert.ok(Math.abs(state.pitch) < radians(0.5))
  assert.ok(Math.abs(state.roll) < radians(0.3))
  assert.equal(triggerAvatarReaction(state), true)
})

test('reduced motion immediately resets movement and cancels gestures', () => {
  const state = createAvatarMotion()
  triggerAvatarReaction(state)
  stepAvatarMotion(state, { x: 1, y: 1, active: true }, 0.05, options)
  stepAvatarMotion(state, neutral, 1 / 60, { ...options, reducedMotion: true })
  assert.deepEqual(state, createAvatarMotion())
})

test('motion remains consistent at 30, 60, and 120 frames per second', () => {
  const results = [30, 60, 120].map((fps) => {
    const state = createAvatarMotion()
    for (let frame = 0; frame < fps * 2; frame++) {
      stepAvatarMotion(state, { x: 0.8, y: -0.5, active: true }, 1 / fps, options)
    }
    return state
  })
  for (const state of results) {
    assert.ok(Math.abs(state.yaw - results[0].yaw) < radians(0.03))
    assert.ok(Math.abs(state.pitch - results[0].pitch) < radians(0.03))
  }
})

test('suspended tabs and invalid inputs cannot introduce jumps or NaNs', () => {
  const state = createAvatarMotion()
  const target = { x: 1, y: 1, active: true }
  stepAvatarMotion(state, target, 120, options)
  assert.ok(state.time <= 0.05)
  assert.ok(state.yaw < radians(4))
  const before = { ...state }
  stepAvatarMotion(state, target, -1, options)
  stepAvatarMotion(state, target, Number.NaN, options)
  assert.deepEqual(state, before)
  stepAvatarMotion(state, { x: Number.NaN, y: Infinity, active: true }, 1 / 60, options)
  assert.ok(Number.isFinite(state.pitch) && Number.isFinite(state.yaw))
})

test('touch devices ignore pointer targets and have less idle movement', () => {
  const touch = createAvatarMotion()
  const desktop = createAvatarMotion()
  for (let frame = 0; frame < 180; frame++) {
    stepAvatarMotion(touch, { x: 1, y: 1, active: true }, 1 / 60, { ...options, finePointer: false })
    stepAvatarMotion(desktop, neutral, 1 / 60, options)
  }
  assert.ok(Math.abs(touch.yaw) < Math.abs(desktop.yaw))
  assert.ok(Math.abs(touch.offsetY) < Math.abs(desktop.offsetY))
})
