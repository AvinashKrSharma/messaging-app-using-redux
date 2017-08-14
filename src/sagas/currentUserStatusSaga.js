import { UPDATE_STATUS } from './../actions';
import { currentUserSelector } from './../selectors';
import { takeLatest, call, select } from 'redux-saga/effects';

export function* putUserStatus({status}){
  const currentUser = yield select(currentUserSelector);
  const id = currentUser.get('id');
  yield call(() => { return fetch(`/status/${id}/${status}`) });
}

export function* currentUserStatusSaga(){
  yield takeLatest(UPDATE_STATUS, putUserStatus);
}
