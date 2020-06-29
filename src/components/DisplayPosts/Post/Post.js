import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostComment from "./PostComment/PostComment";
import { connect } from "react-redux";

const useStyles = makeStyles({
  postContainer: {
    background: "whitesmoke",
    minHeight: "20rem",
    width: "20rem",
    padding: "2rem",
    margin: "2rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
  },
  progressSpinnerContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem",
  },
  buttonComments: {
    marginTop: "1rem",
  },
});

const Post = ({ postId, postTitle, postBody, postComments }) => {
  const classes = useStyles();
  const [isProgressSpinner, setIsProgressSpinner] = useState(false);

  useEffect(() => {
    if (postComments) {
      setIsProgressSpinner(false);
    }
  }, [postComments]);

  return (
    <section key={postId}>
      <Paper elevation={1} className={classes.postContainer}>
        <Typography variant="overline" component="p">
          <strong>{postId}</strong>
        </Typography>
        <Typography variant="overline" component="h2">
          <strong>title:</strong> {postTitle}
        </Typography>
        <Typography variant="body2" component="p">
          <Typography variant="overline">
            <strong>Body:</strong>
          </Typography>{" "}
          {postBody}
        </Typography>
        <PostComment
          postComments={postComments}
          postId={postId}
          setIsProgressSpinner={setIsProgressSpinner}
        />
        <div className={classes.progressSpinnerContainer}>
          {isProgressSpinner && <CircularProgress />}
        </div>
      </Paper>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { posts } = state;

  return {
    posts,
  };
};

export default connect(mapStateToProps, null)(Post);
