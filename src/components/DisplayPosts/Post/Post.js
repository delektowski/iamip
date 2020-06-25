import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PostComment from "./PostComment/PostComment";
import * as actionCreators from "../../../store/actions/actions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  postContainer: {
    background: "whitesmoke",
    minHeight: "12rem",
    width: "20rem",
    padding: "2rem",
    margin: "2rem 0",
  },
});

const Post = ({ posts = [], onGetComments }) => {
  const classes = useStyles();

  const getComments = (postId) => {
    onGetComments(postId);
  };
  return (
    <>
      {posts.map((post) => {
        return (
          <section key={post.id}>
            <Paper elevation={1} className={classes.postContainer}>
              <Typography variant="overline" component="h2">
                <strong>title:</strong> {post.title}
              </Typography>
              <Typography variant="body2" component="p">
                <Typography variant="overline">
                  <strong>Body:</strong>
                </Typography>{" "}
                {post.body}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => getComments(post.id)}
              >
                <Typography variant="button">show comments</Typography>
              </Button>
              <PostComment postComments={post.comments} />
            </Paper>
          </section>
        );
      })}
    </>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
