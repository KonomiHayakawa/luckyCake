import React from 'react'
import Discounts from './Discounts/Discounts'
import HeroSection from './HeroSection/HeroSection'
import Infographic from './Infographic/Infographic'
import NewGoods from './NewGoods/NewGoods'
import OurServices from './Services/OurServices'

const MainPage = (props) => {
  return (
    <>
      <HeroSection />
      <NewGoods />
      <Discounts />
      <OurServices />
      <Infographic />     
    </>
  )
}

export default MainPage