import {calculateTotalCost, addProductItem, removeProductItem} from './../components/cart/CartPage/cartHelper'
import {updateAddedProducts as updateLocalStorage} from './../localStorage'

const initialState = {
  addedProducts: [],
  totalCostWithDiscount: 0,
  totalCost: 0,
  isCartInfoBoxOpen: false,
  isOrderSended: false,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS': 
      return {...state, addedProducts: action.addedProducts}
    case 'SET_TOTAL_COST': 
      return {...state, totalCost: action.totalCost}
    case 'SET_IS_CART_INFO_BOX_OPEN': 
      return {...state, isCartInfoBoxOpen: action.isOpen}
    case 'SET_IS_ORDER_SENDED': 
      return {...state, isOrderSended: action.isSended}
    default: return state
  }
}

export const setProducts = (addedProducts) => ({type: 'SET_PRODUCTS', addedProducts})
export const setTotalCost = (totalCost) => ({type: 'SET_TOTAL_COST', totalCost})
export const setIsCartInfoBoxOpen = (isOpen) => ({type: 'SET_IS_CART_INFO_BOX_OPEN', isOpen})
export const setIsOrderSended = (isSended) => ({type: 'SET_IS_ORDER_SENDED', isSended})

export const addProductsToCart = (products) => (dispatch) => {
  const totalCost = calculateTotalCost(products)
  dispatch(setProducts(products))
  dispatch(setTotalCost(totalCost))
}

export const addNewProductToCart = (newProductItem) => (dispatch, getState) => {
  const addedProducts = getState().cartReducer.addedProducts
  const addedProductsUpdated = addProductItem(addedProducts, newProductItem)
  const totalCost = calculateTotalCost(addedProductsUpdated)
  dispatch(setProducts(addedProductsUpdated))
  dispatch(setTotalCost(totalCost))
  updateLocalStorage(addedProductsUpdated)
}

export const removeProductFromCart = (productItem) => (dispatch, getState) => {
  const addedProducts = getState().cartReducer.addedProducts
  const addedProductsUpdated = removeProductItem(addedProducts, productItem)
  const totalCost = calculateTotalCost(addedProductsUpdated)
  dispatch(setProducts(addedProductsUpdated))
  dispatch(setTotalCost(totalCost))
  updateLocalStorage(addedProductsUpdated)
}

export const clearCart = () => (dispatch) => {
  dispatch(setProducts([]))
  dispatch(setTotalCost(0))
}

export default cartReducer