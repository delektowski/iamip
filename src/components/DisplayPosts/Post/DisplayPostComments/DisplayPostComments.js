import React, { useState } from "react";
import * as actionCreators from "../../../../store/actions/actions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ShowHideCommentsBtn from "./ShowHideCommentsBtn/ShowHideCommentsBtn";
import CommentForm from "./CommentForm/CommentForm";
import PostComment from "./PostComment/PostComment";

const useStyles = makeStyles({
  commentsContainer: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  commentContainer: {
    boxSizing: "border-box",
    width: "100%",
    boxShadow: "2px 2px 12px rgba(128, 128, 128, 0.37) inset",
    borderRadius: "6px",
    padding: ".6rem",
    margin: "1rem auto",
  },
});

const DisplayPostComments = ({
  postComments,
  postId,
  onGetComments,
  setIsProgressSpinner,
  posts,
  onDeleteComment,
}) => {
  const classes = useStyles();

  const [isShowComments, setIsShowComments] = useState(false);

  const getComments = () => {
    setIsProgressSpinner(true);
    onGetComments(postId);
  };

  const displayComments = () => {
    return postComments.map((comment) => {
      return (
        <PostComment
          key={comment.id}
          commentId={comment.id}
          commentName={comment.name}
          commentEmail={comment.email}
          commentBody={comment.body}
          posts={posts}
          postId={postId}
          onDeleteComment={onDeleteComment}
        />
      );
    });
  };

  const isShowContent = () => {
    return postComments && isShowComments;
  };
  return (
    <div className={classes.commentsContainer}>
      <ShowHideCommentsBtn
        postComments={postComments}
        getComments={getComments}
        setIsShowComments={setIsShowComments}
        isShowComments={isShowComments}
      />
      {isShowContent() && displayComments()}
      {isShowContent() && (
        <CommentForm postId={postId} postComments={postComments} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { posts } = state;
  return {
    posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetComments: (postId) => dispatch(actionCreators.onGetComments(postId)),
  onDeleteComment: (posts) => dispatch(actionCreators.onDeleteComment(posts)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPostComments);
