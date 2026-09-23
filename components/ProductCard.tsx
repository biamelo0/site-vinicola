"use client";

import Link from "next/link";

export default function ProductCard({
  name,
  description,
  price,
  image,
  href = "/vinhos",
  isActive = false,
  onMouseEnter,
}) {
  return (
    <div
      className={`limited-card ${isActive ? "is-active" : ""}`}
      onMouseEnter={onMouseEnter}
      tabIndex={0}
      role="region"
      aria-label={name}
    >
      {/* Imagem do Produto */}
      <div className="limited-card__media">
        <img src={image} alt={name} />
      </div>

      {/* Bloco de Informações (revelado na expansão/hover) */}
      <div className="limited-card__details">
        <div className="limited-card__content">
          <h3 className="serif">{name}</h3>
          <p className="limited-card__desc">{description}</p>
          {price && <span className="limited-card__price">{price}</span>}
          <div className="limited-card__actions">
            <Link href={href} className="btn-detail">
              SAIBA MAIS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}