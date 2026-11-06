import { Link, type LinkProps } from 'react-router'

export function GlassButton({ children, className = '', ...props }: LinkProps) {
  return <Link className={`glass-button ${className}`} {...props}>{children}</Link>
}
