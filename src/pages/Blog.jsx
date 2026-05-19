import React from 'react'
import Navbar from '../Components/Navbar'
import BlogHeroSection from '../Components/BlogHeroSection.jsx'
import BlogCardsSection from "../Components/BlogCardsSection";
import Footer from '../Components/Footer.jsx';

const Blog = () => {
  return (
    <>
    <Navbar/>
    <BlogHeroSection/>
    <BlogCardsSection/>
    <Footer/>
    </>
  )
}

export default Blog
