export const addCommentsToPost = (posts, comments) => {
  const postId = comments[0].postId;

  return posts.map((post) => {
    if (post.id === postId) {
      post.comments = comments;
    }
    return post;
  });
};

export const addCommentToPost = (posts, postId, comment) => {
  return posts.map((post) => {
    if (post.id === postId) {
      post.comments = [...post.comments, comment];
    }
    return post;
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
