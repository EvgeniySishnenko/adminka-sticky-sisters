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
export interface IProjectState {
  list: IList[]
  totalProducts: number | null
  error: string | null
  loading: boolean
  totalCount: ReactText | null
  paginationCount: ReactText | null
}

export interface IItem {
  item: item
}
export interface IList {
  list: item[]
}
