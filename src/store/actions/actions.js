import * as actionTypes from "./actionTypes";

export const onGetPosts = () => {
  return {
    type: actionTypes.ON_REQUEST_POSTS,
  };
};

export const onGetComments = (postId) => {
  return {
    type: actionTypes.ON_REQUEST_POST_COMMENTS,
    payload: postId,
  };
};

export const onAddComment = (posts) => {
  return {
    type: actionTypes.ON_ADD_POST_COMMENT,
    payload: posts,
  };
};

export const onSetPagesAmount = (pagesAmount) => {
  return {
    type: actionTypes.ON_SET_PAGES_AMOUNT,
    payload: pagesAmount,
  };
};

export const onSetPage = (setPage) => {
  return {
    type: actionTypes.ON_SET_PAGE,
    payload: setPage,
  };
};
