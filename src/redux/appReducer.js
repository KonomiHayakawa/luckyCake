const initialState = {
  isCallBackPopUpOpen: false,
  isCartContentOpen: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'TOGGLE_CALL_BACK_POP_UP': 
    return {...state, isCallBackPopUpOpen: !state.isCallBackPopUpOpen}
  case 'TOGGLE_CART_CONTENT_OPEN': 
    return {...state, isCartContentOpen: !state.isCartContentOpen}
  default: return state
  }
}

export const toggleCallBackPopUp = () => ({type: 'TOGGLE_CALL_BACK_POP_UP'})
export const toggleCartContentOpen = () => ({type: 'TOGGLE_CART_CONTENT_OPEN'})

export default appReducer