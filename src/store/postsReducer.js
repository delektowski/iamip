import * as actionTypes from "../store/actions/actionTypes";

const initialState = {
  posts: [],
  pagesAmount: 0,
  page: 1,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case actionTypes.ON_FETCH_POST_COMMENTS:
      return {
        ...state,
        posts: action.payload,
      };

    case actionTypes.ON_ADD_POST_COMMENT:
      return {
        ...state,
        posts: action.payload,
      };

    case actionTypes.ON_SET_PAGES_AMOUNT:
      return {
        ...state,
        pagesAmount: action.payload,
      };

    case actionTypes.ON_SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
