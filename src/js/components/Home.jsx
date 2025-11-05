import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";
//create your first component
const Home = () => {
  const links = ["Inicio", "Nuevos", "Usados", "Contacto"];
  const section = {
    title: "Encuentra el auto que tanto buscabas aquí en AutoCars",
    cards: [
      { title: "Hyundai Ioniq", text: "0KM", img: "https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.jpg" },
      { title: "Nissan GTR ", text: "120.000KM", img: "https://www.nippon.com/es/ncommon/contents/japan-topics/2456722/2456722.jpg" },
      { title: "Ford Mustang", text: "75.000KM", img: "https://statics.forbes.com.ec/2023/08/crop/64d3b4f61cb4f__600x390.webp" },
      { title: "Chevrolet Onix", text: "0KM", img: "https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1723044010/prod/content/dam/CRO-Images-2024/Cars/CR-Cars-InlineHero-2017-Chevrolet-Cruze-f-driving-8-24" },
    ],
  };

  return (
    <div className="text-center">
      <Navbar>
        {links.map((link, index) => (
          <li className="nav-item" key={index}>
            <a className={`nav-link ${link === "Home" ? "active" : ""}`} href="#">
              {link}
            </a>
          </li>
        ))}
      </Navbar>
      <Container section={section} />
      <Footer />
    </div>
  );
};

export default Home;