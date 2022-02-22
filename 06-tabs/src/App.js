import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import JobButtons from "./JobButtons";
import JobInfo from "./JobInfo";
import data from "./data";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState(null);
  const [activeJobIndex, setActiveJobIndex] = useState(0);

  const fetchData = async () => {
    try {
      let response = await fetch(url);
      let responseJSON = await response.json();
      console.log("Fetched data via API successfully.");
      setJobs(responseJSON);
      setLoading(false);
    } catch {
      console.error(
        "Failed to fetch the data. Probably, API is not accessible."
      );
      setJobs(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeJob = (id) => {
    setActiveJobIndex(id);
  };

  // render the element:

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <JobButtons
          companyNames={jobs.map((job) => job.company)}
          activeJobIndex={activeJobIndex}
          changeJob={changeJob}
        />

        <JobInfo job={jobs[activeJobIndex]} />
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
