"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const LIMITED_EDITIONS = [
  {
    id: 1,
    name: "Novo Cabernet Sauvignon",
    description: "Vinho tinto encorpado com notas de groselha preta, especiarias e carvalho francês.",
    price: "R$ 98",
    image: `${basePath}/edicoes/vinho-edicao.png`,
  },
  {
    id: 2,
    name: "Maison Chardonnay Gold",
    description: "Vinho branco equilibrado com aromas cítricos marcantes e um final elegante e amanteigado.",
    price: "R$ 115",
    image: `${basePath}/edicoes/vinho-chardonnay.jpg`,
  },
  {
    id: 3,
    name: "Gran Reserva Cabernet",
    description: "Safra especial com maturação prolongada e notas profundas de frutas silvestres.",
    price: "R$ 145",
    image: `${basePath}/edicoes/vinho-reserva.jpg`,
  },
  {
    id: 4,
    name: "Rosé de Provence Privé",
    description: "Vinho rosé delicado com frescor mineral e notas florais e de frutas vermelhas frescas.",
    price: "R$ 108",
    image: `${basePath}/edicoes/vinho-rose.jpg`,
  },
  {
    id: 5,
    name: "Chardonnay Cuvée Speciale",
    description: "Edição especial com passagem por barrica e textura aveludada incomparável.",
    price: "R$ 130",
    image: `${basePath}/edicoes/vinho-chardonnay.jpg`,
  },
  {
    id: 6,
    name: "Reserva Seleção do Enólogo",
    description: "Lote exclusivo numerado, colheita manual e complexidade aromática única.",
    price: "R$ 160",
    image: `${basePath}/edicoes/vinho-edicao.png`,
  },
];

const ITEMS_PER_PAGE = 3;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  // Controla qual dos 3 visíveis está expandido (1 = card do meio expandido por padrão)
  const [activeSlot, setActiveSlot] = useState(1);

  const totalPages = Math.ceil(LIMITED_EDITIONS.length / ITEMS_PER_PAGE);

  // Pega exatamente 3 vinhos para a página atual
  const visibleWines = LIMITED_EDITIONS.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    setActiveSlot(1); // redefine para o vinho do meio ficar aberto
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    setActiveSlot(1); // redefine para o vinho do meio ficar aberto
  };

  return (
    <>
       {/* HERO */}

      <section className="hero">

        <div

          className="hero__bg"

          style={{

            backgroundImage: `url('${basePath}/home.jpg')`,

          }}

        />

        <div className="hero__scrim" />

        <div className="hero__content">

          <h1 className="serif">Maison &amp; Co.</h1>

          <p>

            Criamos vinhos que celebram o terroir, o tempo e a tradição — para

            quem aprecia a profundidade em cada taça.

          </p>

          <a href="/vinhos" className="btn btn-outline-light">

            EXPLORAR COLEÇÃO

          </a>

        </div>

      </section>

      {/* LIMITED EDITIONS */}
      <section className="section limited-section">
        <div className="container">
          <div className="section-head">
            <h2 className="serif">Edições Limitadas</h2>
            <div className="arrow-nav">
              <button 
                type="button" 
                aria-label="Página anterior" 
                onClick={handlePrevPage}
              >
                ←
              </button>
              <button 
                type="button" 
                aria-label="Próxima página" 
                onClick={handleNextPage}
              >
                →
              </button>
            </div>
          </div>

          <div className="limited-accordion">
            {visibleWines.map((item, index) => (
              <ProductCard
                key={item.id}
                {...item}
                isActive={activeSlot === index}
                onMouseEnter={() => setActiveSlot(index)}
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
  {/* Marcas d'água de fundo */}
  <div className="showcase__watermark showcase__watermark--top">WINERY</div>
  <div className="showcase__watermark showcase__watermark--bottom">EST. 1968</div>

  {/* Texto superior (atrás do gargalo) */}
  <div className="showcase__text showcase__text--top">
    <p>
      The name Maison &amp; Co was born from a desire to convey the feeling of
      home and a sense of belonging. The French word Maison means &ldquo;house&rdquo; — a place
      of its own, tradition, &amp; timeless values.
    </p>
  </div>

  {/* Garrafa recortada e alinhada à esquerda */}
  <div className="showcase__bottle-wrapper">
    <img
      className="showcase__bottle"
      src={`${basePath}/estilo.png`} /* Use a sua garrafa deitada em PNG transparente */
      alt="Garrafa Maison & Co."
    />
  </div>

  {/* Assinatura 'Maison & Co' sobreposta */}
  <div className="showcase__script" aria-hidden="true">
    <span className="script-shadow">Maison&amp;Co</span>
    <span className="script-main">Maison&amp;Co</span>
  </div>

  {/* Texto inferior com o selo de cera */}
  <div className="showcase__text showcase__text--bottom">
    <p>
      The name Maison &amp; Co was born from a desire to convey the feeling of
      home and a sense of belonging. The French word Maison means &ldquo;house&rdquo; — a place
      of its own, tradition, &amp; timeless values.
    </p>
    <div className="showcase__seal" />
  </div>
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
