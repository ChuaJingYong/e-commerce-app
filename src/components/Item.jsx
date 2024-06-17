import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";

export default function Item({ item }) {
  const dispatch = useDispatch();

  function AddItem() {
    return dispatch(addToCart(item));
  }

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={`https://picsum.photos/id/${item.id}/200`}
          alt={item.name}
        ></Card.Img>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.descriptions}
            <br />
            Price: {item.price}
          </Card.Text>
          <Button variant="primary" onClick={AddItem}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
