import React from "react";
import Navbar from "../navbar/Navbar";
import HomeOwner from "../HomeOwner/HomeOwner";
import QualityRedefined from "../QualityRedefined/QualityRedefined";
import Cabinet from "../Cabinet/Cabinet";
import BecomeDealer from "../BecomeDeller/BecomeDeller";
import DreamKitchen from "../DreamKitchen/DreamKitchen";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
const HomeManagement = () => {
  return (
    <>
      <Navbar />
      <Slider/>
      {/* <HomeOwner /> */}
      <QualityRedefined />
      {/* <Visualize /> */}
      <Cabinet />
      <BecomeDealer />
      <DreamKitchen />
      <Footer />
    </>
  );
};

export default HomeManagement;
