import ImageList from "../constants/image-list-constant";
import ActionTypes from "./action-types-constants";

export const fetchImageList = () => dispatch => {
  return dispatch({
    type: ActionTypes.FETCH_IMAGE_LIST,
    imageList: ImageList
  })
}