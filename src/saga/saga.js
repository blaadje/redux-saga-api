import { put, fork, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function getDatas (name, password) {
  const dt = {
    headers: {
      Content: "application/json"
    },
    data: {
      id: "0b7e0854-66ae-42ae-a0df-fcd3dee193e8",
      type: "session"
    },
    type: "session",
    meta: {
      email: name,
      password: password
    }
  };
  const url = 'https://api.loop.wisembly.org/signin'
  return axios.post(url, dt).then((response) => {
    return response
  }).catch((error) => {
    return error
  })
}

function* callGetDatas ({ name, password, resolve, reject }) {
  const result = yield call(getDatas, name, password)
  console.log(result)
  if (result.status === 200) {
    yield put({type: 'GETTING_DATAS', result})
    yield call(resolve)
  } else {
    yield call(reject, {error: 'erreur'})
  }
}

function* watchDatasSaga () {
  yield takeEvery('SUBMITING_DATAS', callGetDatas)
}

export default function* root() {
  yield [
    fork(watchDatasSaga)
  ]
}
