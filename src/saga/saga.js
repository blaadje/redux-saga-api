import { put, fork, call, takeLatest } from 'redux-saga/effects'
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

function* callGetDatas ({ name, password }) {
  const result = yield call(getDatas, name, password)
  if (result.status === 200) {
    yield put({type: 'GETTING_DATAS', result})
    return result
  } else {
    console.error('test')
    return result
  }
}

export default function* root() {
  yield [
    takeLatest('SUBMITING_DATAS', callGetDatas)
  ]
}
