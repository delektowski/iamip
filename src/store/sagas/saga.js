import { put, takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";


function* getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const posts = yield fetch(url)
    .then((response) => response.json())
    .then(data => data);
  yield put({ type: actionTypes.ON_FETCH_POSTS, payload: posts });
}

function* watchIncrementAsync() {
  yield takeEvery(actionTypes.ON_GET_POSTS, getPosts);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
