const TIMELINE = [
  {
    year: "1968",
    title: "Um sonho de família",
    text: "João e Marta Maison plantam as primeiras videiras nas colinas históricas, com a ambição de criar vinhos que expressassem a identidade viva da própria terra.",
  },
  {
    year: "1985",
    title: "Primeira colheita premiada",
    text: "O Sangiovese Gran Riserva da vinícola recebe seu primeiro reconhecimento internacional em Bordeaux, consolidando a Maison & Co. entre as grandes casas vinícolas.",
  },
  {
    year: "2004",
    title: "Expansão do terroir & Novas castas",
    text: "Novos vinhedos de encosta são adquiridos em solos argilo-calcários, ideais para o cultivo de Chardonnay e castas nobres mediterrâneas.",
  },
  {
    year: "2023",
    title: "Tradição e sustentabilidade",
    text: "A terceira geração da família assume a enologia, unindo processos ancestrais de vinificação em carvalho a práticas sustentáveis e colheita estritamente manual.",
  },
];

export default function NossaHistoriaPage() {
  return (
    <>
      {/* HERO: Vinhedos históricos ao entardecer */}
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600&q=85')",
          }}
        />
        <div className="page-hero__scrim" />
        <div className="page-hero__content">
          <div className="eyebrow">Desde 1968</div>
          <h1 className="serif">Nossa História</h1>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="section">
        <div className="container center-copy">
          <p>
            Nossa vinícola começou como um sonho de família — a visão de cultivar
            videiras que capturassem a alma do nosso terroir e a passagem paciente das
            estações. Mais de cinco décadas depois, honramos esse legado mantendo a colheita
            manual, o respeito pelo solo e a maturação lenta em barricas de carvalho francês.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <h2 className="serif">Cinco décadas de tradição</h2>
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

      {/* TERROIR & VINHEDOS: Uvas e parreirais históricos */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__text">
              <div className="eyebrow" style={{ color: "var(--wine)", marginBottom: "8px" }}>
                Origem &amp; Terroir
              </div>
              <h2 className="serif">Terroir &amp; Vinhedos</h2>
              <p>
                Nossos vinhedos repousam sobre encostas de solo argilo-calcário com excelente
                drenagem natural, beneficiando-se de dias ensolarados e noites frescas.
                Esse microclima privilegiado proporciona uma maturação lenta e equilibrada
                das uvas, conferindo aromas complexos e acidez viva a cada safra.
              </p>
              <a href="/visitar" className="btn btn-wine">
                CONHECER OS VINHEDOS
              </a>
            </div>
            <div className="split__media">
              <img
                src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=1200&q=85"
                alt="Cachos de uvas maturando nas videiras sob o sol do terroir histórico"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO DE VINIFICAÇÃO: Barris de carvalho na adega subterrânea */}
      <section className="section section--tight">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <img
                src="https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=1200&q=85"
                alt="Barris de carvalho francês e envelhecimento na adega subterrânea histórica"
              />
            </div>
            <div className="split__text">
              <div className="eyebrow" style={{ color: "var(--wine)", marginBottom: "8px" }}>
                Arte &amp; Maturação
              </div>
              <h2 className="serif">Processo de Vinificação</h2>
              <p>
                Colhemos as uvas manualmente nas primeiras horas da manhã, fermentamos em
                temperatura controlada e realizamos a maturação paciente em barricas de carvalho
                francês nas galerias subterrâneas da vinícola. Cada etapa une ciência, intuição
                e a nobreza do tempo para criar rótulos que evoluem com elegância na garrafa.
              </p>
              <a href="/vinhos" className="btn btn-wine">
                EXPLORAR OS VINHOS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
