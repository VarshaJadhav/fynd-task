import ActionTypes from "../action-types-constants";

const INITIAL_STATE = {
  imageList: []
}

export default function imageListReducer(state=INITIAL_STATE,action){
  switch(action.type){
    case ActionTypes.FETCH_IMAGE_LIST:
    return {
      ...state,
      imageList: action.payload.imageList
    }
    default:
    return state;
  }
}