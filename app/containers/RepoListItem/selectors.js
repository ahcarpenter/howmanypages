/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectRepoListItem = (state) => state.get('repoListItem')

const makeSelectLoc = () => createSelector(
  selectRepoListItem,
  (repoListItemState) => repoListItemState.get('loc')
);

const makeSelectRepoUser = () => createSelector(
  selectRepoListItem,
  (repoListItemState) => repoListItemState.get('user')
);

const makeSelectRepo = () => createSelector(
  selectRepoListItem,
  (repoListItemState) => repoListItemState.get('repo')
);

const makeSelectLoading = () => createSelector(
  selectRepoListItem,
  (repoListItemState) => repoListItemState.get('loading')
);

export {
  makeSelectLoc,
  makeSelectRepoUser,
  makeSelectRepo,
  makeSelectLoading
};
