import React from 'react'
import classes from './ProductItem.module.css'
import shoppingCart from './../../../img/ProductItem/shoppingCart.svg'

const ProductItem = (props) => {
  return (
    <div className={classes.itemWrapper}>
      <div className={classes.goodTitle}>
        {props.itemData.title}
      </div>
      <img 
        src={props.itemData.imgSrc}
        alt='serviceImage'
        className={classes.image}
      />
      <div className={classes.description}>
        {props.itemData.description}
      </div>
      <div 
        className={classes.actionBtn}
        onClick={() => props.addProductToCart(props.itemData)}
      >
        {props.itemData.weight && 
          <div>
            {props.itemData.price} грн/{props.itemData.weight}кг
          </div>
        }
        {props.itemData.size && 
          <div>
            {props.itemData.price} грн/{props.itemData.size} шт
          </div>
        }
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