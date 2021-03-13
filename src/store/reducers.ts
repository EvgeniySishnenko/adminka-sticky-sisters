import { combineReducers } from "redux"
import { productsReducer } from "../modules/Products/store/reducers/products.reducers"
import { IState } from "@root/store/interface/inrterfaces"
const rootReducer = combineReducers<IState>({
  products: productsReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
