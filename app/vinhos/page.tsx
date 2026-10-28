"use client";

import { useState, useEffect, Suspense } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const CATEGORIES = ["Todos", "Tinto", "Branco", "Rosé", "Espumante"];

export interface WineDetails {
  uvas: string;
  regiao: string;
  teorAlcoolico: string;
  maturacao: string;
  temperatura: string;
  guarda: string;
  volume: string;
  harmonizacao: string;
  visual: string;
  olfativo: string;
  gustativo: string;
}

export interface WineItem {
  id: number;
  category: "Tinto" | "Branco" | "Rosé" | "Espumante";
  name: string;
  vintage: string;
  description: string;
  fullDescription?: string;
  price: string;
  image: string;
  details: WineDetails;
}

const WINES: WineItem[] = [
  {
    id: 1,
    category: "Tinto",
    name: "Cabernet Sauvignon",
    vintage: "Safra 2021",
    description: "Vinho encorpado com notas de groselha preta, carvalho francês e especiarias nobres.",
    fullDescription:
      "Cultivado em encostas de solo argilo-calcário com insolação generosa e noites frescas, este Cabernet Sauvignon expressa a essência do nosso terroir mais nobre. Um tinto estruturado, complexo e com maturação impecável que combina força e refinamento em cada detalhe.",
    price: "R$ 98",
    image: `${basePath}/edicoes/vinho-edicao.png`,
    details: {
      uvas: "100% Cabernet Sauvignon",
      regiao: "Vale dos Vinhedos — Seleção de Encosta",
      teorAlcoolico: "13.8% vol.",
      maturacao: "14 meses em barricas de carvalho francês novo",
      temperatura: "16°C a 18°C",
      guarda: "8 a 10 anos",
      volume: "750 ml",
      harmonizacao:
        "Cortes nobres grelhados (bife de chorizo, ancho), cordeiro assado com ervas provençais, queijos curados e risoto de cogumelos porcini.",
      visual: "Vermelho rubi profundo com reflexos violáceos límpidos.",
      olfativo: "Intenso bouquet de groselha preta, ameixa madura, toques de especiarias finas, baunilha e leve tostado de café.",
      gustativo: "Encorpado, de taninos aveludados e maduros, com acidez equilibrada e final longo, persistente e elegante.",
    },
  },
  {
    id: 2,
    category: "Tinto",
    name: "Sangiovese Gran Riserva",
    vintage: "Safra 2019",
    description: "Taninos macios e elegantes com toques de cereja madura, notas de tabaco e cacau.",
    fullDescription:
      "Nossa expressão máxima da uva Sangiovese. Proveniente de vinhas com mais de 35 anos de idade, este rótulo Gran Riserva passa por um longo estágio em carvalho eslavo e garrafa, desenvolvendo uma complexidade aromática envolvente e elegância singular.",
    price: "R$ 145",
    image: `${basePath}/edicoes/vinho-reserva.png`,
    details: {
      uvas: "100% Sangiovese Grosso",
      regiao: "Colinas Históricas — Terroir Ancestral",
      teorAlcoolico: "14.0% vol.",
      maturacao: "18 meses em carvalho eslavo e 6 meses em garrafa",
      temperatura: "16°C a 18°C",
      guarda: "10 a 12 anos",
      volume: "750 ml",
      harmonizacao:
        "Massas artesanais com ragù de javali ou carnes de caça, bisteca alla fiorentina, ossobuco milanês e queijo Pecorino maturado.",
      visual: "Granada brilhante com nuances alaranjadas na borda.",
      olfativo: "Aromas complexos de cerejas secas, tabaco doce, couro nobre, notas de bosque, cacau e sutis notas balsâmicas.",
      gustativo: "Estrutura equilibrada, textura sedosa com taninos finamente polidos e retrogosto gastronômico e memorável.",
    },
  },
  {
    id: 3,
    category: "Branco",
    name: "Maison Chardonnay Gold",
    vintage: "Safra 2022",
    description: "Frescor cítrico marcante com aromas de pera, flor de laranjeira e final amanteigado.",
    fullDescription:
      "Vencedor de distinções por sua cremosidade e equilíbrio aromático. Este Chardonnay é fermentado e maturado com bâtonnage periódica, resultando em um perfil untuoso, elegante e aromático, ideal para grandes momentos gastronômicos.",
    price: "R$ 115",
    image: `${basePath}/edicoes/vinho-chardonnay.png`,
    details: {
      uvas: "100% Chardonnay",
      regiao: "Altos Montes — Clima Temperado Frio",
      teorAlcoolico: "13.0% vol.",
      maturacao: "8 meses em barricas de carvalho francês com bâtonnage semanal",
      temperatura: "10°C a 12°C",
      guarda: "4 a 6 anos",
      volume: "750 ml",
      harmonizacao:
        "Salmão grelhado com molho de maracujá, lagosta na manteiga de sálvia, risoto de frutos do mar, aves nobres e queijo Brie folhado.",
      visual: "Amarelo palha dourado com reflexos reluzentes.",
      olfativo: "Aromas exuberantes de abacaxi maduro, pera d'anjou, flores brancas, com notas de baunilha, brioche e manteiga.",
      gustativo: "Untuoso, volumoso e fresco em boca, com acidez integrada que sustenta sua rica estrutura e final requintado.",
    },
  },
  {
    id: 4,
    category: "Branco",
    name: "Vermentino di Toscana",
    vintage: "Safra 2023",
    description: "Aromas florais delicados com toque salino do litoral mediterrâneo e acidez vibrante.",
    fullDescription:
      "Criado sob a influência direta da brisa marítima e do calor do sol toscano, o Vermentino traduz pura vibração e frescor. Uma colheita manual matutina garante a pureza e a vivacidade de seus aromas de frutas brancas e flores.",
    price: "R$ 89",
    image: `${basePath}/edicoes/vinho-chardonnay.png`,
    details: {
      uvas: "100% Vermentino",
      regiao: "Litoral Mediterrâneo — Brisa Marinha",
      teorAlcoolico: "12.5% vol.",
      maturacao: "Fermentação e afinamento em cubas de aço inoxidável sob temperatura controlada",
      temperatura: "8°C a 10°C",
      guarda: "2 a 3 anos",
      volume: "750 ml",
      harmonizacao:
        "Ostras frescas, ceviche de peixe branco, camarões grelhados no azeite extravirgem, saladas mediterrâneas e queijo de cabra suave.",
      visual: "Amarelo palha com reflexos esverdeados, extremamente límpido.",
      olfativo: "Notas cítricas de lima da pérsia, maçã verde, flor de laranjeira, ervas aromáticas e um toque mineral salino característico.",
      gustativo: "Leve, vivaz e extremamente refrescante, com acidez crocante e um final cítrico limpo que convida ao próximo gole.",
    },
  },
  {
    id: 5,
    category: "Rosé",
    name: "Rosé de Provence Privé",
    vintage: "Safra 2023",
    description: "Leve, frutado e refrescante, com notas de framboesa fresca, morango e pétalas de rosa.",
    fullDescription:
      "Inspirado no estilo clássico provençal, este rosé é obtido por prensagem direta rápida de uvas selecionadas. Apresenta uma cor delicada e um buquê sedutor de frutas vermelhas frescas e flores campestres, com paladar seco e encantador.",
    price: "R$ 108",
    image: `${basePath}/edicoes/vinho-rose.png`,
    details: {
      uvas: "60% Grenache, 30% Cinsault, 10% Syrah",
      regiao: "Provence — Sol e Terroir Mineral",
      teorAlcoolico: "12.8% vol.",
      maturacao: "Breve contato pelicular e afinamento em inox sobre lias finas",
      temperatura: "8°C a 10°C",
      guarda: "2 a 3 anos",
      volume: "750 ml",
      harmonizacao:
        "Carpaccio de carne ou salmão, paella de frutos do mar, bruschettas caprese, queijo burrata e canapés elegantes em dias ensolarados.",
      visual: "Casca de cebola pálida e luminosa, com brilho cristalino.",
      olfativo: "Aromas sutis de framboesa silvestre, morango recém-colhido, pétalas de rosa e nuances minerais.",
      gustativo: "Paladar seco, fresco, com acidez vibrante e textura aveludada, culminando em um final frutado e elegante.",
    },
  },
  {
    id: 6,
    category: "Espumante",
    name: "Spumante Metodo Classico",
    vintage: "Safra 2020",
    description: "Borbulhas finas e persistentes com notas de maçã verde, amêndoas tostadas e brioche.",
    fullDescription:
      "Elaborado pelo tradicional método champenoise com 24 meses de repouso sobre as leveduras nas galerias subterrâneas de nossa vinícola. Um espumante de nobreza ímpar, cremosidade suntuosa e perlage incessante.",
    price: "R$ 135",
    image: `${basePath}/edicoes/vinho-chardonnay.png`,
    details: {
      uvas: "70% Chardonnay, 30% Pinot Noir",
      regiao: "Serra dos Vinhedos — Galerias Históricas",
      teorAlcoolico: "12.5% vol.",
      maturacao: "24 meses de autólise sobre leveduras em garrafa",
      temperatura: "6°C a 8°C",
      guarda: "4 a 5 anos",
      volume: "750 ml",
      harmonizacao:
        "Brindes e celebrações, canapés de caviar ou truta defumada, carpaccio de vieiras, risoto de queijo brie com nozes e tortas de frutas.",
      visual: "Amarelo dourado brilhante com perlage refinado, abundante e persistente.",
      olfativo: "Rica complexidade com notas de pão tostado, brioche amanteigado, maçã assada, avelãs e raspas de limão siciliano.",
      gustativo: "Mousse cremosa que preenche o paladar, acidez revigorante e extraordinária persistência de final seco e elegante.",
    },
  },
];

function VinhosContent() {
  const [active, setActive] = useState("Todos");
  const [selectedWine, setSelectedWine] = useState<WineItem | null>(null);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Lê ?id= na URL se fornecido (ex: vindo da Home)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const idParam = params.get("id");
      if (idParam) {
        const found = WINES.find((w) => w.id === Number(idParam));
        if (found) setSelectedWine(found);
      }
    }
  }, []);

  // Trava o scroll do body quando o modal estiver aberto e ouve a tecla ESC
  useEffect(() => {
    if (selectedWine) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedWine(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedWine]);

  const filtered =
    active === "Todos" ? WINES : WINES.filter((w) => w.category === active);

  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600&q=80')",
          }}
        />
        <div className="page-hero__scrim" />
        <div className="page-hero__content">
          <div className="eyebrow">Nossa coleção</div>
          <h1 className="serif">Vinhos</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={active === cat ? "active" : ""}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filtered.map((wine) => (
              <article
                key={wine.id}
                className="product-card"
                onClick={() => setSelectedWine(wine)}
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                aria-label={`Ver detalhes de ${wine.name}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedWine(wine);
                  }
                }}
              >
                <span className="product-card__badge">{wine.category}</span>
                <span className="product-card__vintage">{wine.vintage}</span>

                <div className="product-card__bottle">
                  <img src={wine.image} alt={wine.name} />
                </div>

                <div style={{ width: "100%", textAlign: "center" }}>
                  <h3 className="serif">{wine.name}</h3>
                  <p>{wine.description}</p>
                </div>

                <div className="product-card__row">
                  <span className="product-card__price">{wine.price}</span>
                  <button
                    type="button"
                    className="product-card__btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedWine(wine);
                    }}
                  >
                    DETALHES
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalhes do Vinho */}
      {selectedWine && (
        <div
          className="wine-modal-overlay"
          onClick={() => setSelectedWine(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="wine-modal-title"
        >
          <div
            className="wine-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="wine-modal__close"
              onClick={() => setSelectedWine(null)}
              aria-label="Fechar detalhes"
            >
              ✕
            </button>

            <div className="wine-modal__grid">
              {/* Coluna Esquerda: Garrafa e Destaque */}
              <div className="wine-modal__media">
                <div className="wine-modal__badges">
                  <span className="product-card__badge">{selectedWine.category}</span>
                  <span className="product-card__vintage">{selectedWine.vintage}</span>
                </div>

                <div className="wine-modal__bottle">
                  <img src={selectedWine.image} alt={selectedWine.name} />
                </div>

                <span className="wine-modal__volume">{selectedWine.details.volume}</span>
              </div>

              {/* Coluna Direita: Conteúdo e Ficha Técnica */}
              <div className="wine-modal__content">
                <div className="wine-modal__header">
                  <div className="eyebrow" style={{ color: "var(--wine)", marginBottom: "6px" }}>
                    Ficha Técnica &amp; Degustação
                  </div>
                  <h2 id="wine-modal-title" className="serif wine-modal__title">
                    {selectedWine.name}
                  </h2>
                  <div className="wine-modal__price">{selectedWine.price}</div>
                </div>

                <p className="wine-modal__desc">
                  {selectedWine.fullDescription || selectedWine.description}
                </p>

                {/* Especificações Técnicas */}
                <div className="wine-modal__section-heading">Características Técnicas</div>
                <div className="wine-modal__specs">
                  <div className="wine-spec-item">
                    <span className="wine-spec-label">Uvas / Variedade</span>
                    <span className="wine-spec-value">{selectedWine.details.uvas}</span>
                  </div>
                  <div className="wine-spec-item">
                    <span className="wine-spec-label">Terroir / Região</span>
                    <span className="wine-spec-value">{selectedWine.details.regiao}</span>
                  </div>
                  <div className="wine-spec-item">
                    <span className="wine-spec-label">Teor Alcoólico</span>
                    <span className="wine-spec-value">{selectedWine.details.teorAlcoolico}</span>
                  </div>
                  <div className="wine-spec-item">
                    <span className="wine-spec-label">Temperatura de Serviço</span>
                    <span className="wine-spec-value">{selectedWine.details.temperatura}</span>
                  </div>
                  <div className="wine-spec-item">
                    <span className="wine-spec-label">Maturação</span>
                    <span className="wine-spec-value">{selectedWine.details.maturacao}</span>
                  </div>
                  <div className="wine-spec-item">
                    <span className="wine-spec-label">Potencial de Guarda</span>
                    <span className="wine-spec-value">{selectedWine.details.guarda}</span>
                  </div>
                </div>

                {/* Notas de Degustação */}
                <div className="wine-modal__section-heading">Notas do Sommelier</div>
                <div className="wine-modal__tasting">
                  <div className="wine-tasting-row">
                    <span className="wine-tasting-badge">Visual</span>
                    <p>{selectedWine.details.visual}</p>
                  </div>
                  <div className="wine-tasting-row">
                    <span className="wine-tasting-badge">Olfativo</span>
                    <p>{selectedWine.details.olfativo}</p>
                  </div>
                  <div className="wine-tasting-row">
                    <span className="wine-tasting-badge">Gustativo</span>
                    <p>{selectedWine.details.gustativo}</p>
                  </div>
                </div>

                {/* Harmonização */}
                <div className="wine-modal__pairing">
                  <span className="wine-modal__pairing-label">Harmonização Sugerida</span>
                  <p>{selectedWine.details.harmonizacao}</p>
                </div>

                {/* Botões de Ação */}
                <div className="wine-modal__actions">
                  <button
                    type="button"
                    className="btn btn-wine wine-modal__btn"
                    onClick={() => {
                      setAddedSuccess(true);
                      setTimeout(() => setAddedSuccess(false), 3000);
                    }}
                  >
                    {addedSuccess ? "✓ ADICIONADO À SUA ADEGA!" : "ADICIONAR À ADEGA"}
                  </button>
                  <button
                    type="button"
                    className="wine-modal__btn-close"
                    onClick={() => setSelectedWine(null)}
                  >
                    VOLTAR AOS VINHOS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function VinhosPage() {
  return (
    <Suspense fallback={<div>Carregando vinhos...</div>}>
      <VinhosContent />
    </Suspense>
  );
}
