import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/actions";
import "./App.css";

class App extends React.Component {
  handleClick = () => {
    let adderTest = this.props.test;
    adderTest++;
    this.props.onGetTest(adderTest);
  };

  render() {
    return (
      <div className="App">
        <h1>{this.props.test}</h1>
        <button onClick={this.handleClick}>Click test</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { test } = state;
  return {
    test,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetTest: (value) => dispatch(actionCreators.onGetTest(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
