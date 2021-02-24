import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getProducts} from './../../queries'
import ProductsList from './ProductsList'
import {setError} from './../../redux/errorsReducer'
import Spinner from '../common/Spinner/Spinner'
import {sortByPriceIncrease, sortByPriceDecrease, sortBySizeIncrease, sortBySizeDecrease} from './ProductsListHelper'

const ProductsListContainer = (props) => {
  const [productsData, setProductsData] = useState([])
  const [isContentLoaded, setIsContentLoaded] = useState(false)
  const [activeSort, setActiveSort] = useState('')

  useEffect(() => {
    getProducts(props.productCategory, props.queryParameter)
      .then(data => setProductsData(data))
      .then(() => setIsContentLoaded(true))
      .catch(error => props.setError(error))
  }, [props.productCategory])

  const sortProducts = (sortType) => {
    const sortTypes = {
      'sortByPriceIncrease': sortByPriceIncrease, 
      'sortByPriceDecrease': sortByPriceDecrease, 
      'sortBySizeIncrease': sortBySizeIncrease, 
      'sortBySizeDecrease': sortBySizeDecrease,
    }
    const productsDataCopy = [...productsData]
    const sortedData = productsDataCopy.sort((a, b) => sortTypes[sortType](a, b))
    setProductsData(sortedData)
    setActiveSort(sortType)
  }

  const titles = {
     'cakes': 'Торты',
     'cupcakes': 'Капкейки',
     'biscuits': 'Печенье',
     'pies': 'Пироги',
  }

  if (!isContentLoaded) return <Spinner />
  
  return (
    <ProductsList 
      productsData={productsData}
      activeSort={activeSort}
      sortProducts={sortProducts}
      title={titles[props.productCategory]}
    />
  )
}

export default connect(null, {setError})(ProductsListContainer)