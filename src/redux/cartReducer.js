const initialState = {
  addedGoods: [],
  totalCost: 0,
  totalCostWithDiscount: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_TO_CART': 
    return {...state, addedGoods: [...state.addedGoods, action.goodId]}
  default: return state
  }
}

export const addToCart = (goodId) => ({type: 'ADD_TO_CART', goodId})

export default cartReducer