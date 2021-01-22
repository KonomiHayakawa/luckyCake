import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import {getProducts} from './../../queries'
import {setError} from './../../redux/errorsReducer'
import {connect} from 'react-redux'

const ProductsListContainer = (props) => {
  const [productsData, setProductsData] = useState({})

  useEffect(() => {
    getProducts(props.productCategory)
      .then(data => setProductsData(data))
      .catch(error => props.setError(error))
  }, [props.productCategory])

  return (
    <ProductsList 
      productsData={productsData}
      unit={props.productCategory === 'cupcakes' ? 'шт' : 'кг'}
    />
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {setError})(ProductsListContainer)