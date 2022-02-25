import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";

const SingleColor = ({ hex, weight, type }) => {
  const [savedColor, setSavedColor] = useState("");

  const saveColor = () => {
    setSavedColor(hex);
    window.navigator.clipboard.writeText(hex);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => setSavedColor(""), 3000);
  }, [savedColor]);

  return (
    <article
      className={type === "tint" ? "color" : "color color-light"}
      style={
        type === "base"
          ? { backgroundColor: `#${hex}`, border: `1px solid lightgray` }
          : { backgroundColor: `#${hex}` }
      }
      onClick={() => navigator.clipboard.writeText(`#${hex}`)}
    >
      <div className="card-container">
        <div>
          <p className="percent-value">{weight}%</p>
          <p className="color-value">#{hex}</p>
        </div>
        <div>
          <FaCopy
            className="copy-btn"
            style={
              type === "tint" ? { color: "#282B2A" } : { color: "#f7f7f7" }
            }
            onClick={saveColor}
          />
        </div>
      </div>
      <p>{savedColor ? "Copied to clipboard" : " "}</p>
    </article>
  );
};

export default SingleColor;
