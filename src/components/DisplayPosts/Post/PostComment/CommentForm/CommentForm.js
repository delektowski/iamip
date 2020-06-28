import React, { useState } from "react";
import * as actionCreators from "../../../../../store/actions/actions";
import { connect } from "react-redux";
import { addCommentToPost, getTimeStamp } from "../../../../../lib/helpers";

const CommentForm = ({ posts, postId, onAddComment }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

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
      id: getTimeStamp(),
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
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
            name="body"
            value={body}
            onChange={handleInputChange}
            required={true}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
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
