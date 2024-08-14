"use client"
import React from 'react'
import Button from './Button.js'
import HeroComponent from './HeroComponent'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import MainInfo from './MainInfo'
import SideMenubar from './SideMenubar'
import Aos from 'aos'

const MainComponent = () => {

  return (
    <>
   
        <div className='px-2 pt-8'>
        <div className="md:flex">
        <MainInfo/>
        <HeroComponent/>
        </div>
        <About/>
        <Experience/>
        <Skills/>
        <Contact/>
        <Footer/>
        </div>
    </>
    
  )
}

export default MainComponent