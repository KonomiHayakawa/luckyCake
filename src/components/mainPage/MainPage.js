import React from 'react'
import DiscountsContainer from './Discounts/DiscountsContainer'
import HeroSection from './HeroSection/HeroSection'
import Infographic from './Infographic/Infographic'
import NewGoods from './NewGoods/NewGoods'
import OurServices from './Services/OurServices'

const MainPage = (props) => {
  return (
    <>
      <HeroSection />
      <NewGoods />
      <DiscountsContainer />
      <OurServices />
      <Infographic />     
    </>
  )
}

export default MainPage