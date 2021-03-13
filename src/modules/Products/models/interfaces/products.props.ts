import { ReactText } from "react"
type item = {
  products_id: string
  product_type_id: string
  title: string
  price: string
  discount_price: string
  seo_words: string
  seo_description: string
  seo_title: string
  mini_description: string
  image: string
  description: string
  mini_features: string
  features: string
  datetime: string
  new: string
  leader: string
  visible: string
  visible_sale: string
  type_tovara: string
  product_cat_id: string
  count_products: string
  count_all_pay: string
  count_pay_outof_site: string
}
export interface ICategories {
  cat_id: string
  cat_type: string
  categories: string
  cat_type_id: string
}
export interface IType {
  type_id: string
  type: string
}
export interface ICategoriesANDIType {
  type: IType
  categories: ICategories
}
export interface ISuccessDataProducts {
  list: IList[]
  paginationCount: ReactText
}
export interface IProjectState {
  list: IList[]
  totalProducts: number | null
  error: string | null
  loading: boolean
  totalCount: ReactText | null
  paginationCount: ReactText | null
  categories: ICategories[]
  type: IType[]
  filterArrayCatId: string[]
  searchValue: ReactText | null
}

export interface IItem {
  item: item
}
export interface IList {
  list: item[]
}
export interface IContentForFilterHeader {
  setActiveNum(num: number): void
}
