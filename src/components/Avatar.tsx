import { useState } from 'react'
import { profile } from '../data/profile'

export function Avatar() {
  const [failed, setFailed] = useState(false)
  const avatar = profile.avatar

  return (
    <div className="avatar-stage">
      {avatar && !failed ? (
        <img className="avatar-image" src={avatar.src} alt={avatar.alt} width={avatar.width} height={avatar.height} fetchPriority="high" onError={() => setFailed(true)} />
      ) : (
        <div className="avatar-placeholder" role="img" aria-label="Espaço reservado para o avatar de Raul Ferraz; imagem ainda não disponível">
          <span className="avatar-monogram" aria-hidden="true">rf<span>.</span></span>
          <span className="avatar-caption">Retrato em breve</span>
        </div>
      )}
      <span className="stage-label" aria-hidden="true">RAUL FERRAZ / PORTFÓLIO</span>
    </div>
  )
}
