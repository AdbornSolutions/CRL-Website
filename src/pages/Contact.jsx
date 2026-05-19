import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import heroImage from "../assets/images/contact-bg.png" 
import ContactHeroSection from '../Components/ContactHeroSection'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <ContactHeroSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default Contact
