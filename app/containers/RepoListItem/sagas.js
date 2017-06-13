/**
 * Gets the repositories of the user from Github
 */
// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_LOC } from './constants';
import { locLoaded, locLoadingError } from './actions';

import request from 'utils/request';
import { makeSelectRepoUser, makeSelectRepo } from './selectors'

/**
 * Github repos request/response handler
 */
export function* getLoc() {
  // Select username from store
  const username = yield select(makeSelectRepoUser());
  const repo = yield select(makeSelectRepo());
  const requestURL = `${process.env.API_ROOT_URL}/${username}/${repo}`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL);
    if(res.repository) {
      yield put(locLoaded(res.repository.loc, false));
    }
  } catch (err) {
    yield put(locLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* apiData() {
  // debugger
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_LOC, getLoc);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  apiData
];
