import React from 'react'
import classes from './ProductItem.module.css'
import shoppingCart from './../../../img/ProductItem/shoppingCart.svg'
import sale from './../../../img/sale.png'

const ProductItem = (props) => {
  const priceIconSrc = props.itemData.newPrice ? sale : shoppingCart
  const actionBtnClass = props.itemData.newPrice ? `${classes.actionBtn} ${classes.saleBtn}` : classes.actionBtn
  return (
    <div className={classes.itemWrapper}>
      <div className={classes.goodTitle}>
        {props.itemData.title}
      </div>
      <img 
        alt='serviceImage'
        className={classes.foodPhoto}
        src={props.itemData.imgSrc}
      />
      <div className={classes.description}>
        {props.itemData.description}
      </div>
      <div 
        // className={classes.actionBtn}
        className={actionBtnClass}
        onClick={() => props.addProductToCart(props.itemData)}
      >
        
        <Price itemData={props.itemData}/>
    
        <div className={classes.addToCartIconWrap}>
          <img 
            alt='shoppingCart'
            className={classes.addToCartIcon}
            src={priceIconSrc}
          />
        </div>
      </div>
    </div>
  )
}

const Price = (props) => {
  const regularPriceClass = props.itemData.newPrice ? classes.regularPrice : null
  return (
    <div> 
      <div className={regularPriceClass}>
        {props.itemData.weight && <>{props.itemData.price} грн/{props.itemData.weight}кг</> }
        {props.itemData.size && <>{props.itemData.price} грн/{props.itemData.size} шт</>}
      </div>
      {props.itemData.newPrice &&
        <div>
          {props.itemData.weight && <>{props.itemData.newPrice} грн/{props.itemData.weight}кг</>}
          {props.itemData.size && <>{props.itemData.newPrice} грн/{props.itemData.size} шт</>}
        </div>
      }
    </div>
  )
}

export default ProductItem