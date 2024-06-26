import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  let subtotal = 0;
  cart.forEach((item) => {
    // assumes price is in the format 'RMxx'
    // subtotal += parseInt(item.price.substring(2));

    // now it multiplies by the amount
    // subtotal += parseInt(item.price.substring(2)) * item.amount;
    subtotal += item.price * item.amount;
  });

  console.log("cart value", cart);

  return (
    <>
      <Container>
        <h2>Your Cart:</h2>
        {cart.map((item, index) => (
          <CartItem key={index} item={item}></CartItem>
        ))}
        <h4>Subtotal: RM{subtotal}</h4>
      </Container>
    </>
  );
}
