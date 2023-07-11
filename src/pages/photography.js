import { BrandSection } from '@/Components/BrandSection'
import HeroSection from '@/Components/HeroSection'
import Navbar from '@/Components/Navbar'
import Portfolio from '@/Components/Portfolio'
import React from 'react'

const photography = () => {
  return (
    <div className='font-inter'>
        {/* <Navbar/> */}
        <HeroSection/>
        <BrandSection/>
        <Portfolio/>
    </div>
  )
}

export default photography