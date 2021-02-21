import React from "react"
import { Button, Card, Col, Image } from "react-bootstrap"
import LazyLoad from "react-lazyload"
import { IItem } from "../../models/interfaces/products.props"
export const Item: React.FC<IItem> = ({ item }) => {
  return (
    <Col key={item.products_id} className="col-4">
      <Card className="mt-3">
        <LazyLoad height={360}>
          <Image src={`./images/${item.image}`} fluid />
        </LazyLoad>

        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <div>
              Код товара:
              <span className="font-weight-bold">{item.products_id}</span>
            </div>
            <div>
              В наличии:
              <span className="font-weight-bold">
                {item.count_products} шт.
              </span>
            </div>
          </Card.Text>

          <Card.Text className="d-flex justify-content-between">
            <Button variant="outline-warning">Изменить</Button>
            <Button variant="outline-danger">Удалить</Button>
          </Card.Text>
          <Card.Text>
            <Button
              // onClick={handleShow}
              className="w-100"
              variant="outline-secondary"
            >
              Изменить кол-во
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
