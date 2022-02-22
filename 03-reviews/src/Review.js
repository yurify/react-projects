import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text: info } = people[index];

  const nextPerson = () => {
    let newIndex = index + 1;
    if (newIndex >= people.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const prevPerson = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = people.length - 1;
    }
    setIndex(newIndex);
  };

  const surpriseMe = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      if (newIndex > people.length / 2) {
        newIndex -= 1;
      } else {
        newIndex += 1;
      }
    }
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{info}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={surpriseMe}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
