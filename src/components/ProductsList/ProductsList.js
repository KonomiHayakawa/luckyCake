import React from 'react'
import classes from './ProductsList.module.css'
import ProductItem from './../common/ProductItem/ProductItem'

const ProductsList = (props) => {
  return (
    <>
      <div className={classes.wrapper}>
        <h2>
          Торты
        </h2>
        <div className={classes.productsList}>
          {Object.keys(props.productsData).map(producst => {
            let itemData = props.productsData[producst]
            return (
              <ProductItem 
                title={itemData.title}
                imgSrc={itemData.imgSrc}
                description={itemData.description}
                price={itemData.price}
                weight={itemData.weight || itemData.size}
                key={itemData.id}
                unit={props.unit}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProductsList