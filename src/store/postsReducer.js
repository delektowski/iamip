import * as actionTypes from "../store/actions/actionTypes";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_GET_POSTS:
      return {
        ...state,

      };
    case actionTypes.ON_FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
