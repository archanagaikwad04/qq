import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_USER_LIST, RENDER_USER_LIST, GET_SEARCH_LIST, GET_USER_PROFILE, USER_PROFILE_LOADED } from '../actions';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function* fetchUsersProfile() {
  const endpoint = 'https://api.github.com/users';
  const response = yield call(() => axios.get(endpoint).then(result => result.data));
  yield put({ type: USER_PROFILE_LOADED, user: response });
}

function* fetchUsers() {
  const endpoint = 'https://api.github.com/users';
  const response = yield call(() => axios.get(endpoint).then(result => result.data));
  yield put({ type: RENDER_USER_LIST, userList: response });
}

function* fetchUsers2(action: any) {
  console.log(action);
  console.log(GET_SEARCH_LIST);
  const endpoint = 'https://api.github.com/search/users?q=Pure';
  const response = yield call(() => axios.get(endpoint).then(result => result.data));
  console.log(response);
  yield put({ type: RENDER_USER_LIST, userList: response });
}

export function* loadUserList() {
  yield takeEvery(LOAD_USER_LIST, fetchUsers);
}
export function* searchUser() {
  yield takeEvery(GET_SEARCH_LIST, fetchUsers2);
}
export function* getUsersProfile() {
  yield takeEvery(GET_USER_PROFILE, fetchUsersProfile);
}
export default function* rootSaga() {
  yield all([loadUserList(), searchUser(), getUsersProfile()]);
}
