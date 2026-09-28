import { useEffect, useState } from 'react'
import { WHATSAPP_LINK, NOME } from '../constants'
import { IconWhatsApp, IconMenu, IconClose } from './Icons'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo] = useState('#inicio')

  useEffect(() => {
    const secoes = links.map((l) => document.querySelector(l.href)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setAtivo('#' + e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    secoes.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
  }, [aberto])

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#inicio" className="brand" onClick={() => setAberto(false)}>
          <img src="/images/logo.png" alt="" width="48" height="48" />
          <span>{NOME}</span>
        </a>

        <nav className={`nav ${aberto ? 'nav--aberto' : ''}`} aria-label="Menu principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={ativo === l.href ? 'ativo' : ''}
              onClick={() => setAberto(false)}
            >
              {l.label}
            </a>
          ))}
          <a className="btn btn--pequeno nav__cta" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp /> Chamar no WhatsApp
          </a>
        </nav>

        <button
          className="menu-btn"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  )
}
