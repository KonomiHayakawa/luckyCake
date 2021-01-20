import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import {getProducts} from './../../queries'

const ProductsListContainer = (props) => {
  const [productsData, setProductsData] = useState({})

  useEffect(() => {
    getProducts(props.productCategory)
      .then(data => setProductsData(data))
  }, [props.productCategory])

  return (
    <ProductsList 
      productsData={productsData}
      unit={props.productCategory === 'cupcakes' ? 'шт' : 'кг'}
    />
  )
}

export default ProductsListContainer