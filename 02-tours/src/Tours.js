import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {props.tours.map((oneTour) => (
          <Tour tour={oneTour} key={oneTour.id} removeTour={props.removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
