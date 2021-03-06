import {calculateTotalCost, addProductItem, removeProductItem} from './../components/cart/CartPage/cartHelper'
import {updateAddedProducts as updateLocalStorage} from './../localStorage'

const initialState = {
  addedProducts: [],
  totalCost: 0,
  totalCostWithoutDiscount: 0,
  isCartInfoBoxOpen: false,
  isOrderSended: false,
  lastCartChange: null,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS': 
      return {...state, addedProducts: action.addedProducts}
    case 'SET_TOTAL_COST': 
      return {...state, totalCost: action.totalCost}
    case 'SET_TOTAL_COST_WITHOUT_DISCOUNT': 
      return {...state, totalCostWithoutDiscount: action.costWithoutDiscount}
    case 'SET_IS_CART_INFO_BOX_OPEN': 
      return {...state, isCartInfoBoxOpen: action.isOpen}
    case 'SET_IS_ORDER_SENDED': 
      return {...state, isOrderSended: action.isSended}
    case 'SET_LAST_CART_CHANGE': 
      return {...state, lastCartChange: action.product}
    default: return state
  }
}

export const setProducts = (addedProducts) => ({type: 'SET_PRODUCTS', addedProducts})
export const setTotalCost = (totalCost) => ({type: 'SET_TOTAL_COST', totalCost})
export const setTotalCostWithoutDiscount = (costWithoutDiscount) => ({type: 'SET_TOTAL_COST_WITHOUT_DISCOUNT', costWithoutDiscount})
export const setIsCartInfoBoxOpen = (isOpen) => ({type: 'SET_IS_CART_INFO_BOX_OPEN', isOpen})
export const setIsOrderSended = (isSended) => ({type: 'SET_IS_ORDER_SENDED', isSended})
export const setLastCartChange = (product) => ({type: 'SET_LAST_CART_CHANGE', product})

export const addProductsToCart = (products) => (dispatch) => {
  const costData = calculateTotalCost(products)
  dispatch(setProducts(products))
  dispatch(setTotalCost(costData.totalCost))
  dispatch(setTotalCostWithoutDiscount(costData.totalCostWithoutDiscount))
}

export const addNewProductToCart = (newProductItem) => (dispatch, getState) => {
  const addedProducts = getState().cartReducer.addedProducts
  const addedProductsUpdated = addProductItem(addedProducts, newProductItem)
  const costData = calculateTotalCost(addedProductsUpdated)
  dispatch(setLastCartChange(newProductItem))
  setTimeout(() => dispatch(setLastCartChange(null)), 3000)
  dispatch(setProducts(addedProductsUpdated))
  dispatch(setTotalCost(costData.totalCost))
  dispatch(setTotalCostWithoutDiscount(costData.totalCostWithoutDiscount))
  updateLocalStorage(addedProductsUpdated)
}

export const removeProductFromCart = (productItem) => (dispatch, getState) => {
  const addedProducts = getState().cartReducer.addedProducts
  const addedProductsUpdated = removeProductItem(addedProducts, productItem)
  const costData = calculateTotalCost(addedProductsUpdated)
  dispatch(setProducts(addedProductsUpdated))
  dispatch(setTotalCost(costData.totalCost))
  dispatch(setTotalCostWithoutDiscount(costData.totalCostWithoutDiscount))
  updateLocalStorage(addedProductsUpdated)
}

export const clearCart = () => (dispatch) => {
  dispatch(setProducts([]))
  dispatch(setTotalCost(0))
  dispatch(setTotalCostWithoutDiscount(0))
}

export default cartReducer
