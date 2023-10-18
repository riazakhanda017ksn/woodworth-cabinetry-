import React from "react";
import "./DreamKitchen.scss";
import { Link } from "react-router-dom";

const DreamKitchen = () => {
  return (
    <div>
    <div
      className="DreamKitchen"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h1>BECAME A WOODWORTH DEALER</h1>
      <Link to="/became-a-dealer">
        <button>Signup now</button>
      </Link>
    </div>
    </div>
  );
};

export default DreamKitchen;
