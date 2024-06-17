import { Container, Row, Col } from "react-bootstrap";
import Item from "../components/Item";

const items = [
  { id: 1, name: "Pen", description: "It's a pen", price: 10 },
  {
    id: 2,
    name: "Laptop",
    description: "It's a gaming laptop",
    price: 5000,
  },
  {
    id: 3,
    name: "XM Pad 6",
    description: "It's the latest model",
    price: 1600,
  },
  {
    id: 15,
    name: "Traveling Boots",
    description: "Built for hiking",
    price: 300,
  },
  { id: 12, name: "Zus", description: "ButterBae", price: 12 },
];

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          {items.map((item) => (
            <Col key={item.id} md={3}>
              <Item item={item}></Item>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
