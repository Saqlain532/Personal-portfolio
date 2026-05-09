import React from 'react'
import Navbar from './Navbar'
import { HeroSection } from './HeroSection'
import { Projects } from './Projects'
import Skills from './Skills'
import { Contacts } from './Contacts'
import { Footer } from './Footer'
const Homepage = () => {
  return (
    <div className="bg-base h-full">
        <Navbar/>
        <HeroSection/>
        <Projects/>
        <Skills/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default Homepage
