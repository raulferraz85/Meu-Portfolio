import { Component } from 'react'
import type { ReactNode } from 'react'

export class AvatarErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: Error) {
    console.warn('Avatar 3D indisponível; usando o retrato estático.', error.message)
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}
