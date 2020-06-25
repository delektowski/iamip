import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as actionCreators from "../../store/actions/actions";
import { connect } from "react-redux";
import Post from "./Post/Post";

const useStyles = makeStyles({
  postsContainer: {
    margin: "0 auto",
    width: "98vw",
    background: "white",
    display: "flex",
    flexDirection: "columns",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

const DisplayPosts = ({ posts, onGetPosts }) => {
  const classes = useStyles();

  useEffect(() => {
    onGetPosts();
  }, [onGetPosts]);

  return (
    <main className={classes.postsContainer}>
      <Post posts={posts} />
    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPosts);
