import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import * as actionCreators from "../../../../store/actions/actions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  commentsContainer: {
    margin: "0 auto",
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

const PostComment = ({ postComments }) => {
  const classes = useStyles();

  const [comments, setComments] = useState(null);
  useEffect(() => {
    setComments(postComments);
  }, [postComments]);

  const displayComments = () => {
    return comments.map((comment) => {
      return (
        <section key={comment.id} className={classes.commentContainer}>
          <p>NAME: {comment.name}</p>
          <p>EMAIL: {comment.email}</p>
          <Typography variant="body2" component="p">
            COMMENT: {comment.body}
          </Typography>
        </section>
      );
    });
  };
  return (
    <div className={classes.commentsContainer}>
      {comments && displayComments()}
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
  onGetPosts: () => dispatch(actionCreators.onGetPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
