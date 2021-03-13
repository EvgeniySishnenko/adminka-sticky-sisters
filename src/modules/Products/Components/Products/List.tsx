import React from "react"
import { Row } from "react-bootstrap"
import { Item } from "./Item"
import { IList } from "@root/modules/Products/models/interfaces/products.props"

export const List: React.FC<IList> = ({ list }) => {
  return (
    <Row className="pl-3 mb-5">
      {list.map((item) => (
        <Item item={item} />
      ))}
    </Row>
  )
}
