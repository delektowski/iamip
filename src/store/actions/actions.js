import * as actionTypes from "./actionTypes";

export const onGetPosts = () => {
  return {
    type: actionTypes.ON_GET_POSTS,
    payload: 'kokos'
  };
};
export const onGetComments = (postId) => {
  return {
    type: actionTypes.ON_GET_POST_ID,
    payload: postId
  };
};

export const onAddCommentsToPost = () => {
  return {
    type: actionTypes.ON_ADD_COMMENTS_TO_POST,
  };
};
