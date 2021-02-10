import React from 'react'
import classes from './NewProducts.module.css'
import ProductItemContainer from '../../common/ProductItem/ProductItemContainer'

const NewProducts = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2>
      Наши новинки
      </h2>
      <div className={classes.newGoodsArea}>
       {props.products.map(product => {
          return (
            <ProductItemContainer 
              itemData={product}
              key={product.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NewProducts