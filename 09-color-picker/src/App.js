import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#4287f5");
  const [colorsArray, setColorsArray] = useState(new Values("#4287f5").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      const newColors = new Values(color).all(10);
      setColorsArray(newColors);
      setError(false);
    } catch {
      setError(true);
      console.log(
        "There was an error. Please make sure the color format is: #1a1a1a"
      );
    }
  };

  return (
    <>
      <section className="container">
        <h3>Specify the color:</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="color"
            className="color-picker"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            className={error ? "error" : null}
            type="text"
            placeholder="#a1a1a1"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            Show
          </button>
        </form>
      </section>
      <section className="colors">
        {colorsArray.map((colorObject, index) => {
          return (
            <SingleColor
              key={index}
              hex={colorObject.hex}
              weight={colorObject.weight}
              type={colorObject.type}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
