import { ReactText } from "react"
export enum ProductsActions {
  PRODUCTS_LIST_REQUEST = "PRODUCTS_LIST_REQUEST",
  PRODUCTS_LIST_FAILURE = "PRODUCTS_LIST_FAILURE",
  PRODUCTS_LIST_SUCCESS = "PRODUCTS_LIST_SUCCESS",

  GET_COUNT_TOTAL_PRODUCTS = "GET_COUNT_TOTAL_PRODUCTS",
  SET_COUNT_TOTAL_PRODUCTS = "SET_COUNT_TOTAL_PRODUCTS",
}
export const productsListRequest = (num = 1) => ({
  type: ProductsActions.PRODUCTS_LIST_REQUEST,
  payload: { num },
})
export const productsListSuccess = (data: any) => ({
  // todo any
  type: ProductsActions.PRODUCTS_LIST_SUCCESS,
  payload: { data },
})
export const productsListFailure = (message: string) => ({
  type: ProductsActions.PRODUCTS_LIST_FAILURE,
  payload: { message },
})
export const getCountTotalProduct = () => ({
  type: ProductsActions.GET_COUNT_TOTAL_PRODUCTS,
})
export const setTotalCountProducts = (totalCount: ReactText) => ({
  type: ProductsActions.SET_COUNT_TOTAL_PRODUCTS,
  payload: { totalCount },
})
