import "./aboutUs.css";
import Aurora from "../components/AuroraBG/Aurora.jsx";
import NavBar from "../components/NavBar/NavBar";

export default function AboutUs() {
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
        <div className="NavBarWrapper">
          <NavBar />
        </div>
        <div className="HomeGalleryContainer"></div>
      </div>
    </div>
  );
}
