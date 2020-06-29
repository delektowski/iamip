import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  commentContainer: {
    boxSizing: "border-box",
    width: "100%",
    boxShadow: "2px 2px 12px rgba(128, 128, 128, 0.37) inset",
    borderRadius: "6px",
    padding: ".6rem",
    margin: "1rem auto",
  },
});

const PostComment = ({ commentId, commentName, commentEmail, commentBody }) => {
  const classes = useStyles();

  return (
    <section key={commentId} className={classes.commentContainer}>
      <p>NAME: {commentName}</p>
      <p>EMAIL: {commentEmail}</p>
      <Typography variant="body2" component="p">
        COMMENT: {commentBody}
      </Typography>
    </section>
  );
};

export default PostComment;
