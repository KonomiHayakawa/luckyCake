import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cake1 from './../../../../img/mainPage/heroSection/cake1.svg'
import cake2 from './../../../../img/mainPage/heroSection/cake2.svg'
import cake3 from './../../../../img/mainPage/heroSection/cake3.svg'
import classes from './Carousel.module.css'

const Carousel = (props) => {
  const images = [
    {src: cake1, alt: 'testImg', id: 1},
    {src: cake2, alt: 'testImg', id: 2},
    {src: cake3, alt: 'testImg', id: 3}
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  } 

  return (
    <div className={classes.container}>
      <Slider {...settings}>
        {images.map(image => {
          return (
            <div key={image.id}>
              <img 
                src={image.src}
                alt={image.alt}
                style={{width:'100%', height: 'auto'}}
              /> 
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel