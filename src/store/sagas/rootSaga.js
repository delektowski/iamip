import { all, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getPosts } from "./getPostsSaga";
import { getCommentsSaga } from "./getCommentsSaga";

export function* watchFetchSagas() {
  yield takeLatest(actionTypes.ON_GET_POSTS, getPosts);
  yield takeEvery(actionTypes.ON_GET_POST_COMMENTS, getCommentsSaga);
}

export function* rootSaga() {                   
  yield all([watchFetchSagas()]);
}
