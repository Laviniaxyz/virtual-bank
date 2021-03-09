import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import Footer from '../components/Footer';
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'


function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  console.log(isOpen)

  return (
    <>
      <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
      <Sidebar  isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      <Footer/>
      
    </>
  )
}

export default Home
