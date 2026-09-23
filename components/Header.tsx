"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/vinhos", label: "Vinhos" },
  { href: "/nossa-historia", label: "Nossa História" },
  { href: "/visitar", label: "Visitar" },
  { href: "/wine-club", label: "Wine Club" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" />
            <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" />
            <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" />
          </svg>
        </button>

        <Link href="/" className="logo serif">
          M &amp; Co.
        </Link>

        <nav className="main-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-icons">
          <button aria-label="Conta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.4" />
              <path
                d="M4 20c1.6-4 5-6 8-6s6.4 2 8 6"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </button>
          <button aria-label="Carrinho">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16l-1.4 11.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 7Z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path d="M8 7V6a4 4 0 0 1 8 0v1" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            padding: "6px 20px 20px",
            borderTop: "1px solid var(--line-soft)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ padding: "12px 0", fontSize: 14 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
