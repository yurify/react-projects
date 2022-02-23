import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import Article from "./Article";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slideInterval = setInterval(() => {
      // console.log("I worked!");
      nextSlide();
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [index]);

  const prevSlide = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = people.length - 1;
    }
    setIndex(newIndex);
  };
  const nextSlide = () => {
    let newIndex = index + 1;
    if (newIndex > people.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        <Article person={people[index]} status="nextSlide" />

        {/* // alternative solution, which better applied CSS sliding animation via classes 
        
        {people.map((person, personIndex) => {
          let status = "nextSlide";
          if (personIndex === index) {
            status = "activeSlide";
          } else if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            status = "lastSlide";
          }
          return <Article person={person} status={status} key={personIndex} />;
        })} */}

        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
