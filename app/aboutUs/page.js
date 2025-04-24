import "./aboutUs.css";
import Aurora from "../components/AuroraBG/Aurora.jsx";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

export default function AboutUs() {
  return (
    <div className="AboutUsContainer">
      <div className="BGContainer">
        <Aurora
          colorStops={["#22223C", "#0044ff", "#22223C"]}
          blend={1}
          amplitude={0.9}
          speed={0.8}
        />
      </div>
      <div className="AboutUsContent">
        <div className="NavBarWrapper">
          <NavBar />
        </div>
        <div className="AboutUsWrapper">
          <h1 className="AboutUsTitle">
            30 ANOS CONECTANDO SONHOS A REALIDADE
          </h1>
          <div className="TextsContainer">
            <span className="ContextText">
              Me chamo Fernando Roberto, sou Bacharel em Design Gráfico com MBA
              em Marketing. Possuo vasta experiência nas áreas de Design,
              Comercial, Marketing e Engenharia. Sou especializado em prestar
              suporte estratégico à rede de vendas, integrando eficientemente
              departamentos para otimizar operações e resultados. Minha
              trajetória profissional inclui:
            </span>
            <div className="TextList">
              <h1 className="ListItem">
                * Desenvolvimento de materiais diversos de Design Gráfico.
              </h1>
              <h1 className="ListItem">
                * Criação de materiais de divulgação e estratégias de marketing
                para promover produtos e serviços.
              </h1>
              <h1 className="ListItem">
                * Elaboração de projetos inovadores na área de Comunicação
                Visual de Frotas, garantindo identidade visual e eficiência
                operacional.
              </h1>
            </div>
            <span className="ContextText">
              Sou apaixonado por colaborar em projetos que exigem criatividade,
              precisão técnica e foco no cliente. Meu objetivo é continuar
              contribuindo para o crescimento sustentável e a excelência
              operacional em organizações dos setores Industrial, Comercial,
              Transportes e Serviços.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
