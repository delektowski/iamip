import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PostComment from "./PostComment/PostComment";
import { connect } from "react-redux";

const useStyles = makeStyles({
  postContainer: {
    background: "whitesmoke",
    minHeight: "12rem",
    width: "20rem",
    padding: "2rem",
    margin: "2rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
  },
  buttonComments: {
    marginTop: "1rem",
  },
});

const Post = ({ posts = [] }) => {
  const classes = useStyles();

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
              <PostComment postComments={post.comments} postId={post.id}/>
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

export default connect(mapStateToProps, null)(Post);
