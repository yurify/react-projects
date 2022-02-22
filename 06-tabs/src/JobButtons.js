import React, { useState, useEffect } from "react";

export default function JobButtons(props) {
  const { companyNames, activeJobIndex, changeJob } = props;

  return (
    <div className="btn-container">
      {companyNames.map((companyName, index) => {
        if (index === activeJobIndex) {
          return (
            <button
              className="job-btn active-btn"
              key={index}
              onClick={() => changeJob(index)}
            >
              {companyName}
            </button>
          );
        }
        return (
          <button
            className="job-btn false"
            key={index}
            onClick={() => changeJob(index)}
          >
            {companyName}
          </button>
        );
      })}
    </div>
  );
}
