import React from "react"
import { NavLink } from "react-router-dom"
import { ListGroup } from "react-bootstrap/"

const Navbar = () => {
  return (
    <div className="position-sticky  sidebar">
      <ListGroup defaultActiveKey="/products">
        <ListGroup.Item variant="light" action href="/products">
          <NavLink to="/products">Товары</NavLink>
        </ListGroup.Item>
        <ListGroup.Item variant="light" action href="/products1">
          <NavLink to="/products1">Заказы</NavLink>
        </ListGroup.Item>
        <ListGroup.Item variant="light" action href="/products2">
          <NavLink to="/products2">Категории</NavLink>
        </ListGroup.Item>
        <ListGroup.Item variant="light" action href="/products3">
          <NavLink to="/products3">Клиенты</NavLink>
        </ListGroup.Item>

        <ListGroup.Item variant="light" action href="/products4">
          <NavLink to="/products4">Промокоды</NavLink>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}
export default Navbar
