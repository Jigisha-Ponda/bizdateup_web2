import React from "react";

const cardData = [
  { src: '/assets/images/cards/battre.png' },
  { src: '/assets/images/cards/duro green.png' },
  { src: '/assets/images/cards/Immersive.png' },
  { src: '/assets/images/cards/InfinityX.png' },
  { src: '/assets/images/cards/MOOEv.png' },
  { src: '/assets/images/cards/myints.png' },
  { src: '/assets/images/cards/PDRL.png' },
  { src: '/assets/images/cards/Revamp.png' },
  { src: '/assets/images/cards/Shubhag.png' },
  { src: '/assets/images/cards/SQUARE.png' },
  { src: '/assets/images/cards/Stylework.png' },
  { src: '/assets/images/cards/Tutti frutti.png' },
  { src: '/assets/images/cards/Twyn.png' },
  { src: '/assets/images/cards/ZEVO.png' },
];

const CardContent = ({ card }) => (
  <div className="my-1">
    <img src={card.src} alt="Client" className="card-img" />
  </div>
);

const CardScroll = () => {
  const scrollData = [...cardData, ...cardData, ...cardData];

  return (
    <div className="card-scroll-container">
      <div className="card-column left">
        <div className="scroll-content">
          {scrollData.map((card, index) => (
            <div className="hero-cards" key={`left-${index}`}>
              <CardContent card={card} />
            </div>
          ))}
        </div>
      </div>

      <div className="card-column right">
        <div className="scroll-content">
          {scrollData.map((card, index) => (
            <div className="hero-cards" key={`right-${index}`}>
              <CardContent card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardScroll;
