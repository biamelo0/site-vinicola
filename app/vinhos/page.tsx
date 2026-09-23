"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["Todos", "Tinto", "Branco", "Rosé", "Espumante"];

const WINES = [
  {
    category: "Tinto",
    name: "Cabernet Sauvignon",
    description: "Notas de groselha preta, carvalho e especiarias",
    price: "R$ 98",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80",
  },
  {
    category: "Tinto",
    name: "Sangiovese Riserva",
    description: "Taninos macios com toques de cereja madura",
    price: "R$ 112",
    image:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&q=80",
  },
  {
    category: "Branco",
    name: "Chardonnay",
    description: "Frescor cítrico com final levemente amanteigado",
    price: "R$ 89",
    image:
      "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=400&q=80",
  },
  {
    category: "Branco",
    name: "Vermentino",
    description: "Aromas florais e um toque salino do litoral",
    price: "R$ 84",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80",
  },
  {
    category: "Rosé",
    name: "Rosé di Toscana",
    description: "Leve, frutado, perfeito para dias quentes",
    price: "R$ 79",
    image:
      "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=400&q=80",
  },
  {
    category: "Espumante",
    name: "Spumante Brut",
    description: "Borbulhas finas com notas de maçã verde",
    price: "R$ 105",
    image:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&q=80",
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
                className={active === cat ? "active" : ""}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filtered.map((wine, i) => (
              <ProductCard key={i} {...wine} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
