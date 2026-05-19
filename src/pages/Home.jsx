import React from 'react'
import HeroHomeSection from '../Components/HomePage/HeroHomeSection'
import HomeSlider from '../Components/HomePage/HomeSlider'
import ShipingService from '../Components/HomePage/ShipingService'
import AboutLogisco from '../Components/HomePage/AboutLogisco'
import LogisticsSection from '../Components/HomePage/LogisticsSection'
import WorkProcess from '../Components/HomePage/WorkProcess'
import Testimonials from '../Components/HomePage/Testimonials'
import Footer from '../Components/Footer'
import Navbar from "../Components/Navbar";
import WhyChooseUs from '../Components/HomePage/WhyChooseUs'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroHomeSection/>
      <HomeSlider/>
      <ShipingService/>
      <AboutLogisco/>
       <WhyChooseUs/>
      <WorkProcess/>
      <Testimonials/>
      <Footer/>
    
     
    </div>
  )
}

export default Home
