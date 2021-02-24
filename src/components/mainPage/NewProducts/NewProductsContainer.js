import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../../../queries'
import NewProducts from './NewProducts'
import {setError} from './../../../redux/errorsReducer'

const NewProductsContainer = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(null, 'isNew')
      .then((data) => setProducts(data))
      .catch(error => props.setError(error))
  },[props])

  return (
    <NewProducts 
      lastCartChange={props.lastCartChange}
      products={products}
    />
  )
}

const mapStateToProps = (state) => ({
  lastCartChange: state.cartReducer.lastCartChange,
})

export default connect(mapStateToProps, {setError})(NewProductsContainer)
