import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // creating a function that returns an array of objects since the API endpoint is unreachable
  const fetchData = () => {
    setData([
      {
        id: "rec6d6T3q5EBIdCfD",
        name: "Paris tour",
        info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
        image:
          "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
        price: 1990,
      },
      {
        id: "recIwxrvU9HfJR3B4",
        name: "Best Of Ireland In 14 Days Tour",
        info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale",
        image:
          "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
        price: 2100,
      },
    ]);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    const newData = data.filter((tour) => tour.id !== id);
    setData(newData);
  };

  if (loading) {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    );
  } else if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button
            className="btn"
            onClick={() => {
              fetchData();
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={data} removeTour={removeTour} />
    </main>
  );
}

export default App;
