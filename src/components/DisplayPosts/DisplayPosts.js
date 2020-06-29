import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as actionCreators from "../../store/actions/actions";
import { connect } from "react-redux";
import Post from "./Post/Post";
import PostsPagination from "../PostsPagination/PostsPagination";
import {
  countPagesAmount,
  isPostAmountFitsPaginationOffset,
} from "../../lib/helpers";

const useStyles = makeStyles({
  postsContainer: {
    margin: "4rem auto",
    width: "98vw",
    background: "white",
    display: "flex",
    flexDirection: "columns",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  paginationContainer: {
    position: "fixed",
    top: "0",
    display: "flex",
    justifyContent: "center",
    background: "white",
    width: "100%",
    margin: "0 auto",
    padding: "1rem 0",
    zIndex: 100,
  },
});

const DisplayPosts = ({
  posts,
  onGetPosts,
  onSetPagesAmount,
  pagesAmount,
  page,
}) => {
  const classes = useStyles();

  useEffect(() => {
    onGetPosts();
  }, [onGetPosts]);

  useEffect(() => {
    onSetPagesAmount(countPagesAmount(posts));
  }, [posts, onSetPagesAmount]);

  const setPostAmountByPagination = () => {
    return posts.reduce((accumulator, currentValue) => {
      if (isPostAmountFitsPaginationOffset(currentValue.id, page, pagesAmount)) {
        return [...accumulator, currentValue];
      } else {
        return accumulator;
      }
    }, []);
  };

  const displayEachPost = () => {
    return setPostAmountByPagination().map((post) => {
      return (
        <Post
          key={post.id}
          postId={post.id}
          postTitle={post.title}
          postBody={post.body}
          postComments={post.comments}
        />
      );
    });
  };

  return (
    <>
      <section className={classes.paginationContainer}>
        <PostsPagination pagesAmount={pagesAmount} />
      </section>
      <main className={classes.postsContainer}>{displayEachPost()}</main>
    </>
  );
};

const mapStateToProps = (state) => {
  const { posts, pagesAmount, page } = state;

  return {
    posts,
    pagesAmount,
    page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetPosts: () => dispatch(actionCreators.onGetPosts()),
  onSetPagesAmount: (pagesAmount) =>
    dispatch(actionCreators.onSetPagesAmount(pagesAmount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPosts);
