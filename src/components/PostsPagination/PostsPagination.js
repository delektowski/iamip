import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import * as actionCreators from "../../store/actions/actions";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    marginBottom: "1rem",
  },
});

const PostsPagination = ({ onSetPage, pagesAmount }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h5" component="h1">
        <strong>IamIP</strong> - recruitment task
      </Typography>
      <Pagination
        count={pagesAmount}
        color="primary"
        onChange={(e, setPage) => onSetPage(setPage)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { page, pagesAmount } = state;

  return {
    page,
    pagesAmount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSetPage: (setPage) => dispatch(actionCreators.onSetPage(setPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPagination);
