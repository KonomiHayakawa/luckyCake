import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import AboutDecoration from './AboutDecoration'
import {getPersonalDesigns} from './../../../queries'
import {setError} from './../../../redux/errorsReducer'
import Spinner from '../../common/Spinner/Spinner'

const AboutDecorationContainer = (props) => {
  const [products, setProducts] = useState([])
  const [isContentLoaded, setIsContentLoaded] = useState(false)

  useEffect(() => {
    getPersonalDesigns()
      .then(response => setProducts(response))
      .then(() => setIsContentLoaded(true))
      .catch(error => props.setError(error))
  }, [])

  if(!isContentLoaded) return <Spinner />

  return (
    <AboutDecoration
      products={products}
    />
  )
}

export default connect(null, {setError})(AboutDecorationContainer)