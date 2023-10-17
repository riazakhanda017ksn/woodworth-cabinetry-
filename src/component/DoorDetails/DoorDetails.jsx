import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { all__products } from "../../Data/ProductData";
import { BsArrowRight } from "react-icons/bs";
import Data from "./Data";
import one from '../../img/details1.jpg'
import two from '../../img/details2.jpg'

const DoorDetails = () => {
  const { id } = useParams();
  const product = all__products.find((product) => product.id === id);
  const { name, details, images, image, specification } = product;

  return (
    <div className="door-details">
      <Navbar />
      {/* <div className="container pt-5 mb-3">
        <div className="row">
          <div className="col-lg-7">
            <div className="details">
              <span>{name}</span> <br />
              <div className="vector-img">
                <img src={vector} alt="" />
              </div>
              <p>{details}</p>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-3 text-center">
            <div className="need-product-bg">
              <div className="details-image">
                <img src={image} alt="" />
                <h5>{name}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about"></div>
      <div className="container py-5 my-5">
        <div
          className="row"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <div className="col-lg-7">
            <div className="description">
              <h3>SPECIFICATION:</h3>
              {specification.map((item) => (
                <Data item={item}></Data>
              ))}
              <Link to="/became-a-dealer">
                <button>
                  Locate a Woodworth Dealer <BsArrowRight />{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <div className="more-img">
              <h3 className="mb-4" style={{ fontWeight: "500" }}>
                COLORS:
              </h3>
              <div
                className="row"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                {images.map((img) => {
                  return (
                    <>
                      <div className="col-lg-3 mb-4">
                        <div className="mapped-images">
                          <img src={img.image} alt="" />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          <div
                className=" bottom-position  add-details-bg"
                data-aos="fade-up"
                data-aos-duration="1200"

                data-aos-easing="ease-in-out"
              >
                            <p className="name-of-doors">{name}</p>

                  <div className={" container-background text-center"}>
                    <div
                      className="add-bg-backside"
                    >
                      <img src={image} alt="" />
                    </div>
                    <div className="add-more-gray-bg"></div>
                    <h6 className="text-center custom-color-text">{name}</h6>
                  </div>
                 
              </div>
              <div className="more-details-image mb-5">
                    <img src={one} alt="" /> <br />
                    <img src={two} alt="" />

                  </div>
          </div>
          <div className="col-lg-7">
            <div className="doors-details-text">
              <p>{details}</p>
              <div className="doors-parent">
              {images.map((img) => {
                  return (
                    <>
                      <div className="col-lg-3 mb-4">
                        <div className="mapped-images">
                          <img className={`${img.name}`} src={img.image} alt="" />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <>
            <div className="description">
              <h3>SPECIFICATION:</h3>
              {specification.map((item) => (
                <Data item={item}></Data>
              ))}
              <Link to="/became-a-dealer">
                <button>
                  Locate a Woodworth Dealer <BsArrowRight />{" "}
                </button>
              </Link>
            </div>
          </>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoorDetails;
