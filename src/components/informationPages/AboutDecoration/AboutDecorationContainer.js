import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import AboutDecoration from './AboutDecoration'
import {getPersonalDesigns} from './../../../queries'
import {setError} from './../../../redux/errorsReducer'

const AboutDecorationContainer = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getPersonalDesigns()
      .then(response => setProducts(response))
      .catch(error => props.setError(error))
  }, [])

  return (
    <AboutDecoration
      products={products}
    />
  )
}

export default connect(null, {setError})(AboutDecorationContainer)