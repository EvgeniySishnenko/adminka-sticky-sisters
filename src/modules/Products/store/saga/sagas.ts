import { spawn, takeEvery, call, put } from "redux-saga/effects"
import {
  productsListSuccess,
  productsListFailure,
  setTotalCountProducts,
} from "../actions/products.actions"
import { ProductsActions } from "../actions/products.actions"

import { fetchData } from "../api"
// worker
function* workerGetItemsProducts() {}
function* workerProductsList(action: any) {
  // todo any
  try {
    const data = yield call(fetchData, "", {
      count: 30,
      page: action.payload.num,
    })
    console.log(data)
    if (data) {
      yield put(productsListSuccess(data))
    } else {
      yield put(productsListFailure(data.error))
    }
  } catch (e) {
    yield put(
      productsListFailure(
        "Ошибка на сервере, попробуйте перезагрузить страницу"
      )
    )
  }
}
function* workerGetTotalCountProducts() {
  try {
    const count = yield call(fetchData, "get_count/", "")
    yield put(setTotalCountProducts(count))
  } catch (e) {
    console.log(e)
  }
}
// watcher
function* watchProductsList() {
  yield takeEvery(ProductsActions.PRODUCTS_LIST_REQUEST, workerProductsList)
}
function* watchGetTotalCountProducts() {
  yield takeEvery(
    ProductsActions.GET_COUNT_TOTAL_PRODUCTS,
    workerGetTotalCountProducts
  )
}

export default function* productsSaga() {
  yield spawn(watchProductsList)
  yield spawn(watchGetTotalCountProducts)
}
