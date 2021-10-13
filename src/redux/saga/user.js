/* eslint-disable prettier/prettier */

import {put, takeLatest} from '@redux-saga/core/effects';
//import queryString from 'query-string';
import authAxios from '../../axios/axiosInterceptor';
import Actions, {
  getActionFail,
  getActionSuccess,
  getActionUnmount,
} from '../actions';

function* registerAccount(actions) {
  try {
    const res = yield authAxios.post(
      '/signupUser',
      actions.body,
      actions.params,
    );

    yield put({
      type: getActionUnmount(Actions.REGISTER_ACCOUNT),
    });

    yield put({
      type: getActionSuccess(Actions.REGISTER_ACCOUNT),
      data: res.token,
      error: res.error,
    });
  } catch (error) {
    yield put({
      type: getActionFail(Actions.REGISTER_ACCOUNT),
      error: error,
    });
  }
}

function* loginAccount(actions) {
  try {
    const res = yield authAxios.post(
      '/signinUser',
      actions.body,
      actions.params,
    );
    yield put({
      type: getActionSuccess(Actions.LOGIN_ACCOUNT),
      data: res.token,
      error: res.error,
    });

    yield put({
      type: getActionUnmount(Actions.LOGIN_ACCOUNT),
    });
  } catch (error) {
    yield put({
      type: getActionFail(Actions.LOGIN_ACCOUNT),
      error: error,
    });
  }
}
export default function* watchUserSagas() {
  yield takeLatest(Actions.REGISTER_ACCOUNT, registerAccount);
  yield takeLatest(Actions.LOGIN_ACCOUNT, loginAccount);
}
