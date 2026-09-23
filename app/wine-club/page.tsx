const PLANS = [
  {
    name: "Essencial",
    price: "R$ 149",
    period: "/mês",
    benefits: [
      "2 garrafas selecionadas por mês",
      "10% de desconto na loja",
      "Convite para degustações abertas",
    ],
    featured: false,
  },
  {
    name: "Signature",
    price: "R$ 269",
    period: "/mês",
    benefits: [
      "4 garrafas, incluindo edições limitadas",
      "15% de desconto na loja",
      "Acesso antecipado a lançamentos",
      "1 visita guiada gratuita por ano",
    ],
    featured: true,
  },
  {
    name: "Maison Privé",
    price: "R$ 449",
    period: "/mês",
    benefits: [
      "6 garrafas selecionadas a dedo",
      "20% de desconto na loja",
      "Masterclass anual com o enólogo",
      "Convite para eventos privados",
    ],
    featured: false,
  },
];

export default function WineClubPage() {
  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80')",
          }}
        />
        <div className="page-hero__scrim" />
        <div className="page-hero__content">
          <div className="eyebrow">Uma comunidade de amantes do vinho</div>
          <h1 className="serif">Wine Club</h1>
        </div>
      </section>

      <section className="section">
        <div className="container center-copy">
          <p>
            Escolha o nível de associação que combina com você e receba
            garrafas selecionadas, acesso antecipado e experiências exclusivas
            da Maison &amp; Co. ao longo do ano.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="plans">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card ${plan.featured ? "plan-card--featured" : ""}`}
              >
                {plan.featured && (
                  <span className="plan-card__tag">MAIS POPULAR</span>
                )}
                <h3 className="serif">{plan.name}</h3>
                <div className="plan-card__price">
                  {plan.price}
                  <span> {plan.period}</span>
                </div>
                <ul>
                  {plan.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`btn ${plan.featured ? "btn-outline-light" : "btn-dark"}`}
                >
                  ASSINAR
                </a>
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
                src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80"
                alt="Garrafas do Wine Club"
              />
            </div>
            <div className="split__text">
              <h2 className="serif">Programa de Indicação</h2>
              <p>
                Convide amigos para o Wine Club e ganhe uma garrafa de edição
                limitada a cada nova assinatura confirmada. Sem limite de
                indicações.
              </p>
              <a href="#" className="btn btn-wine">
                INDICAR UM AMIGO
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
