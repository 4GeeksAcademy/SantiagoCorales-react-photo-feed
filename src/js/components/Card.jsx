import React from "react";

const Card = ({ title, text, img }) => {
  return (
    <div className="card m-0">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Contactar ahora</a>
      </div>
    </div>
  );
};

export default Card;