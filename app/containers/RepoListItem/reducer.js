/*
 * RepoListItemReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_LOC_SUCCESS,
  LOAD_LOC_ERROR,
  LOAD_LOC,
  CHANGE_REPO,
  CHANGE_REPO_USER
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loc: 0
});

function repoListItemReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LOC:
      return state
        .set('loading', true)
    case CHANGE_REPO_USER:
      // Delete prefixed '@' from the github username
      return state
        .set('user', action.user)
    case LOAD_LOC_SUCCESS:
      // Delete prefixed '@' from the github username
      return state
        .set('loc', action.loc)
        .set('loading', !action.actionCableResponse)
    case LOAD_LOC_ERROR:
      // Delete prefixed '@' from the github username
      return state
        .set('error', action.error)
        .set('loading', false)
    case CHANGE_REPO:
      return state
        .set('repo', action.repo)
    default:
      return state;
  }
}

export default repoListItemReducer;
