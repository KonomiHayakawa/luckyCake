import React from 'react'
import classes from './ProductsList.module.css'
import ProductItemContainer from './../common/ProductItem/ProductItemContainer'

const ProductsList = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.infoWrapper}>
        <h2>
          {props.title}
        </h2>
        <SortProducts
          sortProducts={props.sortProducts}
          activeSort={props.activeSort}
        />
      </div>

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

const SortProducts = (props) => {
  const sortOptions = [
    {
      id: 1,
      sortName: 'по возрастанию цены',
      sortType: 'sortByPriceIncrease',
    },
    {
      id: 2,
      sortName: 'по убыванию цены',
      sortType: 'sortByPriceDecrease',
    },
    {
      id: 3,
      sortName: 'по возрастанию веса',
      sortType: 'sortBySizeIncrease',
    },
    {
      id: 4,
      sortName: 'по убыванию веса',
      sortType: 'sortBySizeDecrease',
    },
  ]
  return (
    <div className={classes.sortWrapper}>
      {sortOptions.map(option => {
        const activeClass = props.activeSort === option.sortType ? classes.activeSort : null
        return (
          <div 
            className={`${classes.sortOption} ${activeClass}`}
            key={option.id}
            onClick={() => props.sortProducts(option.sortType)} 
          >
            {option.sortName}
          </div>
        )
      })}
    </div>
  )
}

export default ProductsList
