import React, { useState, useRef } from "react"
import {
  ListGroup,
  Dropdown,
  Accordion,
  Button,
  Popover,
  Overlay,
  Form,
  FormControl,
} from "react-bootstrap/"
const FilterHeader = () => {
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)
  const handleClick = (event) => {
    setShow(!show)
    setTarget(event.target)
  }
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between align-items-center">
        <div className="mr-2 font-weight-bold">Товары</div>
        <Button variant="link" onClick={handleClick}>
          Категории
        </Button>
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Выберете категорию</Popover.Title>
            <Popover.Content>
              <Dropdown.Item href="#/action-1">Открытки</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Боксы</Dropdown.Item>

              <Accordion defaultActiveKey="0">
                <div>
                  <Accordion.Toggle
                    className="filter-header-item"
                    as={Form.Label}
                    eventKey="0"
                  >
                    Стикеры
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <Dropdown.Item>Hello! I'm the body</Dropdown.Item>
                    <Dropdown.Item>Hello! I'm the body</Dropdown.Item>
                    <Dropdown.Item>Hello! I'm the body</Dropdown.Item>
                    <Dropdown.Item>Hello! I'm the body</Dropdown.Item>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
      <div className="right">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-secondary">Search</Button>
        </Form>
      </div>
    </ListGroup.Item>
  )
}
export default FilterHeader
