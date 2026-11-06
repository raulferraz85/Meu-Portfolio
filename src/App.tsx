import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { Navbar } from './components/Navbar'
import { GlassButton } from './components/GlassButton'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

export function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = `${pathname === '/' ? 'Início' : pathname === '/projetos' ? 'Projetos' : 'Página não encontrada'} — Raul Ferraz`
    document.getElementById('main-content')?.focus({ preventScroll: true })
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Navbar />
      <main id="main-content" className="container" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="*" element={<section className="placeholder-page"><h1>Página não encontrada</h1><GlassButton to="/">Voltar ao início</GlassButton></section>} />
        </Routes>
      </main>
      <footer className="footer container"><span>Raul Ferraz</span><span>Software, ideias e aprendizado.</span></footer>
    </>
  )
}
