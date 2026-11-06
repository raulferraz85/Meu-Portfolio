import { GlassButton } from '../components/GlassButton'

export function Projects() {
  return (
    <section className="placeholder-page" aria-labelledby="projects-title">
      <p className="eyebrow">Portfólio / Projetos</p>
      <h1 id="projects-title">Projetos<span className="title-dot">.</span></h1>
      <p>A seleção de projetos está em preparação. Em breve, você poderá conhecer os trabalhos por aqui.</p>
      <GlassButton to="/">Voltar ao início <span aria-hidden="true">↗</span></GlassButton>
    </section>
  )
}
