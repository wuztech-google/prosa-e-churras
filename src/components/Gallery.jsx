const fotos = [
  { src: '/images/galeria-1.jpg', alt: 'Brisket sendo fatiado e servido para um convidado com salada e feijão' },
  { src: '/images/galeria-2.jpg', alt: 'Churrasqueiro abrindo o defumador com um brisket na grelha' },
  { src: '/images/galeria-3.jpg', alt: 'Close do brisket defumado sendo fatiado na tábua' },
  { src: '/images/galeria-4.jpg', alt: 'Fatias de brisket com anel de fumaça rosado' },
]

export default function Gallery() {
  return (
    <section className="galeria" aria-labelledby="galeria-titulo">
      <div className="container galeria__grid">
        <div className="galeria__intro">
          <p className="rotulo">Nosso trabalho</p>
          <h2 id="galeria-titulo">Direto da brasa</h2>
          <p>Um pouco do que sai do nosso defumador e da nossa tábua em cada evento.</p>
        </div>
        {fotos.map((f) => (
          <figure key={f.src}>
            <img src={f.src} alt={f.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}
