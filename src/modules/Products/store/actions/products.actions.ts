import { ReactText } from "react"
import {
  ICategoriesANDIType,
  ISuccessDataProducts,
} from "@root/modules/Products/models/interfaces/products.props"
import { ProductsActions } from "@root/modules/Products/models/interfaces/products-actions.types"
import { IList } from "@root/modules/Products/models/interfaces/products.props"
export const productsListRequest = (num: number) => ({
  type: ProductsActions.PRODUCTS_LIST_REQUEST,
  payload: { num },
})
export const productsListSuccess = ({
  list,
  paginationCount,
}: ISuccessDataProducts) => ({
  type: ProductsActions.PRODUCTS_LIST_SUCCESS,
  payload: { list, paginationCount },
})
export const productsListFailure = (message: string) => ({
  type: ProductsActions.PRODUCTS_LIST_FAILURE,
  payload: { message },
})
export const getCountTotalProduct = () => ({
  type: ProductsActions.GET_COUNT_TOTAL_PRODUCTS,
})
export const setTotalCountProducts = (totalCount: string) => ({
  type: ProductsActions.SET_COUNT_TOTAL_PRODUCTS,
  payload: { totalCount },
})
export const getCategoriesAndType = () => ({
  type: ProductsActions.GET_CATEGORIES_AND_TYPE,
})
export const setCategoriesAndType = ({
  type,
  categories,
}: ICategoriesANDIType) => ({
  type: ProductsActions.SET_CATEGORIES_AND_TYPE,
  payload: { type, categories },
})

export const filterCatArrayID = (filterArrayCatId: string[]) => ({
  type: ProductsActions.FILTER_CAT_ARRAY_ID,
  payload: { filterArrayCatId },
})
export const searchProductsRequest = (searchValue: ReactText) => ({
  type: ProductsActions.SEARCH_PRODUCTS_REQUEST,
  payload: { searchValue },
})
export const resetCatArrayID = () => ({
  type: ProductsActions.RESET_CAT_ARRAY_ID,
})
export const resetSearchValue = () => ({
  type: ProductsActions.RESET_SEARCH_VALUE,
})
export const deleteProduct = (id: ReactText) => ({
  type: ProductsActions.DELETE_PRODUCT,
  payload: { id },
})
export const updateListProduct = (list: IList[]) => ({
  type: ProductsActions.UPDATE_LIST_PRODUCT,
  payload: { list },
})
