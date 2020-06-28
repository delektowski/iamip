import * as actionTypes from "./actionTypes";

export const onGetPosts = () => {
  return {
    type: actionTypes.ON_GET_POSTS,
  };
};

export const onGetComments = (postId) => {
  return {
    type: actionTypes.ON_GET_POST_COMMENTS,
    payload: postId,
  };
};

export const onAddComment = (posts) => {
  return {
    type: actionTypes.ON_ADD_POST_COMMENT,
    payload: posts,
  };
};
