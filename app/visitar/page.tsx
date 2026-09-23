const EXPERIENCES = [
  {
    num: "01",
    title: "Visita Guiada & Degustação",
    text: "Um passeio pelos vinhedos e pela adega, encerrado com a degustação de cinco rótulos selecionados.",
  },
  {
    num: "02",
    title: "Masterclass do Enólogo",
    text: "Sessão íntima com o nosso enólogo, explorando técnicas de vinificação e harmonizações.",
  },
  {
    num: "03",
    title: "Eventos Privados",
    text: "Jantares e celebrações personalizadas entre os barris centenários da nossa adega histórica.",
  },
];

export default function VisitarPage() {
  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=1600&q=80')",
          }}
        />
        <div className="page-hero__scrim" />
        <div className="page-hero__content">
          <div className="eyebrow">Venha nos visitar</div>
          <h1 className="serif">Visitar a Maison</h1>
        </div>
      </section>

      <section className="section">
        <div className="container center-copy">
          <p>
            Abrimos as portas da nossa vinícola para quem deseja viver de
            perto a jornada de cada garrafa — dos vinhedos à taça.
            Reserve sua experiência e venha provar a nossa história.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <h2 className="serif">Experiências</h2>
          </div>
          <div className="info-cards">
            {EXPERIENCES.map((exp) => (
              <div className="info-card" key={exp.num}>
                <span className="num serif">{exp.num}</span>
                <h3 className="serif">{exp.title}</h3>
                <p>{exp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <img
                src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=800&q=80"
                alt="Sala de degustação da vinícola"
              />
            </div>
            <div className="split__text">
              <h2 className="serif">Horários &amp; Reservas</h2>
              <p>
                As visitas acontecem todos os dias, mediante reserva prévia.
                Grupos de até 12 pessoas são recebidos por um dos nossos
                anfitriões.
              </p>
              <p style={{ marginTop: -10, marginBottom: 26 }}>
                Vinícola: 10:00 – 18:00 · Degustações: 10:00 – 16:00
              </p>
              <a href="#" className="btn btn-wine">
                RESERVAR VISITA
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <h2 className="serif">Como Chegar</h2>
          </div>
          <div className="map-block">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80"
              alt="Mapa de acesso à vinícola"
            />
          </div>
          <p style={{ marginTop: 20, color: "var(--ink-soft)" }}>
            Maison Vineyards · Via dea Marrana, 44 · 1000 Roma, Itália
          </p>
        </div>
      </section>
    </>
  );
}
