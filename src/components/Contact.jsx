import { WHATSAPP_LINK, INSTAGRAM_LINK, INSTAGRAM_USUARIO, REGIAO } from '../constants'
import { IconWhatsApp, IconInstagram, IconPin } from './Icons'

export default function Contact() {
  return (
    <section id="contato" className="contato">
      <div className="contato__fundo" aria-hidden="true">
        <img src="/images/contato.jpg" alt="" loading="lazy" />
      </div>
      <div className="container contato__inner">
        <div className="contato__chamada">
          <p className="rotulo">Contato</p>
          <h2>Vamos conversar?</h2>
          <p>
            Conta pra gente a data, o local e quantas pessoas vão. Respondemos
            pelo WhatsApp com um orçamento sem compromisso.
          </p>
          <a className="btn btn--grande" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp /> Chamar no WhatsApp
          </a>
        </div>

        <ul className="contato__lista">
          <li>
            <IconWhatsApp />
            <div>
              <small>WhatsApp</small>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Resposta rápida por mensagem</a>
            </div>
          </li>
          <li>
            <IconInstagram />
            <div>
              <small>Instagram</small>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">@{INSTAGRAM_USUARIO}</a>
            </div>
          </li>
          <li>
            <IconPin />
            <div>
              <small>Localização</small>
              <span>{REGIAO}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
