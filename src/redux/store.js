import { createStore, combineReducers,  applyMiddleware, compose} from 'redux'
import appReducer from './appReducer'
import cartReducer from './cartReducer'
import errorsReducer from './errorsReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  appReducer,
  cartReducer,
  errorsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store