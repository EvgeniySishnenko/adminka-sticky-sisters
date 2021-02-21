import { all } from "redux-saga/effects"

import productsSaga from "../modules/Products/store/saga/sagas"
export default function* rootSaga() {
  yield all([productsSaga()])
}
