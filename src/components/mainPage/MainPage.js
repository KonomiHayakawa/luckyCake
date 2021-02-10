import React from 'react'
import DiscountsContainer from './Discounts/DiscountsContainer'
import HeroSection from './HeroSection/HeroSection'
import Infographic from './Infographic/Infographic'
import NewProductsContainer from './NewProducts/NewProductsContainer'
import OurServices from './Services/OurServices'

const MainPage = (props) => {
  return (
    <>
      <HeroSection />
      <NewProductsContainer />
      <DiscountsContainer />
      <OurServices />
      <Infographic />     
    </>
  )
}

export default MainPage