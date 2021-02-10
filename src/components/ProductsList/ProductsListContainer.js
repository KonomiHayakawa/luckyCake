import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getProductsByCategory, getProductsByFilter} from './../../queries'
import ProductsList from './ProductsList'
import {setError} from './../../redux/errorsReducer'

const ProductsListContainer = (props) => {
  const [productsData, setProductsData] = useState({})
  const [categoryTitle, setCategoryTitle] = useState('')
  // console.log(productsData)

  useEffect(() => {
    getProductsByCategory(props.productCategory)
    .then(data => setProductsData(data))
    .catch(error => props.setError(error))
  }, [props])

  useEffect(() => {
    switch (props.productCategory) {
      case 'cakes': setCategoryTitle('Торты')
      break;
      case 'cupcakes': setCategoryTitle('Капкейки')
      break;
      case 'biscuits': setCategoryTitle('Печенье')
      break;
      case 'pies': setCategoryTitle('Пироги')
      break;
      default: return setCategoryTitle('Наши десерты')
    }
  }, [props.productCategory])

  return (
    <ProductsList 
      title={categoryTitle}
      productsData={productsData}
    />
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {setError})(ProductsListContainer)