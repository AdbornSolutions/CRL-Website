import React from 'react'
import Navbar from '../../Components/Navbar'
import HeroSection from '../../Components/HeroSection'
import heroImage from '../../assets/servicepage/service-bg2.png'
import ServiceCard from '../../Components/servicepage/ServiceCard'
import ProcessSteps from '../../Components/servicepage/ProcessSteps'
import Testimonials from '../../Components/HomePage/Testimonials'
import Footer from '../../Components/Footer'
import WhyChooseUs from '../../Components/HomePage/WhyChooseUs'

const Services = () => {
  return (
    <>
<Navbar/>
     <HeroSection
        title="Move Smarter with CRL"
        description="End-to-end transport and moving services tailored to meet your business and personal delivery needs."
        buttonText="Get in touch"
        buttonLink="/contact"
        imageSrc={heroImage}
        badgeText="Service page"  
      />
    <ServiceCard/>
    <WhyChooseUs/>
    <ProcessSteps/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Services
