import React from 'react'
import classes from './ProductsList.module.css'
import ProductItemContainer from './../common/ProductItem/ProductItemContainer'

const ProductsList = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2>
        {props.title}
      </h2>
      <div className={classes.productsList}>
        {Object.keys(props.productsData).map(product => {
          let itemData = props.productsData[product]
          return (
            <ProductItemContainer 
              itemData={itemData}
              key={itemData.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductsList