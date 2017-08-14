import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

export const userSelector = (id) => createSelector(
  (state) => { return state.get('userInfo') },
  (userInfo) => {
    const user = userInfo.find((user) => { return user.get('id') == id });
    return user ? user : fromJS({ name: "[...]", id, fetchStatus: "NOT_FETCHED" });
  }
)
