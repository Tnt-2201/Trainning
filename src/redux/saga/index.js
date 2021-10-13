/* eslint-disable prettier/prettier */
import {all, fork} from 'redux-saga/effects';
import watchUserSagas from './user';

export default function* rootSaga() {
  yield all([fork(watchUserSagas)]);
}
