import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import "./CardContainer.css";
import darkSide from "../assets/dark-side.jpg";
import theDiary from "../assets/thediary1.jpg";
import autosport from "../assets/autosport.jpg";
import belowEcho from "../assets/below-echo.jpg";
import community from "../assets/community.jpg";
import puls from "../assets/puls.jpg";
import asia from "../assets/asia.jpg";
import dogs from "../assets/dogs.jpg";
import DuringTheHunt from "../assets/DuringTheHunt.jpg";
import productionline from "../assets/productionline.jpg";
import rockies from "../assets/rockies.jpg";
import TheTastyTour from "../assets/TheTastyTour.jpg";
import tour from "../assets/tour.jpg";
import undiscovered from "../assets/undiscovered.jpg";

const cards = [
  {
    image: darkSide,
    title: "Dark Side of the Moon",
    details: "2018 • 📺TV Series • PG",
  },
  {
    image: theDiary,
    title: "The Diary",
    details: "2019 • 📺TV Series • PG",
  },
  {
    image: autosport,
    title: "Autosport The Series",
    details: "2016 • 📺TV Series • PG",
  },
  {
    image: belowEcho,
    title: "Below Echo",
    details: "2016 • 📺TV Series • PG",
  },
  {
    image: rockies,
    title: "The Rockies",
    details: "2015 • 📺TV Series • E",
  },
  {
    image: community,
    title: "Community of Ours",
    details: "2018 • 📺TV Series • 18+",
  },
  {
    image: puls,
    title: "112",
    details: "2013 • 📺TV Series • PG",
  },
  {
    image: productionline,
    title: "Production Line",
    details: "2018 • 📺TV Series • PG",
  },
  {
    image: dogs,
    title: "Dogs",
    details: "2016 • 📺TV Series • E",
  },
  {
    image: asia,
    title: "Asia in 24 Days",
    details: "2020 • 📺TV Series • PG",
  },
  {
    image: tour,
    title: "Unresolved Cases",
    details: "2016 • 📺TV Series • PG",
  },
  {
    image: TheTastyTour,
    title: "The Tasty Tour",
    details: "2016 • 📺TV Series • PG",
  },
  {
    image: DuringTheHunt,
    title: "During The Hunt",
    details: "2018 • 📺TV Series • 18+",
  },
];

const CardContainer = () => {
  return (
    <div className="tv-series-container">
      <SearchBar />
      <h1 className="tv-series-title">TV Series</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            details={card.details}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
