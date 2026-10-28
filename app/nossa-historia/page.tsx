const TIMELINE = [
  {
    year: "1968",
    title: "Um sonho de família",
    text: "João e Marta Maison plantam as primeiras videiras nas colinas de Roma, com a ambição de criar vinhos que contassem a história da própria terra.",
  },
  {
    year: "1985",
    title: "Primeira colheita premiada",
    text: "O Sangiovese Riserva da vinícola recebe seu primeiro reconhecimento internacional, consolidando o nome Maison & Co. entre os produtores da região.",
  },
  {
    year: "2004",
    title: "Expansão do terroir",
    text: "Novos vinhedos são adquiridos na encosta voltada a leste, ideais para castas brancas, ampliando o portfólio da casa.",
  },
  {
    year: "2023",
    title: "Tradição e inovação",
    text: "A terceira geração assume a vinificação, unindo métodos ancestrais a técnicas sustentáveis de baixo impacto ambiental.",
  },
];

export default function NossaHistoriaPage() {
  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80')",
          }}
        />
        <div className="page-hero__scrim" />
        <div className="page-hero__content">
          <div className="eyebrow">Desde 1968</div>
          <h1 className="serif">Nossa História</h1>
        </div>
      </section>

      <section className="section">
        <div className="container center-copy">
          <p>
            Nossa vinícola começou como um sonho de família — a visão de criar
            vinhos que refletissem a alma da nossa terra. Décadas depois,
            seguimos essa tradição, unindo paixão e inovação para trazer
            vinhos com autenticidade e elegância a cada garrafa.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <h2 className="serif">Uma linha do tempo</h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((item) => (
              <div className="timeline-item" key={item.year}>
                <span className="year serif">{item.year}</span>
                <div>
                  <h3 className="serif">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__text">
              <h2 className="serif">Terroir &amp; Vinhedos</h2>
              <p>
                As colinas de Roma oferecem solo argiloso-calcário e um
                microclima único, moldando a personalidade de cada casta que
                cultivamos com respeito ao ritmo das estações.
              </p>
              <a href="/visitar" className="btn btn-wine">
                CONHECER OS VINHEDOS
              </a>
            </div>
            <div className="split__media">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=85"
                alt="Vinhedos ao entardecer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <img
                src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=800&q=80"
                alt="Barris de carvalho na adega"
              />
            </div>
            <div className="split__text">
              <h2 className="serif">Processo de Vinificação</h2>
              <p>
                Colhemos à mão, fermentamos em ritmo natural e envelhecemos em
                carvalho francês — cada etapa pensada para preservar a
                identidade da uva e do lugar de onde ela vem.
              </p>
              <a href="#" className="btn btn-wine">
                VER CERTIFICADOS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
