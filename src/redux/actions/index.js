/* eslint-disable prettier/prettier */
export default {
  REGISTER_ACCOUNT: 'REGISTER_ACCOUNT',
  LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
  TOKEN_USER: 'TOKEN_USER',
};
export function getActionSuccess(action) {
  return action + '_SUCCESS';
}

export function getActionFail(action) {
  return action + '_FAIL';
}
export function getActionUnmount(action) {
  return action + '_UNMOUNT';
}
