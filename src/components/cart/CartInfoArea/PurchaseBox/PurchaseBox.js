import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './PurchaseBox.module.css'

const PurchaseBox = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.purchasesAmount ? (
        <>
          <div className={classes.cartText}>
            В вашей корзине {props.purchasesAmount} товаров на {props.totalCost} грн
          </div> 
          <NavLink to='/cart' className={classes.cartLink}> 
            <button className={classes.toCartBtn}>
              Перейти к корзине
            </button>
          </NavLink>
        </>
      ) : (
        <div className={classes.cartText}>
          Ваша корзина пока пуста :(
        </div>
      )}
    </div>
  )
}

export default PurchaseBox