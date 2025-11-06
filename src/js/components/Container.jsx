import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Container = ({ section }) => {
  return (
    <div className="container mt-3">
      <Jumbotron title={section.title} />
      <div className="row">
        {section.cards.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;