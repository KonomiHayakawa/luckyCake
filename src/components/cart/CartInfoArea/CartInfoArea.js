import React from 'react'
import cartIcon from './../../../img/cart/cart-icon.svg'
import classes from './CartInfoArea.module.css'
import hideDetailsArrow from './../../../img/common/hideDetailsArrow.svg'
import showDetailsArrow from './../../../img/common/showDetailsArrow.svg'
import PurchaseBoxContainer from './PurchaseBox/PurchaseBoxContainer'

const CartInfoArea = (props) => {
  // console.log(props)
  return (
    <div className={classes.wrapper}>

      <div 
        className={classes.cartWrapper}
        onClick={() => props.setIsCartInfoBoxOpen(!props.isCartInfoBoxOpen)}
      >
        <img
          src={cartIcon}
          alt='cartIcon'
          className={classes.cartIcon}
        />
        <span className={classes.price}>
          {props.totalCost} грн
        </span>
        <img
          src={props.isCartInfoBoxOpen ? hideDetailsArrow : showDetailsArrow}
          alt='detailsArrow'
          className={classes.showDetailsArrow}
        />
      </div>

      {props.isCartInfoBoxOpen && 
        <PurchaseBoxContainer/>
      }

    </div>
  )
}

export default CartInfoArea