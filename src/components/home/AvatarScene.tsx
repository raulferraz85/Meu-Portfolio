import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Box3, Bone, Euler, Group, Quaternion, SkinnedMesh, Vector3 } from 'three'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js'
import type { AvatarInteraction } from '../../hooks/useAvatarInteraction'
import { stepAvatarMotion } from '../../lib/avatarMotion'

interface AvatarSceneProps {
  interaction: AvatarInteraction
  reducedMotion: boolean
  finePointer: boolean
  active: boolean
  onReady: () => void
  onFailure: () => void
  onReact: () => void
}

export function AvatarScene({ interaction, reducedMotion, finePointer, active, onReady, onFailure, onReact }: AvatarSceneProps) {
  // This inspected GLB has no compressed resources, animation clips or morph targets.
  const { scene } = useGLTF('/models/raul-avatar.glb', false, false)
  const pivot = useRef<Group>(null)
  const { gl, invalidate } = useThree()
  const frameCount = useRef(0)
  const model = useMemo(() => {
    const object = clone(scene)
    object.updateMatrixWorld(true)
    const bounds = new Box3().setFromObject(object)
    const size = bounds.getSize(new Vector3())
    const center = bounds.getCenter(new Vector3())
    const scale = 2.7 / Math.max(size.y, 0.001)
    const bones: Bone[] = []
    object.traverse((node) => { if (node instanceof Bone) bones.push(node) })
    const neck = bones.find((bone) => bone.name.endsWith('Head_0'))
    const head = bones.find((bone) => bone.name.endsWith('Head_1'))
    const joints = [neck, head].filter((bone): bone is Bone => Boolean(bone)).map((bone) => ({
      bone,
      rest: bone.quaternion.clone(),
      weight: neck && head ? (bone === neck ? 0.7 : 0.3) : 1,
    }))
    return { object, scale, position: center.multiplyScalar(-scale), joints }
  }, [scene])
  const scratch = useMemo(() => ({
    parentWorld: new Quaternion(), inverseParent: new Quaternion(),
    deltaWorld: new Quaternion(), localDelta: new Quaternion(), euler: new Euler(),
  }), [])

  useEffect(() => {
    const canvas = gl.domElement
    const onContextLost = (event: Event) => { event.preventDefault(); onFailure() }
    canvas.addEventListener('webglcontextlost', onContextLost)
    return () => canvas.removeEventListener('webglcontextlost', onContextLost)
  }, [gl, onFailure])

  useEffect(() => { if (active) invalidate() }, [active, reducedMotion, invalidate])

  useEffect(() => () => {
    // Clones own their skeleton textures; cached GLTF geometry/materials remain shared.
    model.object.traverse((node) => { if (node instanceof SkinnedMesh) node.skeleton.dispose() })
  }, [model])

  useFrame((_, delta) => {
    if (!pivot.current || !active) return
    const { motion, target } = interaction.current
    const rigged = model.joints.length > 0
    stepAvatarMotion(motion, target, delta, { reducedMotion, finePointer, rigged })

    // Pivot transforms never change mesh scale or the original object transforms.
    pivot.current.rotation.set(rigged ? 0 : motion.pitch, rigged ? 0 : motion.yaw, rigged ? 0 : motion.roll)
    pivot.current.position.y = motion.offsetY
    pivot.current.updateMatrixWorld(true)
    for (const { bone, rest, weight } of model.joints) {
      // Tripo's bone axes differ from world axes: conjugate the desired offset
      // into the parent's space, then compose with the original local quaternion.
      bone.parent!.getWorldQuaternion(scratch.parentWorld)
      scratch.inverseParent.copy(scratch.parentWorld).invert()
      scratch.deltaWorld.setFromEuler(scratch.euler.set(motion.pitch * weight, motion.yaw * weight, motion.roll * weight, 'YXZ'))
      scratch.localDelta.copy(scratch.inverseParent).multiply(scratch.deltaWorld).multiply(scratch.parentWorld)
      bone.quaternion.copy(scratch.localDelta).multiply(rest)
      bone.updateMatrixWorld(true)
    }

    // Reveal only after a complete render. Demand mode needs a second frame.
    if (frameCount.current < 2) {
      frameCount.current += 1
      if (frameCount.current === 2) onReady()
      else invalidate()
    }
  })

  return (
    <group ref={pivot} onClick={(event) => {
      if (event.delta > 8) return
      event.stopPropagation()
      onReact()
    }}>
      <group scale={model.scale} position={model.position}>
        <primitive object={model.object} dispose={null} />
      </group>
    </group>
  )
}
