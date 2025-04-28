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
              Fernando Vieira é Bacharel em Design Gráfico e possui MBA em
              Marketing. Com ampla experiência nas áreas de Design, Comercial,
              Marketing e Engenharia, é especializado em oferecer suporte
              estratégico à rede de vendas, promovendo a integração eficiente
              entre departamentos para otimizar operações e maximizar
              resultados.
            </span>
            <span className="ContextText">
              Ao longo de sua trajetória profissional, Fernando atuou em
              diversas frentes, incluindo:
            </span>
            <div className="TextList">
              <h1 className="ListItem">
                * Desenvolvimento de materiais gráficos para diferentes
                finalidades.
              </h1>
              <h1 className="ListItem">
                * Criação de campanhas e materiais de divulgação voltados para a
                promoção de produtos e serviços.
              </h1>
              <h1 className="ListItem">
                * Elaboração de projetos inovadores de Comunicação Visual para
                Frotas, assegurando a padronização da identidade visual e a
                eficiência operacional.
              </h1>
            </div>
            <span className="ContextText">
              Apaixonado por desafios que combinam criatividade, precisão
              técnica e foco no cliente, Fernando tem como objetivo seguir
              contribuindo para o crescimento sustentável e a excelência
              operacional de empresas dos setores Industrial, Comercial, de
              Transportes e de Serviços.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
