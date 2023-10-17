/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Cabinet.scss";
import { productsData, productsData2 } from "../../Data/ProductData";
import { Link } from "react-router-dom";

const Cabinet = () => {
  return (
    <div className="cabinet-container padding" style={{paddingTop:'0'}}>
      <div className="container">
        <div className="quality-caption">
          <div className="text">
            <h3>
              <small>NEW STYLES</small>
            </h3>
          </div>
         
        </div>
        {/*  */}
        <Link to="/all-door">
          <div className="parents mt-5 ">
            {productsData.map((data) => {
              return (
                <div
                  className="cabinet_dor"
                  key={data.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="products__image">
                    <div className="shape-1">
                      <h5>{data.color}</h5>
                    </div>
                    <div className="flex-item">
                    <img className={data.class} src={data.image} alt="" />
                    <div className="shape-2">
                      <h5>{data.name}</h5>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Link>

    

        {/*  */}
      </div>
    </div>
  );
};

export default Cabinet;
