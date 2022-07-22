import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Sections</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.imgur.com/KHBk6jO.png"
              text="History of spaceX"
              label="History"
              path="/history"
            />
            <CardItem
              src="https://i.imgur.com/YE8PMYX.png"
              text="Rockets owned by spaceX"
              label="Rockets"
              path="/rockets"
            />
            <CardItem
              src="https://i.imgur.com/ZzTTC5p.png"
              text="Launches by spaceX"
              label="Launches"
              path="/launches"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
