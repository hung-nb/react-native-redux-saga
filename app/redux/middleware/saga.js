import { put, takeLatest, all } from 'redux-saga/effects'
import { loginSuccess } from 'app/redux/actions'

/** Async function */
function* loginFacebook() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json(), )

  // After response arrived, action LOGIN_SUCCESS must be dispatched
  yield put(loginSuccess(json))
}

/** Tell SAGA to wait for action */
function* actionWatcher() {

  // Wait for action LOGIN to get dispatched
  // Once LOGIN was dispatched, call loginFacebook function
  yield takeLatest('LOGIN', loginFacebook)
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ])
}
