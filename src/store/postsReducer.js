import * as actionTypes from "../store/actions/actionTypes";

const initialState = {
  posts: [],
  postsIdToGetComments: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case actionTypes.ON_GET_POST_ID:
      return {
        ...state,
        postsIdToGetComments: action.payload,
      };

    default:
      return state;
  }
}; 

export default postsReducer;
