import React, { useEffect, useState, useCallback } from "react";
import * as actionCreators from "../../../../../store/actions/actions";
import { connect } from "react-redux";
import { addCommentToPost, getTimeStamp } from "../../../../../lib/helpers";
import Typography from "@material-ui/core/Typography";

const CommentForm = ({ posts, postId, onAddComment, postComments }) => {
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
        <label>
          name:
          <input
            disabled={isAddComment}
            name="name"
            type="text"
            value={name}
            onChange={handleInputChange}
            required={true}
          />
        </label>
        <br />
        <label>
          email:
          <input
            disabled={isAddComment}
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          body:
          <textarea
            disabled={isAddComment}
            name="body"
            value={body}
            onChange={handleInputChange}
            required={true}
          />
        </label>
        <br />
        <button type="submit">Dodaj komentarz</button>
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
