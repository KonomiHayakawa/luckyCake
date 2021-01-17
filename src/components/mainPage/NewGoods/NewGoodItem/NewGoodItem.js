import React from 'react'
import classes from './NewGoodItem.module.css'
import shoppingCart from './../../../../img/newGoods/shoppingCart.svg'

const NewGoodItem = (props) => {
  return (
    <div className={classes.itemWrapper}>
      <div className={classes.goodTitle}>
        {props.title}
      </div>
      <img 
        src={props.imgSrc}
        alt='serviceImage'
      />
      <div className={classes.description}>
        {props.description}
      </div>
      <div className={classes.actionBtn}>
        {props.price}/{props.weight}
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

export default NewGoodItem
