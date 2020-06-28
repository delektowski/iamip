import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

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

const ShowHideCommentsBtn = ({
  getComments,
  postComments,
  setIsShowComments,
  isShowComments,
}) => {
  const classes = useStyles();

  const handleClick = (showComments) => {
    if (!postComments) {
      getComments();
    }
    setIsShowComments(showComments);
  };

  return (
    <>
      {isShowComments && postComments ? (
        <Button
          className={classes.buttonComments}
          variant="contained"
          color="secondary"
          onClick={() => handleClick(false)}
        >
          <Typography variant="button">ukryj komentarze</Typography>
        </Button>
      ) : (
        <Button
          className={classes.buttonComments}
          variant="contained"
          color="primary"
          onClick={() => handleClick(true)}
        >
          <Typography variant="button">pokaż komentarze</Typography>
        </Button>
      )}
    </>
  );
};

export default ShowHideCommentsBtn;
