import "./BecomeDeller.scss";
import img from "../../images/11efd97e-dd98-41af-a2c1-5ff31428e57c_dealers.avif";
import { Link } from "react-router-dom";
import img1 from '../../images/banners/4.jpg'
import img2 from '../../images/banners/5.jpg'
import img3 from '../../images/banners/6.jpg'
import img4 from '../../images/banners/7.jpg'
import img5 from '../../images/banners/8.jpg'
import img6 from '../../images/banners/3.jpg'
import img7 from '../../images/banners/1.jpg'
import img8 from '../../images/banners/2.jpg'
import img9 from '../../images/banners/9.jpg'
import img10 from '../../images/banners/10.jpg'
import img11 from '../../images/banners/11.jpg'

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';


const BecomeDealer = () => {

  return (
    <>
       <div className="quality-caption mb-5">
          <div className="text">
            <h3>
              <small>EXPLORE OUR DESIGN</small>
            </h3>
          </div>
         
        </div>
  
    <div className="dream-kitchen">
      <div className="container">
      <Swiper
         modules={[Autoplay, EffectFade]}
         slidesPerView={3}
         autoplay={{
           delay: 1000,
           disableOnInteraction: true,
         }}
        className="mySwiper"
        
      >
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>

     
     
    

      <div className="slide-one-img">
        <img src={img5} alt="" />
      </div>
        </SwiperSlide>
        <SwiperSlide> <div className="slide-one-img">
        <img src={img2} alt="" />
      </div></SwiperSlide>
        <SwiperSlide>
        <div className="slide-one-img">
        <img src={img1} alt="" />
      </div></SwiperSlide>
        <SwiperSlide>  <div className="slide-one-img">
        <img src={img4} alt="" />
      </div></SwiperSlide>
        <SwiperSlide> <div className="slide-one-img">
        <img src={img3} alt="" />
      </div>
      </SwiperSlide>
      <SwiperSlide> <div className="slide-one-img">
        <img src={img6} alt="" />
      </div>
      </SwiperSlide>
      <SwiperSlide> <div className="slide-one-img">
        <img src={img7} alt="" />
      </div>
      </SwiperSlide>
      <SwiperSlide> <div className="slide-one-img">
        <img src={img8} alt="" />
      </div>
      </SwiperSlide>
      <SwiperSlide> <div className="slide-one-img">
        <img src={img9} alt="" />
      </div>
      </SwiperSlide>
      <SwiperSlide> <div className="slide-one-img">
        <img src={img10} alt="" />
      </div>
      </SwiperSlide>
      <SwiperSlide> <div className="slide-one-img">
        <img src={img11} alt="" />
      </div>
      </SwiperSlide>
      </Swiper>
    
    </div>
    </div> 
     </>
  );
};

export default BecomeDealer;
