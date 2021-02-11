const initialState = {
  isCallBackPopUpOpen: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'TOGGLE_CALL_BACK_POP_UP': 
    return {...state, isCallBackPopUpOpen: !state.isCallBackPopUpOpen}
  default: return state
  }
}

export const toggleCallBackPopUp = () => ({type: 'TOGGLE_CALL_BACK_POP_UP'})

export default appReducer