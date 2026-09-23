"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const LIMITED_EDITIONS = [
  {
    id: 1,
    name: "Novo Cabernet Sauvignon",
    description: "Vinho tinto encorpado com notas de groselha preta, especiarias e carvalho francês.",
    price: "R$ 98",
    image: "/edicoes/vinho-edicao.png",
  },
  {
    id: 2,
    name: "Godler Wine Chardonnay",
    description: "Vinho branco equilibrado com aromas cítricos marcantes e um final elegante e amanteigado.",
    price: "R$ 98",
    image: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=600&q=80",
  },
  {
    id: 3,
    name: "Reserva Cabernet Sauvignon",
    description: "Safra especial com maturação prolongada e notas profundas de frutas silvestres.",
    price: "R$ 120",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
  },
];

export default function Home() {
  // Começa com o 2º item (índice 1) expandido por padrão, igual à imagem
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : LIMITED_EDITIONS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < LIMITED_EDITIONS.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      {/* ... HERO ... */}

      {/* LIMITED EDITIONS */}
      <section className="section limited-section">
        <div className="container">
          <div className="section-head">
            <h2 className="serif">Edições Limitadas</h2>
            <div className="arrow-nav">
              <button aria-label="Anterior" onClick={handlePrev}>←</button>
              <button aria-label="Próximo" onClick={handleNext}>→</button>
            </div>
          </div>

          <div className="limited-accordion">
            {LIMITED_EDITIONS.map((item, i) => (
              <ProductCard
                key={item.id || i}
                {...item}
                isActive={activeIndex === i}
                onMouseEnter={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
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
              <h2 className="serif">Nossa História</h2>
              <p>
                Nossa vinícola começou como um sonho de família — a visão de
                criar vinhos que refletissem a alma da nossa terra. Décadas
                depois, seguimos essa tradição, unindo paixão e inovação para
                trazer vinhos com autenticidade e elegância.
              </p>
              <a href="/nossa-historia" className="btn btn-wine">
                DESCOBRIR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="showcase">
        <div className="showcase__watermark">
          <span>VINÍCOLA</span>
          <span>EST. 1968</span>
        </div>
        <img
          className="showcase__bottle"
          src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=900&q=80"
          alt="Garrafa Maison & Co."
        />
        <p className="showcase__script">Maison&amp;Co</p>
        <div className="showcase__seal" />
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="testimonial">
            <div className="testimonial__media">
              <img
                src="https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=800&q=80"
                alt="Amigos reunidos à mesa na vinícola"
              />
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>
                Depoimentos
              </div>
              <p className="testimonial__quote-mark">“</p>
              <blockquote>
                O vinho não é criado — é revelado. Cada safra é um diálogo
                entre o vinhedo e o enólogo, e o nosso papel é escutar.
              </blockquote>
              <div className="testimonial__foot">
                <span className="testimonial__sign">— John W.</span>
                <div className="arrow-nav">
                  <button aria-label="Anterior">←</button>
                  <button aria-label="Próximo">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="join">
        <div className="join__inner">
          <div className="join__media">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80"
              alt="Garrafa Maison & Co. sobre madeira"
            />
          </div>
          <div className="join__text">
            <h2 className="serif">Junte-se a uma comunidade de amantes do vinho</h2>
            <form className="join-form">
              <input type="email" placeholder="Seu e-mail" required />
              <button type="submit" className="btn btn-dark">
                JUNTAR-SE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
