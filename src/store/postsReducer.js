import * as actionTypes from "../store/actions/actionTypes";

const initialState = {
  test: 2,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_GET_TEST:
      return {
        ...state,
        test: action.payload,
      };
      case actionTypes.ON_GET_POSTS:
      return {
        ...state,
        test: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
