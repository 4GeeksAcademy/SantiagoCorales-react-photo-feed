import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Container = ({ section }) => {
  return (
    <div className="container mt-3">
      <Jumbotron title={section.title} />
      <div className="d-flex justify-content-center flex-wrap">
        {section.cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Container;