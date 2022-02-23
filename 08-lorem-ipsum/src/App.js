import React, { useState } from "react";
import data from "./data";
function App() {
  const [numOfParagraphs, setNumOfParagraphs] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const chooseNumberOfParagraphs = (value) => {
    setNumOfParagraphs(value);
  };
  // console.log(data.slice(0, 2));
  return (
    <section
      className="section-center"
      onSubmit={(event) => {
        event.preventDefault();
        setParagraphs(data.slice(0, numOfParagraphs));
      }}
    >
      <h3>Generate your lorem ipsum here:</h3>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          value={numOfParagraphs}
          onChange={(event) => chooseNumberOfParagraphs(event.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
