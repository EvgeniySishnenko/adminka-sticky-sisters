import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  ReactText,
} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Row, Col, Button, Modal, Image } from "react-bootstrap/"
import EditCountProducts from "@root/modules/Products/EditCountProducts/EditCountProducts"
import SubHeader from "@root/components/SubHeader/SubHeader"
import FilterHeader from "@root/shared/FilterHeader/FilterHeader"
import PaginationContainer from "@root/shared/Pagination/Pagination"
import {
  productsListRequest,
  getCountTotalProduct,
  getCategoriesAndType,
  filterCatArrayID,
  deleteProduct,
} from "@root/modules/Products/store/actions/products.actions"
import { NavLink } from "react-router-dom"
import { Loader } from "@root/shared/Loader/Loader"
import { Message } from "@root/shared/Message/Message"
import { List } from "@root/modules/Products/Components/Products/List"
import { ModalContext } from "@root/modules/modalContext/modal-context"
import { ContentForFilterHeader } from "@root/modules/Products/Components/Products/ContentForFilterHeader"
const ProductsContainer: React.FC = () => {
  const [show, setShow] = useState(false)
  const [activeNum, setActiveNum] = useState(1)
  const { list, loading, error, totalCount, paginationCount } = useSelector(
    (state: any) => state.products // todo any
  )
  const { open, setOpen, data } = useContext(ModalContext)

  const dispatch = useDispatch()
  const handleClose = () => setOpen!(false)

  useEffect(() => {
    dispatch(getCountTotalProduct())
    dispatch(getCategoriesAndType())
    dispatch(filterCatArrayID([]))
  }, [])
  const actionRequest = useCallback((num: number) => {
    dispatch(productsListRequest(num))
  }, [])
  const onDeleteProduct = (id: ReactText) => {
    dispatch(deleteProduct(id!))
    setOpen!(false)
  }
  return (
    <>
      <FilterHeader title={"Товары"}>
        <ContentForFilterHeader setActiveNum={setActiveNum} />
      </FilterHeader>

      <SubHeader>
        <>
          <div>
            Всего товаров -
            <span className="font-weight-bold"> {totalCount}</span>
          </div>
          <div className="sub-header__btn">
            <NavLink className="btn btn-success" to="/add-products">
              Добавить товар
            </NavLink>
          </div>
        </>
      </SubHeader>
      {paginationCount && +paginationCount > 30 ? (
        <PaginationContainer
          key={"topPagination"}
          type={"topPagination"}
          activeNum={activeNum}
          setActiveNum={setActiveNum}
          paginationCount={+paginationCount}
          actionRequest={actionRequest}
        />
      ) : null}

      <div style={{ minHeight: "800px" }}>
        {list.length === 0 && !loading && (
          <Message key={"Товаров не найдено"} message={"Товаров не найдено"} />
        )}
        {loading ? <Loader /> : <List list={list} />}
        {error && <Message key={error} message={error} />}
      </div>
      {paginationCount && +paginationCount > 30 ? (
        <PaginationContainer
          key={"bottomPagination"}
          type={"bottomPagination"}
          activeNum={activeNum}
          setActiveNum={setActiveNum}
          paginationCount={+paginationCount}
          actionRequest={actionRequest}
        />
      ) : null}
      {data && data!.modal === "del-product" && (
        <Modal
          show={open}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Вы действильно хотите удалить товар? </Modal.Title>
          </Modal.Header>
          <Modal.Body>{data && <div>Код товара: {data!.id}</div>}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Отмена
            </Button>
            <Button onClick={() => onDeleteProduct(data.id!)} variant="danger">
              Да, удалить
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Количество товара на складе </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <EditCountProducts />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  )
}
export default ProductsContainer
