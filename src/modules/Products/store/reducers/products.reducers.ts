import { productsState } from "../../models/consts/products.state"
import { IProjectState } from "../../models/interfaces/products.props"
import { ProductsActions } from "../actions/products.actions"
export function productsReducer(
  state: IProjectState = productsState,
  action: any
) {
  switch (action.type) {
    case ProductsActions.PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductsActions.PRODUCTS_LIST_SUCCESS:
      const { list, paginationCount } = action.payload.data
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
        error: message,
      }
    case ProductsActions.SET_COUNT_TOTAL_PRODUCTS:
      const { totalCount } = action.payload
      return {
        ...state,
        totalCount,
      }
    default:
      return state
  }
}
