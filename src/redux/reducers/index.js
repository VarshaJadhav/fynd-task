import { combineReducers } from 'redux'
import { InitialRootState } from '../store'
import ActionTypes from '../action-types-constants'
import imageListReducer from './image-list-reducer'

const AppReducer = combineReducers({
  imageListReducer
})

const RootReducer = (state, action) => {
  /** Reset store */
  if (action.type === ActionTypes.RESET_STORE) {
    return AppReducer(InitialRootState, action)
  }

  return AppReducer(state, action)
}

export default RootReducer
