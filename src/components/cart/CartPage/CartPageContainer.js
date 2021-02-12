import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {addNewProductToCart, removeProductFromCart, clearCart, setIsOrderSended} from './../../../redux/cartReducer'
import CartPage from './CartPage'
import {updateAddedProducts as updateLocalStorage} from './../../../localStorage'
import {sendOrder} from './../../../queries'
import {setError} from './../../../redux/errorsReducer'

const CartPageContainer = (props) => {
  const history = useHistory() 

  useEffect(() => {
    return history.listen(() => { 
      props.setIsOrderSended(false)
    }) 
  }, [history, props]) 

  const makeOrder = (deliveryData) => {
    try {
      sendOrder([...props.addedProducts, {...deliveryData}])
        .then(props.setIsOrderSended(true))
        .then(props.clearCart())
        .then(updateLocalStorage([]))
    } catch (error) {
      props.setError(error)
    }
  }

  return (
    <CartPage 
      addedProducts={props.addedProducts}
      addProductToCart={props.addNewProductToCart}
      removeFromCart={props.removeProductFromCart}
      makeOrder={makeOrder}
      totalCost={props.totalCost}
      isOrderSended={props.isOrderSended}
    />
  )
}

const mapStateToProps = (state) => ({
  addedProducts: state.cartReducer.addedProducts,
  isOrderSended: state.cartReducer.isOrderSended,
  totalCost: state.cartReducer.totalCost,
})

export default connect(mapStateToProps, 
  { addNewProductToCart, 
    clearCart,
    removeProductFromCart, 
    setIsOrderSended,
    setError
  })(CartPageContainer)