import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import * as actionCreators from "../../store/actions/actions";
import { connect } from "react-redux";

const PostsPagination = ({ onSetPage, pagesAmount }) => {
  return (
    <div>
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
