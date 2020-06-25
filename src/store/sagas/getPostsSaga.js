import { put } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {fetchData} from "../../lib/helpers";

export function* getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const posts = yield fetchData(url)
  yield put({ type: actionTypes.ON_FETCH_POSTS, payload: posts });
}
