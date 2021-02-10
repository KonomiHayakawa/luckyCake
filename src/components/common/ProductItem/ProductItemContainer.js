import React from 'react'
import {connect} from 'react-redux'
import ProductItem from './ProductItem'
import {addNewProductToCart} from './../../../redux/cartReducer'

const ProductItemContainer = (props) => {
  return (
    <ProductItem 
      itemData={props.itemData} 
      addProductToCart={props.addNewProductToCart}
    />
  )
}

const mapStateToProps = (state, ownProps) => ({
  addedProducts: state.cartReducer.addedProducts,
  itemData: ownProps.itemData,
})

export default connect(mapStateToProps, {addNewProductToCart})(ProductItemContainer)