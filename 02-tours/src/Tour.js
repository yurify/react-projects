import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image: imageSrc, price } = props.tour;

  const [readMoreClicked, setReadMoreClicked] = useState(false);

  return (
    <article className="single-tour">
      <img src={imageSrc} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMoreClicked ? info : info.substring(0, 130) + "..."}
          <button
            onClick={() => {
              setReadMoreClicked(!readMoreClicked);
            }}
          >
            {readMoreClicked ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            props.removeTour(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
