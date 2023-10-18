import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeManagement from "./component/HomeManagement/HomeManagement";
import CabinetManagent from "./component/CabinetManagent/CabinetManagent";
import VanitiesManagement from "./component/VanitiesManagement/VanitiesManagement";
import AboutManagement from "./component/AboutManagement/AboutManagement";
import ContactManagement from "./component/ContactManagement/ContactManagement";
import RegisterManagement from "./component/RegisterManagement/RegisterManagement";
import LoginManagement from "./component/LoginManagement/LoginManagement";
import DoorDetails from "./component/DoorDetails/DoorDetails";
import WarrantyManagement from "./component/WarrantyManagement/WarrantyManagement";
import CompanyInfo from "./component/CompanyInfo/CompanyInfo";
import ScrollTop from "./component/ScrollToTop/ScrollToTop";
import OurBrand from "./component/OurBrand/OurBrand";
import NotFound from "./component/NotFound/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeManagement />} />
          <Route path="/all-door" element={<CabinetManagent />} />
          <Route path="/vanities" element={<VanitiesManagement />} />
          <Route path="/all-door/:id" element={<DoorDetails />} />
          <Route path="/about-us" element={<AboutManagement />} />
          <Route path="/contact-us" element={<ContactManagement />} />
          <Route path="/became-a-dealer" element={<RegisterManagement />} />
          <Route path="/login" element={<LoginManagement />} />
          <Route path="/warranty" element={<WarrantyManagement />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/our-brand" element={<OurBrand />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
