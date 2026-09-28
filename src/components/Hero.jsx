import { WHATSAPP_LINK } from '../constants'
import { IconWhatsApp, IconPlate, IconSmoke, IconSkewer, IconParty } from './Icons'

const servicos = [
  { icon: IconPlate, titulo: 'Churrasco completo', texto: 'Carnes, acompanhamentos e serviço' },
  { icon: IconSmoke, titulo: 'Defumados BBQ', texto: 'Brisket, costela e pulled pork' },
  { icon: IconSkewer, titulo: 'Espetinhos', texto: 'Pra festas e confraternizações' },
  { icon: IconParty, titulo: 'Eventos e festas', texto: 'Aniversários, empresas e mais' },
]

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__foto">
        <img src="/images/hero.jpg" alt="Churrasqueiro ao lado do defumador com um brisket pronto na tábua" />
      </div>
      <div className="container hero__conteudo">
        <p className="hero__tag">Buffet de churrasco e BBQ</p>
        <h1>
          Churrasco no <span>ponto certo</span> pro seu evento
        </h1>
        <p className="hero__texto">
          Carnes selecionadas, fogo de lenha e um churrasqueiro que não tem pressa.
          A gente leva a estrutura completa até onde você estiver.
        </p>
        <a className="btn" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <IconWhatsApp /> Pedir orçamento
        </a>
      </div>

      <div className="container">
        <ul className="servicos" aria-label="Serviços">
          {servicos.map(({ icon: Icon, titulo, texto }) => (
            <li key={titulo}>
              <span className="servicos__icone"><Icon /></span>
              <div>
                <strong>{titulo}</strong>
                <small>{texto}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
