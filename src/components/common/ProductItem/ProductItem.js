import React from 'react'
import classes from './ProductItem.module.css'
import shoppingCart from './../../../img/ProductItem/shoppingCart.svg'

const ProductItem = (props) => {
  return (
    <div className={classes.itemWrapper}>
      <div className={classes.goodTitle}>
        {props.title}
      </div>
      <img 
        src={props.imgSrc}
        alt='serviceImage'
        className={classes.image}
      />
      <div className={classes.description}>
        {props.description}
      </div>
      <div className={classes.actionBtn}>
        {props.price} грн/{props.weight} {props.unit}
        <div className={classes.addToCartIcon}>
          <img 
            src={shoppingCart}
            alt='shoppingCart'
          />
        </div>
      </div>
    </div>
  )
}

export default ProductItem
