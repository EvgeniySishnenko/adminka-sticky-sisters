import {
  spawn,
  takeEvery,
  call,
  put,
  debounce,
  takeLatest,
  retry,
} from "redux-saga/effects"
import {
  productsListSuccess,
  productsListFailure,
  setTotalCountProducts,
  setCategoriesAndType,
  productsListRequest,
  updateListProduct,
} from "@root/modules/Products/store/actions/products.actions"
import { IProjectState } from "@root/modules/Products/models/interfaces/products.props"

import { ProductsActions } from "@root/modules/Products/models/interfaces/products-actions.types"
import store from "@root/store"

import { fetchData } from "../api"
// worker

function* workerDeleteProduct(action: any) {
  const state: IProjectState = store.getState().products
  try {
    const data = yield call(fetchData, "delete_product/", {
      id: action.payload.id,
    })
    if (data === action.payload.id) {
      const list = state.list.filter(
        (item: any) => item.products_id !== action.payload.id
      )
      yield put(updateListProduct(list))
    }
  } catch (error) {
    productsListFailure("Ошибка на сервере, попробуйте перезагрузить страницу")
  }
}

function* workerSearchProducts(action: any) {
  const state: IProjectState = store.getState().products
  try {
    const retryCount = 3
    const retryDelay = 1 * 1000 // ms
    const data = yield retry(
      retryCount,
      retryDelay,
      fetchData,
      "search_products_catID/",
      {
        count: 30,
        page: 1,
        value: state.searchValue,
      }
    )
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
function* workerProductsList(action: any) {
  const state: IProjectState = store.getState().products
  const path =
    state.searchValue !== null
      ? "search_products_catID/"
      : "filter_products_catID/"
  const params = {
    count: 30,
    page: action.payload.num,
    value:
      state.searchValue !== null ? state.searchValue : state.filterArrayCatId,
  }
  try {
    const retryCount = 3
    const retryDelay = 1 * 1000 // ms
    const data = yield retry(retryCount, retryDelay, fetchData, path, params)
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
function* workerGetCategories() {
  try {
    const data = yield call(fetchData, "get_categories_and_type/", "")
    yield put(setCategoriesAndType(data))
  } catch (e) {
    console.log(e)
  }
}
function* handleChangeCatArrayIDSaga() {
  yield put(productsListRequest(1))
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
function* watchGetCategories() {
  yield takeEvery(ProductsActions.GET_CATEGORIES_AND_TYPE, workerGetCategories)
}
function* watchChangeCatArrayID() {
  yield debounce(
    500,
    ProductsActions.FILTER_CAT_ARRAY_ID,
    handleChangeCatArrayIDSaga
  )
}
function* watchUpdateListRequest() {
  yield takeLatest(ProductsActions.PRODUCTS_LIST_REQUEST, workerProductsList)
}
function* watchSearchProductsRequest() {
  yield takeEvery(ProductsActions.SEARCH_PRODUCTS_REQUEST, workerSearchProducts)
}
function* watchDeleteProduct() {
  yield takeEvery(ProductsActions.DELETE_PRODUCT, workerDeleteProduct)
}
export default function* productsSaga() {
  yield spawn(watchProductsList)
  yield spawn(watchGetTotalCountProducts)
  yield spawn(watchGetCategories)
  yield spawn(watchChangeCatArrayID)
  yield spawn(watchSearchProductsRequest)
  yield spawn(watchDeleteProduct)
}
