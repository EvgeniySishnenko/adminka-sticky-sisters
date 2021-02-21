import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Row, Col, Button, Modal, Image } from "react-bootstrap/"
import EditCountProducts from "../EditCountProducts/EditCountProducts"
import SubHeader from "../../../components/SubHeader/SubHeader"
import FilterHeader from "../../../components/FilterHeader/FilterHeader"
import PaginationContainer from "../../../shared/Pagination/Pagination"
import {
  productsListRequest,
  getCountTotalProduct,
} from "../store/actions/products.actions"
import { NavLink } from "react-router-dom"
import LazyLoad from "react-lazyload"
import { Loader } from "../../../shared/Loader/Loader"
import { Message } from "../../../shared/Message/Message"
import { List } from "../Components/Products/List"
const ProductsContainer: React.FC = () => {
  const [show, setShow] = useState(false)
  const [activeNum, setActiveNum] = useState(1)

  const { list, loading, error, totalCount, paginationCount } = useSelector(
    (state: any) => state.products
  )
  const dispatch = useDispatch()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    dispatch(productsListRequest())
    dispatch(getCountTotalProduct())
  }, [])
  const actionRequest = useCallback((num: number) => {
    dispatch(productsListRequest(num))
  }, [])
  return (
    <>
      <FilterHeader />
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
      <PaginationContainer
        key={"topPagination"}
        type={"topPagination"}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
        paginationCount={+paginationCount}
        actionRequest={actionRequest}
      />

      <div style={{ minHeight: "800px" }}>
        {error && <Message key={error} message={error} />}
        {loading ? <Loader /> : <List list={list} />}
      </div>
      <PaginationContainer
        key={"bottomPagination"}
        type={"bottomPagination"}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
        paginationCount={+paginationCount}
        actionRequest={actionRequest}
      />
      <Modal
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
      </Modal>
    </>
  )
}
export default ProductsContainer
