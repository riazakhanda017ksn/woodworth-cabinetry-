import React from "react";
import "./Footer.scss";
import { FiMap, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import docs from "../../docs/WWC-Brochure-2023.pdf";

import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const mainValue = date.getFullYear();
  return (
    <div className="footer padding " style={{ paddingBottom: "0" }}>
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-5">
            <div className="about-us">
              <h5>ABOUT US</h5>
              <p>
                Woodworth Cabinetry makes cabinetry easy. Our manufacturing and
                distributing process is quick, customized, and quality assured.
                Whether it be a busy home with family or friends, or a space to
                house independence, we cater to it. Make Woodworth part of the
                family, and help make a house, a home
              </p>
              <button>Continue Reading</button>
            </div>
          </div> */}
          {/* <div className="col-lg-3">
            <div className="about-us need-space">
              <h5>PRODUCTS</h5>
              <ul>
                <li>
                  <Link to="/all-door">ALL DOOR STYLE</Link>
                </li>
                <li>
                  <Link to="/">CABINET</Link>
                </li>
                <li>
                  <Link to="/vanities">VANITIES</Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-4">
            <div className="footer-about-company">
           <p><span>40+</span> <span className="font-position-in-bottom">years of quality service in
            CABINETRY</span> Woodworth Cabinetry is a primary manufacturer and distributor, specializing in making a house, a home. We offer high-quality home décor and solid wood ready-to-assemble (RTA) kitchen and bath cabinetry to dealers across North America.</p>
         </div>              
          </div>

          <div className="col-lg-3">
            <div className="about-us need-space">
              <h5>USEFUL LINK</h5>
              <ul>
              <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>

                <li>
                  <Link to="/company-info">Company Info</Link>
                </li>
                <li>
                  <Link to="/warranty">Warranty</Link>
                </li>
                <li>
                  <Link to="/located-a-dealer">Located a Dealer</Link>
                </li>
                <li>
                  <Link to="/located-a-dealer">Became a Dealer</Link>
                </li>
                <li>
                  <a href={docs} download className="font_bold">
                    DOWNLOAD 2023 CATALOGUE
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="about-us need-space">
              <h5>PRODUCTS</h5>
              <ul>
                <li>
                  <Link to="/all-door">All Door Style</Link>
                </li>
                <li>
                  <Link to="/cabinet">Cabinet</Link>
                </li>
                <li>
                  <Link to="/vanities">Vanities</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-us need-space">
              <h5>CONTACT INFO</h5>
              {/* <small className="flex">
               <div className="need-flex-item___">
               <FiMap />              
                 <span className="font__size">
                 Unit 2, 854 Westport Crescent, Mississauga, ON L5T 1N5
                 </span>
               </div>
              </small>{" "}
              <br />
            
              <h6></h6>
              <small className="flex">
                <FiPhoneCall /> 
                <span className="font__size"> (905) 670-8787</span>
              </small>{" "}
              <br />
              <h6></h6>
              <small className="flex">
                <HiOutlineMail />
                <span className="font__size"> info@de-valor.ca</span>
               
              </small>{" "}
              <br />
             <div className="text-center new-image-footer">
              <img src="https://i.ibb.co/hgp4WgL/393910470-2393960074140424-1094279562871830268-n-removebg-preview.png" alt="" />
             </div> */}
             <br />
             
             <Link to={'/contact-us'} className="bg-gray-color">
              Canada Region
             </Link> <br /> <br />
             <Link to={'/contact-us'} className="bg-gray-color">
              USA Region
             </Link> 
            </div>
          </div>
        </div>
        <div className="row last-section">
          {/* <div className="col-lg-6">
            <p>
              Copyright @ WoodWorth Cabinetry {mainValue}. All Right Reserved
            </p>
          </div> */}
          <div className="col-lg-12">
            <div className="text-center">
              <a href="">
                <RiFacebookCircleFill />
              </a>
              <a href="">
                <AiFillInstagram />
              </a>
              <a href="">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
