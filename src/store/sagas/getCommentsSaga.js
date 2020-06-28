import { select, put } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getPostsState } from "../selectors";
import { addCommentsToPost, fetchData } from "../../lib/helpers";

export function* getCommentsSaga(action) {
  const postId = action.payload;
  const posts = yield select(getPostsState);
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

  const comments = yield fetchData(url);

  yield put({
    type: actionTypes.ON_FETCH_POST_COMMENTS,
    payload: addCommentsToPost(posts, comments),
  });
}
