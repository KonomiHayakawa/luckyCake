import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getProductsByCategory, getProductsByFilter} from './../../queries'
import ProductsList from './ProductsList'
import {setError} from './../../redux/errorsReducer'
import Spinner from '../common/Spinner/Spinner'

const ProductsListContainer = (props) => {
  const [productsData, setProductsData] = useState([])
  const [categoryTitle, setCategoryTitle] = useState('')
  const [isContentLoaded, setIsContentLoaded] = useState(false)

  useEffect(() => {
    getProductsByCategory(props.productCategory)
      .then(data => setProductsData(data))
      .then(() => setIsContentLoaded(true))
      .catch(error => props.setError(error))
  }, [props.productCategory])

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

  if (!isContentLoaded) return <Spinner />
  
  return (
    <ProductsList 
      productsData={productsData}
      title={categoryTitle}
    />
  )
}

export default connect(null, {setError})(ProductsListContainer)