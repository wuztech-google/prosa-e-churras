import { NOME, INSTAGRAM_LINK } from '../constants'
import { IconInstagram } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>{NOME} © {new Date().getFullYear()} · Todos os direitos reservados</span>
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
          <IconInstagram /> Siga no Instagram
        </a>
      </div>
    </footer>
  )
}
