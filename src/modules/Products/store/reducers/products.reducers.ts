import { productsState } from "@root/modules/Products/models/consts/products.state"
import { IProjectState } from "@root/modules/Products/models/interfaces/products.props"
import { ProductsActions } from "@root/modules/Products/models/interfaces/products-actions.types"
import { ProductsActionTypes } from "@root/modules/Products/models/interfaces/products-actions.types"
export function productsReducer(
  state: IProjectState = productsState,
  action: ProductsActionTypes
): IProjectState {
  switch (action.type) {
    case ProductsActions.PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductsActions.PRODUCTS_LIST_SUCCESS:
      const { list, paginationCount } = action.payload
      return {
        ...state,
        loading: false,
        error: null,
        list,
        paginationCount,
      }
    case ProductsActions.PRODUCTS_LIST_FAILURE:
      const { message } = action.payload
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      }
    case ProductsActions.SET_COUNT_TOTAL_PRODUCTS:
      const { totalCount } = action.payload
      return {
        ...state,
        totalCount,
      }
    case ProductsActions.SET_CATEGORIES_AND_TYPE:
      const { categories, type } = action.payload
      return {
        ...state,
        categories,
        type,
      }
    case ProductsActions.FILTER_CAT_ARRAY_ID:
      const { filterArrayCatId } = action.payload
      return {
        ...state,
        loading: true,
        filterArrayCatId,
      }
    case ProductsActions.SEARCH_PRODUCTS_REQUEST:
      const { searchValue } = action.payload
      return {
        ...state,
        loading: true,
        searchValue,
      }
    case ProductsActions.RESET_CAT_ARRAY_ID:
      return {
        ...state,
        filterArrayCatId: [],
      }
    case ProductsActions.RESET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: null,
      }
    case ProductsActions.UPDATE_LIST_PRODUCT:
      return {
        ...state,
        list: action.payload.list,
      }
    default:
      return state
  }
}
