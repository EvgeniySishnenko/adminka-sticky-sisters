import { IProjectState } from "@root/modules/Products/models/interfaces/products.props"
export const productsState: IProjectState = {
  list: [],
  totalProducts: null,
  loading: false,
  error: null,
  totalCount: null,
  paginationCount: null,
  categories: [],
  type: [],
  filterArrayCatId: [],
  searchValue: null,
}
