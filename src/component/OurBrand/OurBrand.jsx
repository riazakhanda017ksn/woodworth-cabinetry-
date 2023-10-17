import React from 'react';
import './OurBrand.scss'
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import img from '../../images/1111111111111111111111111111111111.jpg'
const OurBrand = () => {
    return (
        <>
        <Navbar/>
        <div className='our-brand py-5 my-4'>
              <div className="quality-caption">
          <div className="text">
            <h3>
              <small>OUR BRAND</small>
            </h3>
          </div>
         
        </div>
            <div className="container py-5 my-5">
             <div className="row">
                <div className="col-lg-6 mt-4">
                    <div className="our-brand-text">
                        <h1> <span className='span-1'>40+</span> years <br /> of <span className='span-2'>QUALITY</span> <br /> <span className='span-3'> SERVICE</span> <br /> <span className='span-4'>in</span>
                           <span className='span-5'> CABINETRY.</span></h1>
                           <br />
                           <p className='mt-2'>Woodworth Cabinetry makes cabinetry easy. Our manufacturing and distributing process is quick, customized, and quality assured. Whether it be a busy home with family or friends, or a space to house independence, we cater to it. Make Woodworth part of the family, and help make a house, a home.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                   <div className="our-brands">
                   <img src={img} alt="" />
                   </div>
                </div>
             </div>
            
            </div>

            <div className="growth">
              <div className="container">
                 <h3>Rapid Growth</h3>
                 <p>Our new headquarters is a one-million square foot state of the art production hub nestled on the Passaic River in Newark. It consolidates all four of our previous spaces into one
                superstructure. With this extraordinary advancement, wood worth cabinetry is destined for exponential growth. The new building supports our vision with spaces that intentionally foster a transparent environment and encourage the enjoyment of discovery. This makes wood worth cabinetry a place where people are happy to come and innovate.</p>
                 </div>
              </div>

              <div className="container py-5 mt-5">
                <div className="row">

                  <div className="col-lg-4">
                    <div className="brands">
                      <h4>OUR BRAND</h4>
                      <p> Woodworth Cabinetry is a customer-orientated, experienced, and dedicated team who embrace the kitchen as the heart and soul of the home.</p>
                    </div>
                  </div>


                  
                  <div className="col-lg-4">
                    <div className="brands __border">
                      <h4>OUR MISSION</h4>
                      <p>Woodworth Cabinetry wants to personalize the process of cabinetry and home decor, adding finishing works that give your projects unique qualities to match the
                      energy of the home</p>
                    </div>
                  </div>

                    
                  <div className="col-lg-4">
                    <div className="brands ">
                      <h4>OUR PROMISE</h4>
                      <p>
                      Woodworth Cabinetry takes extra precautions in ensuring that our clients receive high-quality products through professional service and a customized process.</p>
                    </div>
                  </div>





                </div>

                <div className="our-values mt-5 py-5 text-center">
                  <h2>OUR VALUES
                    </h2>
                    <p>We are deeply committed to our four core values that inspire <br /> who we truly are at WoodWorth Cabinetry.</p>
                    <span></span>
                    
                    <div className="dotted mt-5">
                      <div className="customers">
                      <div className="customer first-box">
                       <h3>CUSTOMER ORIENTED</h3>
                        <p>We believe that quality should never be compromised. At wood worth cabinetry, we recognize that design is so much more than just the appearance alone.
                       That is why we diligently focus on quality sourcing all components that make up our superior cabinets. At wood worth cabinetry, everything is tested - we leave nothing to chance.</p>
                       </div>
                       <div className="customer mt-5 second-box">
                       <h3>CUSTOMER ORIENTED</h3>
                        <p>We believe that quality should never be compromised. At wood worth cabinetry, we recognize that design is so much more than just the appearance alone.
                       That is why we diligently focus on quality sourcing all components that make up our superior cabinets. At wood worth cabinetry, everything is tested - we leave nothing to chance.</p>
                       </div>
                      </div>
                      <div className="example-borders">
                      <div className="bottom_border"></div>
                      </div>
                      <div className="customers ">
                      <div className="customer add-new-custom-class">
                       <h3>FULLY STOCKED
</h3>
                        <p>Our warehouse is always fully-stocked with ready-to-assemble (RTA) cabinetry and vanities, making your orders ready for pick-up or delivery quickly and easily.</p>
                       </div>
                       <div className="customer add-new-custom-class mt-5 thied-box">
                       <h3>COMPETITIVELY PRICED
</h3>
                        <p>Being factory direct, we have an unbeatable price advantage over comparable products. Eliminating the middle man, we can beat local prices.</p>
                       </div>
                      </div>
                    </div>

                </div>
                 
              </div>
              
        </div>
        <Footer/>
        </>
    );
};

export default OurBrand;