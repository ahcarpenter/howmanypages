/*
 * RepoListItem Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_LOC,
  LOAD_LOC_SUCCESS,
  LOAD_LOC_ERROR,
  CHANGE_REPO_USER,
  CHANGE_REPO
} from './constants';

export function loadLoc() {
  return {
    type: LOAD_LOC
  };
}

export function changeRepoUser(user) {
  return {
    type: CHANGE_REPO_USER,
    user
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function locLoaded(loc, actionCableResponse) {
  return {
    type: LOAD_LOC_SUCCESS,
    loc,
    actionCableResponse
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function locLoadingError(error) {
  return {
    type: LOAD_LOC_ERROR,
    error
  };
}

export function changeRepo(repo) {
  return {
    type: CHANGE_REPO,
    repo
  };
}
