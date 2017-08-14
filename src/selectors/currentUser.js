import {createSelector} from 'reselect';

export const currentUserSelector = createSelector(
  (state) => { return state.get('currentUser') },
  (currentUser) => { return currentUser }
)
