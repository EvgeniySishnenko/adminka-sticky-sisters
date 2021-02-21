import { combineReducers } from "redux"
import { productsReducer } from "../modules/Products/store/reducers/products.reducers"
const rootReducer = combineReducers<any>({
  // todo any
  products: productsReducer,
})

export default rootReducer
