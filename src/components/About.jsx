import { IconFlame } from './Icons'

const diferenciais = [
  { titulo: 'Carne selecionada', texto: 'Cortes escolhidos a dedo, com qualidade que dá pra sentir na primeira mordida.' },
  { titulo: 'Churrasqueiro experiente', texto: 'Quem cuida do fogo sabe o tempo de cada carne, do espeto ao defumado de horas.' },
  { titulo: 'Estrutura completa', texto: 'Defumador, churrasqueira, utensílios e serviço. Você só recebe os convidados.' },
]

export default function About() {
  return (
    <section id="sobre" className="sobre">
      <div className="container sobre__grid">
        <figure className="sobre__foto">
          <img src="/images/sobre.jpg" alt="Churrasqueiro na bancada, ao lado de uma placa de madeira escrita Fogo, Tempo, Respeito" loading="lazy" />
        </figure>

        <div className="sobre__texto">
          <p className="rotulo">Sobre a gente</p>
          <h2>Churrasco é prosa boa em volta do fogo</h2>
          <p>
            O Prosa e Churras BBQ nasceu da mistura de duas paixões: o churrasco
            brasileiro de raiz e o BBQ defumado, feito devagar, com lenha e paciência.
          </p>
          <p>
            Em cada evento a gente cuida de tudo — do acendimento do fogo ao corte
            na tábua, na frente dos seus convidados. Porque churrasco bom também é
            espetáculo, e a conversa em volta da brasa faz parte do prato.
          </p>

          <p className="lema" aria-label="Nosso lema: Fogo, tempo, respeito">
            <span>Fogo.</span>
            <span>Tempo.</span>
            <span>Respeito.</span>
          </p>
        </div>
      </div>

      <div className="container">
        <h3 className="diferenciais__titulo">Por que escolher a gente</h3>
        <ul className="diferenciais">
          {diferenciais.map((d) => (
            <li key={d.titulo}>
              <IconFlame />
              <strong>{d.titulo}</strong>
              <p>{d.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
