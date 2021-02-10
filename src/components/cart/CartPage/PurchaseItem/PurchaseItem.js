import React from 'react'
import classes from './PurchaseItem.module.css'

const PurchaseItem = (props) => {
  return (
    <div className={classes.wrapper}>
      <img
        src={props.purchase.imgSrc}
        alt='purchaseItem'
        className={classes.purchaseImage}
      />

      <div>
        {props.purchase.title} 
      </div>

      <div>
        {props.purchase.price * props.purchase.amount} грн
      </div>

      <div className={classes.amountArea}>
        <span 
          className={classes.changeAmountIcon}
          onClick={() => props.removeFromCart(props.purchase)}
        >
          -
        </span>
        <span>
          {props.purchase.weight ? (
            `${props.purchase.amount} шт.` 
          ) : (
            `${props.purchase.amount} уп.`
          )}
        </span>
        <span 
          className={classes.changeAmountIcon}
          onClick={() => props.addProductToCart(props.purchase)}
        >
          +
        </span>
      </div>
    </div>
  )
}

export default PurchaseItem