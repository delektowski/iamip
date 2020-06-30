import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { deletePostComment } from "../../../../../lib/helpers";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  commentContainer: {
    boxSizing: "border-box",
    width: "100%",
    boxShadow: "2px 2px 12px rgba(128, 128, 128, 0.37) inset",
    borderRadius: "6px",
    padding: ".6rem",
    margin: "1rem auto",
  },
  buttonContainer: {
    padding: "1rem 0",
    display: "flex",
    justifyContent: "center",
  },
});

const PostComment = ({
  commentId,
  commentName,
  commentEmail,
  commentBody,
  posts,
  onDeleteComment,
  postId,
}) => {
  const classes = useStyles();

  const handleDeleteComment = () => {
    onDeleteComment(deletePostComment(posts, postId, commentId));
  };
  return (
    <section key={commentId} className={classes.commentContainer}>
      <p>NAME: {commentName}</p>
      <p>EMAIL: {commentEmail}</p>
      <Typography variant="body2" component="p">
        COMMENT: {commentBody}
      </Typography>
      <div className={classes.buttonContainer}>
        <Button
          onClick={handleDeleteComment}
          variant="contained"
          color="secondary"
          size="small"
        >
          Usuń
        </Button>
      </div>
    </section>
  );
};

export default PostComment;
