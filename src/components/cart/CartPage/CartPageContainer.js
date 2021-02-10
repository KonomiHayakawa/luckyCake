import React from 'react'
import {connect} from 'react-redux'
import {addNewProductToCart, removeProductFromCart, clearCart} from './../../../redux/cartReducer'
import CartPage from './CartPage'
import {updateAddedProducts as updateLocalStorage} from './../../../localStorage'
import {sendOrder} from './../../../queries'
import {setError} from './../../../redux/errorsReducer'


const CartPageContainer = (props) => {
  const makeOrder = (deliveryData) => {
    try {
      sendOrder([...props.addedProducts, {...deliveryData}])
        .then(props.clearCart())
        .then(updateLocalStorage([]))
    } catch (error) {
      props.setError(error)
    }
  }

  return (
    <CartPage 
      addedProducts={props.addedProducts}
      totalCost={props.totalCost}
      addProductToCart={props.addNewProductToCart}
      removeFromCart={props.removeProductFromCart}
      makeOrder={makeOrder}
    />
  )
}

const mapStateToProps = (state) => ({
  totalCost: state.cartReducer.totalCost,
  addedProducts: state.cartReducer.addedProducts,
})

export default connect(mapStateToProps, 
  {
    addNewProductToCart, 
    removeProductFromCart, 
    clearCart,
    setError
  })(CartPageContainer)