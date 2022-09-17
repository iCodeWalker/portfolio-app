import React, { useEffect, useRef, useState } from "react";

import "./Card.css";

function Card({ title, description, bgImage, name }) {
  const [background, setBackground] = useState(
    "linear-gradient(whitesmoke,rgb(104, 188, 228)"
  );

  const handleHover = () => {
    setBackground(
      `url("https://st3.depositphotos.com/3382541/13326/v/600/depositphotos_133260890-stock-illustration-programmer-sitting-on-big-laptop.jpg")`
    );
  };

  const handleHoverOut = () => {
    setBackground("linear-gradient(whitesmoke, rgb(104, 188, 228)");
  };
  console.log(background);
  return (
    <div className="card">
      <div
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHoverOut()}
        className="card__container"
        style={{ backgroundImage: background }}
      >
        <h1>{title}</h1>
        <div className="card__container--description">{description}</div>
      </div>
      <div className="card__name">{name}</div>
    </div>
  );
}

export default Card;
