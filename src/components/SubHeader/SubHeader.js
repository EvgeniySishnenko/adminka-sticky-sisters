import React from "react"
import { ListGroup } from "react-bootstrap/"

const SubHeader = ({ children }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {children}
    </ListGroup.Item>
  )
}
export default SubHeader
