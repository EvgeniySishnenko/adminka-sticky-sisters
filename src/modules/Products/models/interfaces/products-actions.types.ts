import {
  IList,
  IType,
  ICategories,
  IItem,
} from "@root/modules/Products/models/interfaces/products.props"
import { ReactText } from "react"

export enum ProductsActions {
  PRODUCTS_LIST_REQUEST = "PRODUCTS_LIST_REQUEST",
  PRODUCTS_LIST_FAILURE = "PRODUCTS_LIST_FAILURE",
  PRODUCTS_LIST_SUCCESS = "PRODUCTS_LIST_SUCCESS",

  GET_COUNT_TOTAL_PRODUCTS = "GET_COUNT_TOTAL_PRODUCTS",
  GET_CATEGORIES_AND_TYPE = "GET_CATEGORIES_AND_TYPE",

  SET_CATEGORIES_AND_TYPE = "SET_CATEGORIES_AND_TYPE",
  SET_COUNT_TOTAL_PRODUCTS = "SET_COUNT_TOTAL_PRODUCTS",

  FILTER_CAT_ARRAY_ID = "CHANGE_CAT_ARRAY_ID",
  RESET_CAT_ARRAY_ID = "RESET_CAT_ARRAY_ID",

  SEARCH_PRODUCTS_REQUEST = "SEARCH_PRODUCTS_REQUEST",
  RESET_SEARCH_VALUE = "RESET_SEARCH_VALUE",

  DELETE_PRODUCT = "DELETE_PRODUCT",
  UPDATE_LIST_PRODUCT = "UPDATE_LIST_PRODUCT",
}
interface ProductsListRequest {
  type: ProductsActions.PRODUCTS_LIST_REQUEST
  payload: {
    num: number
  }
}
interface ProductsListSuccess {
  type: ProductsActions.PRODUCTS_LIST_SUCCESS
  payload: {
    list: IList[]
    paginationCount: string
  }
}

interface ProductsListFailure {
  type: ProductsActions.PRODUCTS_LIST_FAILURE
  payload: {
    message: string
  }
}
interface GetCountTotalProduct {
  type: ProductsActions.GET_COUNT_TOTAL_PRODUCTS
}
interface SetTotalCountProducts {
  type: ProductsActions.SET_COUNT_TOTAL_PRODUCTS
  payload: {
    totalCount: number
  }
}
interface GetCategoriesAndType {
  type: ProductsActions.GET_CATEGORIES_AND_TYPE
}
interface SetCategoriesAndType {
  type: ProductsActions.SET_CATEGORIES_AND_TYPE
  payload: {
    type: IType[]
    categories: ICategories[]
  }
}

interface FilterCatArrayID {
  type: ProductsActions.FILTER_CAT_ARRAY_ID
  payload: {
    filterArrayCatId: string[]
  }
}
interface SearchProductsRequest {
  type: ProductsActions.SEARCH_PRODUCTS_REQUEST
  payload: {
    searchValue: ReactText
  }
}
interface ResetCatArrayID {
  type: ProductsActions.RESET_CAT_ARRAY_ID
}
interface ResetSearchValue {
  type: ProductsActions.RESET_SEARCH_VALUE
}
interface DeleteProduct {
  type: ProductsActions.DELETE_PRODUCT
  payload: {
    id: ReactText
  }
}
interface UpdateListProduct {
  type: ProductsActions.UPDATE_LIST_PRODUCT
  payload: {
    list: IList[]
  }
}
export type ProductsActionTypes =
  | ProductsListRequest
  | ProductsListSuccess
  | ProductsListFailure
  | GetCountTotalProduct
  | SetTotalCountProducts
  | GetCategoriesAndType
  | SetCategoriesAndType
  | FilterCatArrayID
  | SearchProductsRequest
  | ResetCatArrayID
  | ResetSearchValue
  | DeleteProduct
  | UpdateListProduct
