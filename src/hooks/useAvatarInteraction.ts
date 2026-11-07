import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { KeyboardEvent, PointerEvent } from 'react'
import { createAvatarMotion, triggerAvatarReaction } from '../lib/avatarMotion'

function useMediaQuery(query: string) {
  const subscribe = useCallback((notify: () => void) => {
    const media = window.matchMedia(query)
    media.addEventListener('change', notify)
    return () => media.removeEventListener('change', notify)
  }, [query])
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false)
}

function subscribeVisibility(notify: () => void) {
  document.addEventListener('visibilitychange', notify)
  return () => document.removeEventListener('visibilitychange', notify)
}

export function useAvatarInteraction() {
  const region = useRef<HTMLDivElement>(null)
  const interaction = useRef({
    target: { x: 0, y: 0, active: false },
    motion: createAvatarMotion(),
  })
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const visible = useSyncExternalStore(subscribeVisibility, () => !document.hidden, () => true)
  const [inView, setInView] = useState(true)

  const resetPointer = useCallback(() => {
    Object.assign(interaction.current.target, { x: 0, y: 0, active: false })
  }, [])

  useEffect(() => {
    const element = region.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible || !inView || reducedMotion || !finePointer) resetPointer()
  }, [visible, inView, reducedMotion, finePointer, resetPointer])

  useEffect(() => {
    window.addEventListener('blur', resetPointer)
    return () => window.removeEventListener('blur', resetPointer)
  }, [resetPointer])

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!finePointer || reducedMotion || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    Object.assign(interaction.current.target, {
      x: Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1)),
      y: Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1)),
      active: true,
    })
  }

  function reactToClick() {
    if (!reducedMotion && visible && inView) triggerAvatarReaction(interaction.current.motion)
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (!event.repeat) reactToClick()
    }
  }

  return {
    region, interaction, reducedMotion, finePointer,
    active: visible && inView,
    onPointerMove, onPointerLeave: resetPointer, onKeyDown, reactToClick,
  }
}

export type AvatarInteraction = ReturnType<typeof useAvatarInteraction>['interaction']
