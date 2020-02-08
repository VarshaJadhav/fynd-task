import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers'
import Middlewares from './middleware'

export const Store = createStore(
  RootReducer,
  applyMiddleware(...Middlewares)
)

export const InitialRootState = {
  ...Store.getState()
}
