import React from 'react'
import Carousel from './Carousel/Carousel'
import classes from './HeroSection.module.css'
import OpenCatalogBtn from './OpenCatalogBtn/OpenCatalogBtn'

const HeroSection = (props) => {
  return (
    <div className={classes.heroSectionWrapper}>

      <div className={classes.infoArea}>
        <h1 className={classes.title}>
          Красивейшие торты для любого события
        </h1>
        <p className={classes.description}>
          Приготовим для вас торт, который станет отличным украшением на праздничном столе!
        </p>
        <OpenCatalogBtn className={classes.button} />
      </div>

      <div className={classes.carouselArea}>
        <Carousel/>
      </div>

    </div>
  )
}

export default HeroSection