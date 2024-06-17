import { Card, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  decrementCartItem,
  incrementCartItem,
} from "../feature/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleDecrement() {
    return dispatch(decrementCartItem(item));
  }

  function handleIncrement() {
    return dispatch(incrementCartItem(item));
  }

  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <Row>
            <Col xs={4} md={2}>
              <Card.Img
                variant="top"
                src={`https://picsum.photos/id/${item.id}/200`}
                alt={item.name}
              ></Card.Img>
            </Col>
            <Col
              xs={4}
              md={4}
              className="d-flex flex-column justify-content-center"
            >
              <Card.Title>
                {item.amount} x {item.name}
              </Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Col>
            <Col
              xs={5}
              md={3}
              className="d-flex gap-3 align-items-center justify-content-center"
            >
              <Button variant="secondary" onClick={handleDecrement}>
                <i className="bi bi-dash-lg"></i>
              </Button>

              {item.amount}

              <Button variant="secondary" onClick={handleIncrement}>
                <i className="bi bi-plus"></i>
              </Button>
            </Col>
            <Col className="d-flex gap-3 align-items-center justify-content-center">
              <span className="text-danger">RM {item.total}</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
