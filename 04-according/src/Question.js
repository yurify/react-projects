import React, { useState } from "react";

const Question = (props) => {
  const [showText, setShowText] = useState(false);

  const { title, info } = props.question;

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowText(!showText)}>
          {showText ? "-" : "+"}
        </button>
      </header>
      {showText && <p>{info}</p>}
    </article>
  );
};

export default Question;
