import "./HomeCard.css";
import Image from "next/image";

const HomeCard = (props) => {
  return (
    <div className="HomeCardWrapper">
      <div className="CardTextsContainer">
        <h1 className="CardTitle">{props.CardTitle}</h1>
        <span className="CardText">{props.CardText}</span>
        <div className="LinkButtonWrapper">
          <a href={props.CardTextLink} className="CardTextLink">
            {props.CardLinkText}
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
            className="ArrowIcon"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </div>
      </div>
      <a href={props.CardLink}>
        <img
          src={props.CardImageSrc}
          className="CardImage"
          width={100}
          height={100}
          alt="CardImage"
        />
      </a>
    </div>
  );
};

export default HomeCard;
