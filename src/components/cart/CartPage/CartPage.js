import React from 'react'
import classes from './CartPage.module.css'
import MakeOrderForm from './MakeOrderForm/MakeOrderForm'
import PurchaseItem from './PurchaseItem/PurchaseItem'
import emptyCart from './../../../img/cart/emptyCart.png'

const CartPage = (props) => {
  if (props.addedProducts.length === 0) {
    return <EmptyCart />
  }
  return (
    <>
      <h2>
        Моя корзина
      </h2>
      {props.addedProducts.map(purchase => {
        return (
          <PurchaseItem
            key={purchase.id} 
            purchase={purchase}
            addProductToCart={props.addProductToCart}
            removeFromCart={props.removeFromCart}
          />
        )
      })}

      <div className={classes.totalCost}>
        Итого: {props.totalCost} грн
      </div>

      <MakeOrderForm makeOrder={props.makeOrder} />
    </>
  )
}

const EmptyCart = () => {
  return (
    <div className={classes.emptyCartWrapper}>
      <img
        alt='emptyCart'
        className={classes.emptyCartImg}
        src={emptyCart}
      />
      <div className={classes.emptyCartText}>
        Ваша корзина пока пуста
      </div>
    </div>
  )
}

export default CartPage