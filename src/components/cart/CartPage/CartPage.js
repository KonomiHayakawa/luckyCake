import React from 'react'
import classes from './CartPage.module.css'
import emptyCart from './../../../img/cart/emptyCart.png'
import MakeOrderForm from './MakeOrderForm/MakeOrderForm'
import orderConfirmed from './../../../img/cart/orderConfirmed.svg'
import PurchaseItem from './PurchaseItem/PurchaseItem'

const CartPage = (props) => {
  if (props.addedProducts.length === 0) {
    return props.isOrderSended ? (
      <OrderSended/>
    ) : (
      <EmptyCart />
    )
  }
  return (
    <>
      <h2>
        Моя корзина
      </h2>
      {props.addedProducts.map(purchase => {
        return (
          <PurchaseItem
            addProductToCart={props.addProductToCart}
            key={purchase.id} 
            purchase={purchase}
            removeFromCart={props.removeFromCart}
          />
        )
      })}

      <div className={classes.totalCost}>
        Итого: {props.totalCost} грн
      </div>
      {props.totalCostWithoutDiscount !== props.totalCost &&
        <div className={classes.discount}> 
          Вы сэкономили {props.totalCostWithoutDiscount - props.totalCost} грн
        </div>
      }

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

const OrderSended = () => {
  return (
    <div className={classes.orderConfirmedWrapper}>
      <img
        alt='order confirmed'
        className={classes.orderConfirmed}
        src={orderConfirmed}
      />
      <div className={classes.orderConfirmedText}>
        Ваш заказ отправлен
      </div>
    </div>
  )
}

export default CartPage