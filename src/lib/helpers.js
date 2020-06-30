import { fromJS } from "immutable";

export const addCommentsToPost = (posts, comments) => {
  const postId = comments[0].postId;
  let postsCopy = fromJS(posts);
  let updatedPosts;
  for (let postCopy of postsCopy) {
    const postIdCopy = postCopy.getIn(["id"]);
    if (postIdCopy === postId) {
      const addedCommentsToPost = postCopy.set("comments", comments);

      updatedPosts = postsCopy
        .update(
          getIndexByKey(postsCopy, "id", postId),
          () => addedCommentsToPost
        )
        .toJS();
      break;
    }
  }
  return updatedPosts;
};

export const addCommentToPost = (posts, postId, comment) => {
  let postsCopy = fromJS(posts);
  let updatedPosts;
  for (let postCopy of postsCopy) {
    const postIdCopy = postCopy.getIn(["id"]);
    if (postIdCopy === postId) {
      const postCommentsCopy = postCopy.getIn(["comments"]);
      const addedComment = postCommentsCopy.push(comment);
      const postWithAddedComments = postCopy.set("comments", addedComment);

      updatedPosts = postsCopy
        .update(
          getIndexByKey(postsCopy, "id", postId),
          () => postWithAddedComments
        )
        .toJS();
      break;
    }
  }
  return updatedPosts;
};

export const deletePostComment = (posts, postId, commentId) => {
  let postsCopy = fromJS(posts);

  let updatedPosts;
  for (let postCopy of postsCopy) {
    const postIdCopy = postCopy.getIn(["id"]);
    if (postIdCopy === postId) {
      const postCommentsCopy = postCopy.getIn(["comments"]);
      const index = getIndexByKey(postCommentsCopy, "id", commentId);
      const commentsAfterDelete = postCommentsCopy.delete(index);
      const postWithoutDeletedComment = postCopy.set(
        "comments",
        commentsAfterDelete
      );
      updatedPosts = postsCopy
        .update(
          getIndexByKey(postsCopy, "id", postId),
          () => postWithoutDeletedComment
        )
        .toJS();
      break;
    }
  }
  return updatedPosts;
};

export const getIndexByKey = (list, key, idToCompare) => {
  return list.findIndex((item) => {
    return item.getIn([key]) === idToCompare;
  });
};

export const fetchData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

export const getTimeStamp = () => {
  return new Date().getTime();
};

export const countPagesAmount = (posts) => {
  return Math.ceil(posts.length / 10);
};

export const isPostAmountFitsPaginationOffset = (
  valueId,
  page,
  pagesAmount
) => {
  const postIdNumber = parseInt(valueId);
  const paginationOffset = page * pagesAmount;

  return (
    postIdNumber <= paginationOffset &&
    postIdNumber > paginationOffset - pagesAmount
  );
};
