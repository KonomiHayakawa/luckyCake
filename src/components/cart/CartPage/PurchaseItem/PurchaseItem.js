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
     
      <PurchasePrice purchase={props.purchase} />

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

const PurchasePrice = (props) => {
  const regularPrice = props.purchase.price * props.purchase.amount
  const priceWithDiscount = props.purchase.newPrice * props.purchase.amount
  const regularPriceClass = props.purchase.newPrice ? classes.oldPrice : null
  return (
    <div>
        <div className={regularPriceClass}>
          {regularPrice} грн
        </div>
        {props.purchase.newPrice &&
        <div className={classes.priceWithDiscount}>
          {priceWithDiscount} грн
        </div>
      }
    </div>
  )
}

export default PurchaseItem