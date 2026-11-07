import { Suspense, useCallback, useState } from 'react'
import type { ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { useAvatarInteraction } from '../../hooks/useAvatarInteraction'
import { AvatarScene } from './AvatarScene'

export default function Avatar3D({ fallback }: { fallback: ReactNode }) {
  const { region, interaction, reducedMotion, finePointer, active, onPointerMove, onPointerLeave, onKeyDown, reactToClick } = useAvatarInteraction()
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const onReady = useCallback(() => setReady(true), [])
  const onFailure = useCallback(() => setFailed(true), [])
  const interactive = ready && !reducedMotion

  if (failed) return fallback

  return (
    <div
      ref={region}
      className={`avatar-interactive${interactive ? ' is-ready' : ''}`}
      role={interactive ? 'button' : 'img'}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? 'Avatar 3D de Raul Ferraz. Clique ou pressione Enter para cumprimentar.' : 'Avatar 3D de Raul Ferraz'}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerCancel={onPointerLeave}
      onBlur={onPointerLeave}
      onKeyDown={interactive ? onKeyDown : undefined}
    >
      {!ready && <div className="avatar-poster" aria-hidden="true">{fallback}</div>}
      <Canvas
        className="avatar-canvas"
        aria-hidden="true"
        fallback={fallback}
        dpr={finePointer ? [1, 1.5] : 1}
        frameloop={active ? (reducedMotion ? 'demand' : 'always') : 'never'}
        camera={{ position: [0, 0, 5.6], fov: 34, near: 0.1, far: 30 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        style={{ touchAction: 'pan-y' }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <directionalLight position={[-3, 1, 2]} intensity={0.45} color="#c5bbff" />
        <Suspense fallback={null}>
          <AvatarScene
            interaction={interaction}
            reducedMotion={reducedMotion}
            finePointer={finePointer}
            active={active}
            onReady={onReady}
            onFailure={onFailure}
            onReact={reactToClick}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
