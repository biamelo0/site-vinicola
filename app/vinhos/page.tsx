"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const CATEGORIES = ["Todos", "Tinto", "Branco", "Rosé", "Espumante"];

interface WineItem {
  id: number;
  category: "Tinto" | "Branco" | "Rosé" | "Espumante";
  name: string;
  vintage: string;
  description: string;
  price: string;
  image: string;
}

const WINES: WineItem[] = [
  {
    id: 1,
    category: "Tinto",
    name: "Cabernet Sauvignon",
    vintage: "Safra 2021",
    description: "Vinho encorpado com notas de groselha preta, carvalho francês e especiarias nobres.",
    price: "R$ 98",
    image: `${basePath}/edicoes/vinho-edicao.png`,
  },
  {
    id: 2,
    category: "Tinto",
    name: "Sangiovese Gran Riserva",
    vintage: "Safra 2019",
    description: "Taninos macios e elegantes com toques de cereja madura, notas de tabaco e cacau.",
    price: "R$ 145",
    image: `${basePath}/edicoes/vinho-reserva.png`,
  },
  {
    id: 3,
    category: "Branco",
    name: "Maison Chardonnay Gold",
    vintage: "Safra 2022",
    description: "Frescor cítrico marcante com aromas de pera, flor de laranjeira e final amanteigado.",
    price: "R$ 115",
    image: `${basePath}/edicoes/vinho-chardonnay.png`,
  },
  {
    id: 4,
    category: "Branco",
    name: "Vermentino di Toscana",
    vintage: "Safra 2023",
    description: "Aromas florais delicados com toque salino do litoral mediterrâneo e acidez vibrante.",
    price: "R$ 89",
    image: `${basePath}/edicoes/vinho-chardonnay.png`,
  },
  {
    id: 5,
    category: "Rosé",
    name: "Rosé de Provence Privé",
    vintage: "Safra 2023",
    description: "Leve, frutado e refrescante, com notas de framboesa fresca, morango e pétalas de rosa.",
    price: "R$ 108",
    image: `${basePath}/edicoes/vinho-rose.png`,
  },
  {
    id: 6,
    category: "Espumante",
    name: "Spumante Metodo Classico",
    vintage: "Safra 2020",
    description: "Borbulhas finas e persistentes com notas de maçã verde, amêndoas tostadas e brioche.",
    price: "R$ 135",
    image: `${basePath}/edicoes/vinho-chardonnay.png`,
  },
];

export default function VinhosPage() {
  const [active, setActive] = useState("Todos");

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
              <article key={wine.id} className="product-card">
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
                  <button type="button" className="product-card__btn">
                    DETALHES
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
