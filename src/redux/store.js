import { createStore, combineReducers} from 'redux'
import appReducer from './appReducer'
import cartReducer from './cartReducer'
import errorsReducer from './errorsReducer'

const reducers = combineReducers({
  appReducer,
  cartReducer,
  errorsReducer,
})

const store = createStore(reducers)

export default store