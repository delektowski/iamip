import { select, put } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getPostIdState, getPostsState } from "../selectors/selectors";
import {addCommentsToPost, fetchData} from "../../lib/helpers";



export function* getCommentsSaga() {
  const postId = yield select(getPostIdState);
  const posts = yield select(getPostsState);
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

  const comments = yield fetchData(url)

  yield put({
    type: actionTypes.ON_FETCH_POSTS,
    payload: addCommentsToPost(posts, comments),
  });
}
