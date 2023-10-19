// /* eslint-disable jsx-a11y/iframe-has-title */
// import React from "react";
// import "./Contact.scss";
// import { BsAlarm, BsArrowRight } from "react-icons/bs";
// import { ImPhone } from "react-icons/im";
// import { AiOutlineMail } from "react-icons/ai";

// const Contact = () => {
//   return (
//     <>
//       <div className="contact"></div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-1"></div>
//           <div className="col-lg-10 pt-5 ">
//             <div
//               className="contact-form "
//               data-aos="fade-up"
//               data-aos-duration="1000"
//               data-aos-easing="ease-in-out"
//               data-aos-mirror="true"
//               data-aos-once="false"
//             >
//               <div className="quality-caption">
//                 <span></span>
//                 <div className="text">
//                   <h3>
//                     CONTACT <br /> WoodWorth Cabinetry
//                   </h3>
//                 </div>
//                 <span></span>
//               </div>
//               <p>
//                 WoodWorth Cabinetry is here to provide you with more
//                 information, answer any of your questions and create effective
//                 solutions for your individual needs. Please submit your
//                 information below and an agent will be in touch shortly.
//               </p>
//               <br />
//               <form action="">
//                 <div className="input-flex">
//                   <div className="one-input">
//                     <p>NAME*</p>
//                     <input type="text" required />
//                   </div>
//                   <div className="one-input">
//                     <p>EMAIL*</p>
//                     <input type="email" required />
//                   </div>
//                 </div>
//                 <div className="input-flex">
//                   <div className="one-input">
//                     <p>PHONE*</p>
//                     <input type="number" required />
//                   </div>
//                   <div className="one-input">
//                     <p>ZIP CODE*</p>
//                     <input type="text" required />
//                   </div>
//                 </div>
//                 <div className="input-flex">
//                   <div className="one-input">
//                     <p>MESSAGE*</p>
//                     <textarea cols="15" rows="6"></textarea>
//                   </div>
//                 </div>

//                 <div className="contact-btn">
//                   <button>
//                     SUBMIT
//                     <span>
//                       {" "}
//                       <BsArrowRight />{" "}
//                     </span>{" "}
//                   </button>
//                 </div>
//               </form>

//               {/*  */}

//               <div className="quality-caption mt-5 pt-5">
//                 <span></span>
//                 <div className="text">
//                   <h3>LOCATION</h3>
//                 </div>
//                 <span></span>
//               </div>
//               {/* map */}

//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="address mt-5">
//                     <span>ADDRESS</span>
//                     <p>Unit 2, 854 Westport Crescent Mississauga, ON L5T 1N5</p>
//                   </div>
//                 </div>

//                 <div className="col-lg-6">
//                   <div className="map">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.920004752595!2d-79.65761602476452!3d43.649832652650126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f341096d185%3A0xec96e210e14e7862!2s854%20Westport%20Crescent%20%232%2C%20Mississauga%2C%20ON%20L5T%201N5%2C%20Canada!5e0!3m2!1sen!2sbd!4v1683471438257!5m2!1sen!2sbd"
//                       allowfullscreen=""
//                       loading="lazy"
//                       referrerpolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                   </div>
//                 </div>
//               </div>

//               {/* contact info */}
//               <div className="quality-caption my-5 py-5">
//                 <span></span>
//                 <div className="text">
//                   <h3>
//                     Contact <br />
//                     Info
//                   </h3>
//                 </div>
//                 <span></span>
//               </div>
//               {/*  */}
//               <div className="row">
//                 <div className="col-lg-4">
//                   <div className="contact-inf text-center">
//                     <ImPhone />
//                     <h5>Call Us</h5>
//                     <p>+1 (905) 670-8787</p>
//                   </div>
//                 </div>
//                 <div className="col-lg-4">
//                   <div className="contact-inf text-center">
//                     <AiOutlineMail />
//                     <h5>Send a Email </h5>
//                     <p>info@de-valor.ca</p>
//                   </div>
//                 </div>
//                 <div className="col-lg-4">
//                   <div className="contact-inf text-center">
//                     <BsAlarm />
//                     <h5>Time We Work :</h5>
//                     <p>Mon – Fri: 9:00 am – 5:00 pm</p>
//                   </div>
//                 </div>
//               </div>

//               {/*  */}

//               {/*  */}
//             </div>
//             {/*  */}
//           </div>
//           <div className="col-lg-1"></div>
//         </div>
//         {/* address */}
//       </div>
//     </>
//   );
// };

// export default Contact;



import React from 'react';
import "./Contact.scss";
import { BsAlarm} from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci"
import logo from '../../img/logo2.png'

const Contact = () => {
  return (
    <div style={{overflow:"hidden"}}>
    <div className='container py-5 mt-5'>
      <div className="row">
        <div className="col-lg-6">
          <div className="form">
            <div className="form-content">
              <h3>Contact Info</h3>
              <p>Woodworth Cabinetry can provide you with any
              information you may need, or answer any questions you may have.</p>
            </div>
            <form action="">
              <div className="flex-form">
                <div className="first-input">
                  <label>First name</label> <br />
                  <input type="text" placeholder='First name' required/>
                </div>
                <div className="first-input">
                  <label>Last name</label> <br />
                  <input type="text" placeholder='Last name' required/>
                </div>
              </div>
              <div className="input-data">
                <label >Email</label> <br />
                <input type="email" placeholder='Email' required/>
              </div>
              <div className="input-data">
                <label >Phone number</label> <br />
                <input type="number" placeholder='Phone number' required/>
              </div>
              <div className="input-data">
                <label>Message</label> <br />
                <textarea cols="20" rows="6" placeholder='Message' required></textarea>
              </div>
              <button>Send Message</button>
            </form>
            <div className="company-logo-center text-center py-4">
        <img src={logo} alt="" />
      </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-more-info">

            <div className="contact__div___">
              <h3>Canada Region</h3>
              <span></span>
              <h4>Woodworth Cabinetry</h4>
               <div className="strong-text">
                <strong>Address:</strong>
                <p> 854 Westport Crescent, Mississauga, ON L5T 1N5</p>
               </div>
               <div className="strong-text">
                <strong>Tel:</strong>
                <p> (905) 670-8787</p>
               </div>
               <div className="strong-text">
                <strong>Email:</strong>
                <p> info@de-valor.ca</p>
               </div>
               <div className="strong-text">
                <strong>Website:</strong>
                <p>www.woodworthcabinetry.com</p>
               </div>
            </div>

            <div className="contact__div___">
              <h3 className='space__top'>US Region</h3>
              <span></span>
              <h4>Delux Wood Cabinetry</h4>
               <div className="strong-text">
                <strong>Address:</strong>
                <p>420 frontage Rd, West Haven,CT06516 </p>
               </div>
               <div className="strong-text">
                <strong>Tel:</strong>
                <p> (407) 655-2687</p>
               </div>
               <div className="strong-text">
                <strong>Email:</strong>
                <p> info@deluxwoodcabinetry.com</p>
               </div>
               <div className="strong-text">
                <strong>Website:</strong>
                <p>www.deluxwoodllc.com</p>
               </div>
            </div>

            <div className="contact__div___">
              <h4 className='space__top'>Global Home Co</h4>
               <div className="strong-text">
                <strong>Address:</strong>
                <p>11950 Baltimore Ave,Beltsville,MD 20705 </p>
               </div>
               <div className="strong-text">
                <strong>Tel:</strong>
                <p> (240) 264-1626</p>
               </div>
               <div className="strong-text">
                <strong>Email:</strong>
                <p> info@globalhomeco.com</p>
               </div>
               <div className="strong-text">
                <strong>Website:</strong>
                <p>www.globalhomeco.com</p>
               </div>
            </div>

            <div className="contact__div___">
              <h4 className='space__top'>Premium choice Cabinetry</h4>
               <div className="strong-text">
                <strong>Address:</strong>
                <p>7112 Augusta Rd, Piedmont,SC 29673 </p>
               </div>
               <div className="strong-text">
                <strong>Tel:</strong>
                <p> (864) 558-8034</p>
               </div>
               <div className="strong-text">
                <strong>Email:</strong>
                <p> support@premiumchoicecabinetry.com</p>
               </div>
               <div className="strong-text">
                <strong>Website:</strong>
                <p>www.premiumchoicecabinetry.com</p>
               </div>
            </div>

          </div>
        </div>
      </div>

   
    </div>
    {/* <div className="row mb-5 pb-2">
      <div className="col-lg-3">
        <div className="web-contact-info">
          <span><ImPhone /></span>
          <h3>+1 (905) 670-8787</h3>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="web-contact-info">
          <span><AiOutlineMail/></span>
          <h3>info@de-valor.ca</h3>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="web-contact-info">
          <span><BsAlarm /></span>
          <h3>Mon – Fri: 9:00 am – 5:00 pm</h3>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="web-contact-info">
          <span>< CiLocationOn /></span>
          <h3>Mon – Fri: 9:00 am – 5:00 pm</h3>
        </div>
      </div>
    </div> */}
  
    </div>
  );
};

export default Contact;