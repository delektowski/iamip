import React, { useEffect, useState, useCallback } from "react";
import * as actionCreators from "../../../../../store/actions/actions";
import { connect } from "react-redux";
import { addCommentToPost, getTimeStamp } from "../../../../../lib/helpers";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    margin: ".5rem 0",
    width: "100%",
  },
  button: {
    marginTop: "1rem",
  },
});

const CommentForm = ({ posts, postId, onAddComment, postComments }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [isAddComment, setIsAddComment] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    if (target.name === "name") {
      setName(target.value);
    }
    if (target.name === "email") {
      setEmail(target.value);
    }
    if (target.name === "body") {
      setBody(target.value);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setBody("");
  };

  const handleAddCommentToPost = (comment) => {
    onAddComment(addCommentToPost(posts, postId, comment));
  };

  const setComment = (form) => {
    return {
      postId,
      id: `${getTimeStamp()}user`,
      name: form.name.value,
      email: form.email.value,
      body: form.body.value,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    handleAddCommentToPost(setComment(form));
    clearForm();
  };

  const isAddCommentPossible = useCallback(() => {
    const regex = /user/;
    return (
      postComments.filter((comment) => {
        return regex.test(comment.id);
      }).length > 0
    );
  }, [postComments]);

  useEffect(() => {
    setIsAddComment(isAddCommentPossible());
  }, [postComments, isAddCommentPossible]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label="Name: "
          name="name"
          disabled={isAddComment}
          value={name}
          onChange={handleInputChange}
          required={true}
          type="text"
          variant="outlined"
        />

        <TextField
          className={classes.textField}
          label="Email: "
          name="email"
          disabled={isAddComment}
          value={email}
          onChange={handleInputChange}
          required={false}
          type="email"
          variant="outlined"
        />

        <TextField
          className={classes.textField}
          label="Body: "
          name="body"
          placeholder="Twój komentarz"
          disabled={isAddComment}
          value={body}
          onChange={handleInputChange}
          required={true}
          multiline
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          disabled={isAddComment}
          className={classes.button}
        >
          Dodaj komentarz
        </Button>
        {isAddComment && (
          <Typography variant="overline" component="p" color={"secondary"}>
            You can add only 1 comment.
          </Typography>
        )}
      </form>
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
  onAddComment: (posts) => dispatch(actionCreators.onAddComment(posts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
