/*
 * RepoListItemConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_LOC = 'boilerplate/RepoListItem/LOAD_LOC';
export const CHANGE_REPO = 'boilerplate/RepoListItem/CHANGE_REPO';
export const CHANGE_REPO_USER = 'boilerplate/RepoListItem/SET_REPO_USER';
export const LOAD_LOC_SUCCESS = 'boilerplate/App/LOAD_LOC_SUCCESS';
export const LOAD_LOC_ERROR = 'boilerplate/App/LOAD_LOC_ERROR';
