import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Vinhos</h4>
            <ul>
              <li><Link href="/vinhos">Tinto</Link></li>
              <li><Link href="/vinhos">Branco</Link></li>
              <li><Link href="/vinhos">Rosé</Link></li>
              <li><Link href="/vinhos">Espumante</Link></li>
              <li><Link href="/vinhos">Lançamentos Sazonais</Link></li>
              <li><Link href="/vinhos">Edições Limitadas</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Nossa História</h4>
            <ul>
              <li><Link href="/nossa-historia">História da Vinícola</Link></li>
              <li><Link href="/nossa-historia">Terroir &amp; Vinhedos</Link></li>
              <li><Link href="/nossa-historia">Processo de Vinificação</Link></li>
              <li><Link href="/nossa-historia">Certificados</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Visitar</h4>
            <ul>
              <li><Link href="/visitar">Visitas &amp; Degustações</Link></li>
              <li><Link href="/visitar">Eventos Privados &amp; Masterclasses</Link></li>
            </ul>
            <h4 style={{ marginTop: 30 }}>Wine Club</h4>
            <ul>
              <li><Link href="/wine-club">Níveis de Associação</Link></li>
              <li><Link href="/wine-club">Benefícios</Link></li>
              <li><Link href="/wine-club">Acesso Antecipado</Link></li>
              <li><Link href="/wine-club">Gerenciar Assinatura</Link></li>
              <li><Link href="/wine-club">Programa de Indicação</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Localização</h4>
            <p>Maison Vineyards</p>
            <p>1000 Roma, Itália</p>
            <p>Via dea Marrana, 44</p>
            <p>Geral: +39 3932766</p>

            <h4 style={{ marginTop: 30 }}>Horário Maison</h4>
            <p>Aberto diariamente</p>
            <p>Vinícola: 10:00 – 18:00</p>
            <p>Degustações: 10:00 – 16:00</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 30,
          }}
        >
          <div className="footer-col">
            <h4>Info</h4>
            <ul style={{ display: "flex", gap: 20 }}>
              <li><Link href="#">Política de Privacidade</Link></li>
              <li><Link href="#">Entrega</Link></li>
              <li><Link href="#">Presentes</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Pinterest">PI</a>
              <a href="#" aria-label="TikTok">TT</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Maison &amp; Co. Roma, Itália — Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
