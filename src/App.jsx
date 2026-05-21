import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Domestics from "./pages/services/domestic";
import Household from "./pages/services/Household";
import Office from "./pages/services/officeshifting"
import International from "./pages/services/internationalshifting"
import Storage from "./pages/services/storagefacitity"
import Bulk from "./pages/services/bulkshifting"
import Car from "./pages/services/carshifting"
import Corporate from "./pages/services/corporateshifting"

import Blog from "./pages/Blog"
import Blog1 from "./pages/blog1"
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import TermsPrivacy from "./Pages/TermsPrivacy";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<Services />} />
      <Route path="/services/domestic" element={<Domestics />} />
      <Route path="/services/household" element={<Household />} />
      <Route path="/services/office" element={<Office />} />
      <Route path="/services/international" element={<International />} />
      <Route path="/services/storage" element={<Storage />} />
      <Route path="/services/bulk" element={<Bulk />} />
      <Route path="/services/car" element={<Car />} />
      <Route path="/services/corporate" element={<Corporate />} />
     
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog1" element={<Blog1 />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/term&privacy" element={<TermsPrivacy />} />

    </Routes>

    </>
  );
}

export default App;