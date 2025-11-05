import React from "react";

const Jumbotron = ({ title }) => {
  return (
    <div
      className="p-5 mb-4 bg-light rounded-3 text-center text-white"
      style={{
        backgroundImage: "url('https://statics.forbesargentina.com/2020/05/crop/5ec561f228d6d__600x390.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{title}</h1>
        <p className="col-md-8 fs-4 mx-auto text-center">
          En AutoCars nos esforzamos por ayudarte a encontrar el auto de tus sueños tanto en vehículos usados como 0km.
        </p>
        <button className="btn btn-dark btn-lg">¿ QUE VEHÍCULO QUIERES COMPRAR ?</button>
      </div>
    </div>
  );
};

export default Jumbotron;