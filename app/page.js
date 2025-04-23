import "./Home.css";
import Aurora from "./components/AuroraBG/Aurora.jsx";
import NavBar from "./components/NavBar/NavBar";
import HomeCard from "./components/HomeCard/HomeCard";

export default function Home() {
  return (
    <div className="MenuContainer">
      <div className="BGContainer">
        <Aurora
          colorStops={["#22223C", "#0044ff", "#22223C"]}
          blend={1}
          amplitude={0.9}
          speed={0.8}
        />
      </div>
      <div className="MenuContent">
        <NavBar />
        <div className="ImageCarouselWrapper"></div>
        <div className="MagicImageWrapper">
          <h1 className="MagicImageTitle">
            30 anos desenvolvendo soluções inteligentes e eficientes em Design
            Gráfico.
          </h1>
          <div className="MagicImage"></div>
        </div>
        <div className="InfoCardsWrapper">
          <HomeCard
            CardTitle="Quem Somos"
            CardText="Conheça nossa História e Perfil Profissional"
            CardLink="/aboutUs"
            CardLinkText="Descubra mais"
            CardTextLink="/aboutUs"
            CardImageSrc="/Images/GalleryImages/GalleryImage01.png"
          />
          <HomeCard
            CardTitle="Nossos Projetos"
            CardText="Alguns de nossos projetos e conceitos na área de Design Gráfico"
            CardLink="/projects"
            CardLinkText="Descubra Mais"
            CardTextLink="/projects"
            CardImageSrc="/Images/GalleryImages/GalleryImage02.png"
          />
          <HomeCard
            CardTitle="Contato"
            CardText="Estamos prontos para atender suas necessidades e expectativas em Design Gráfico"
            CardLink="/contact"
            CardLinkText="Descubra Mais"
            CardTextLink="/contact"
            CardImageSrc="/Images/GalleryImages/GalleryImage18.png"
          />
        </div>
      </div>
    </div>
  );
}
