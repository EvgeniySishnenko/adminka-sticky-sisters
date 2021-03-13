import React, { useState, useRef } from "react"
import { ListGroup } from "react-bootstrap/"
const FilterHeader: React.FC<any> = ({ title, children }) => {
  return (
    <ListGroup.Item className="d-flex align-items-center">
      <div className="mr-2 font-weight-bold">{title}</div>
      {children}
    </ListGroup.Item>
  )
}
export default FilterHeader
