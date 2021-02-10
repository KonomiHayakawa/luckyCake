import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getNewProducts} from '../../../queries'
import NewProducts from './NewProducts'
import {setError} from './../../../redux/errorsReducer'

const NewProductsContainer = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getNewProducts()
      .then((data) => setProducts(data))
      .catch(error => props.setError(error))
  },[props])

  return (
    <NewProducts products={products}/>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {setError})(NewProductsContainer)