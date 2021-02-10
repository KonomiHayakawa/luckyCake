import React from 'react'
import {connect} from 'react-redux'
import CartInfoArea from './CartInfoArea'
import {setIsCartInfoBoxOpen} from './../../../redux/cartReducer'

const CartInfoAreaContainer = (props) => {
  return (
    <CartInfoArea 
      isCartInfoBoxOpen={props.isCartInfoBoxOpen}
      setIsCartInfoBoxOpen={props.setIsCartInfoBoxOpen}
      totalCost={props.totalCost}
    />
  )
}

const mapStateToProps = (state) => ({
  totalCost: state.cartReducer.totalCost,
  isCartInfoBoxOpen: state.cartReducer.isCartInfoBoxOpen,
})

export default connect(mapStateToProps, {setIsCartInfoBoxOpen})(CartInfoAreaContainer)