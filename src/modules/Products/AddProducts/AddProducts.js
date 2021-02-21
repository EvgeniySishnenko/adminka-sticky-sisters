import React from "react"
import { Row, Form, Button } from "react-bootstrap/"

import SubHeader from "../../../components/SubHeader/SubHeader"

const AddProducts = () => {
  return (
    <>
      <SubHeader>
        <div className="font-weight-bold">Добавление товара</div>
      </SubHeader>
      <Row className="justify-content-center mb-5">
        <Form className="w-50">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Название товара</Form.Label>
            <Form.Control
              type="text"
              placeholder="Название товара"
              required
              isInvalid
            />
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Цена</Form.Label>
            <Form.Control type="number" placeholder="Цена" required isInvalid />
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Краткое описание для сео</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание товара</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Основная картинка" />
          </Form.Group>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Основная картинка" />
          </Form.Group>
          <Form.Group>
            <div className="btn btn-link">Добавить</div>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select" htmlSize={5} multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Показывать товар"
              // onChange={handleChange}
              // isInvalid={!!errors.terms}
              // feedback={errors.terms}
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="success" type="Submit">
              Добавить товар
            </Button>
          </div>
        </Form>
      </Row>
    </>
  )
}
export default AddProducts
