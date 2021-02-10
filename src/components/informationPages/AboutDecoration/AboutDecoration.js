import React from 'react'
import classes from './AboutDecoration.module.css'

const AboutDecoration = (props) => {
  return (
    <>
      <div className={classes.infoWrapper}>
        Мы готовы создать уникальную сладость с учетом всех ваших пожеланий!  
        Это - наши уже готовые индивидуальные дизайны
      </div>
      <div className={classes.galleryWrapper}>
        {props.products.map(product => {
          return (
            <img 
              alt='designExample'
              className={classes.productImg}
              key={product.id}
              src={product.imgSrc}
            /> 
          )
        })}
      </div>
    </>
  )
}

export default AboutDecoration