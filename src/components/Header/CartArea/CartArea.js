import React from 'react'
import cartIcon from './../../../img/cart-icon.svg'
import classes from './CartArea.module.css'
import showMoreArrow from './../../../img/showMoreArrow.svg'

const CartArea = () => {
  return (
    <div className={classes.cartWrapper}>
      <img
        src={cartIcon}
        alt='cartIcon'
        className={classes.cartIcon}
      />
      <span className={classes.price}>
        0 грн
      </span>
      <span className={classes.showMoreArrow}>
        <img
          src={showMoreArrow}
          alt='showMoreArrow'
        />
      </span>
      
    </div>
  )
}

export default CartArea