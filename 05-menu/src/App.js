import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const categoriesList = ["All", "Breakfast", "Lunch", "Shakes"];

function App() {
  const [currentMenu, setCurrentMenu] = useState(items);

  const filterItems = (category) => {
    if (category.toLowerCase() === "all") {
      console.log("Show all items.");
      setCurrentMenu(items);
      return;
    }
    console.log("Show only items in", category, "category");
    const newMenu = items.filter(
      (item) => item.category === category.toLowerCase()
    );
    setCurrentMenu(newMenu);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categoriesList} filterItems={filterItems} />
        <Menu menuItems={currentMenu} />
      </section>
    </main>
  );
}

export default App;
