import React from 'react'
import Hero from '../home/Hero'
import CursorEffect from './CursorEffect'
import Narriatives from './Narriatives'
import IntroSection from './IntroSection'



const Homepage = () => {
  return (
    <>
      <Hero/>
      <CursorEffect/>
      <IntroSection/>
      <Narriatives/>
      <div className='h-screen'>

      </div>
    </>
  )
}

export default Homepage