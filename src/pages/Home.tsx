import { Avatar } from '../components/Avatar'
import { GlassButton } from '../components/GlassButton'
import { profile } from '../data/profile'

export function Home() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Avatar />
      <div className="hero-copy">
        <p className="eyebrow"><span aria-hidden="true" /> Olá, eu sou</p>
        <h1 id="hero-title">Raul<br /><span>Ferraz<span className="title-dot">.</span></span></h1>
        <p className="hero-intro">{profile.introduction}</p>
        <p className="hero-description">{profile.description}</p>
        <GlassButton to="/projetos">Explorar projetos <span aria-hidden="true">↗</span></GlassButton>
      </div>
      <div className="hero-bottom">
        <span className="eyebrow">Áreas de interesse</span>
        <ul aria-label="Áreas de interesse">{profile.interests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
      </div>
    </section>
  )
}
