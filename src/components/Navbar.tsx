import { NavLink } from 'react-router'

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegação principal">
        <NavLink to="/" className="brand" aria-label="Raul Ferraz — início">rf<span aria-hidden="true">.</span></NavLink>
        <div className="nav-links">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/projetos">Projetos <span aria-hidden="true">↗</span></NavLink>
        </div>
      </nav>
    </header>
  )
}
