import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as actionCreators from "../../store/actions/actions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  postsContainer: {
    margin: "0 auto",
    width: "98vw",
    background: "white",
    display: "flex",
    flexDirection: "columns",
    flexWrap: 'wrap',
    justifyContent: 'space-around',

  },
  postContainer: {
    background: "whitesmoke",
    height: "12rem",
    width: "20rem",
    padding: "2rem",
    margin: '2rem 0'
  },
});

const DisplayPosts = ({ posts, onGetPosts }) => {
  const classes = useStyles();

  useEffect(() => {
    onGetPosts();
  }, [onGetPosts]);

  const getPost = () => {
    return posts.map((post) => {
      return (
        <React.Fragment key={post.id}>
          <Paper elevation={1} className={classes.postContainer}>
            <Typography variant="overline" component="h2">
              <strong>title:</strong> {post.title}
            </Typography>
            <Typography variant='body2' component='p'><strong>Body:</strong> {post.body}</Typography>
            <Button variant="contained" color="primary">
              <Typography variant="button">show comments</Typography>
            </Button>
          </Paper>
        </React.Fragment>
      );
    });
  };

  return (
    <main className={classes.postsContainer}>
      {posts.length > 0 && getPost()}
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
