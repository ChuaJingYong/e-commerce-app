import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { store } from "./store";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import cartIcon from "./assets/cart-icon.png";

export function Layout() {
  // const cartItemCount = useSelector((state) => state.cart.length);

  const cart = useSelector((state) => state.cart);

  const totalItemsInCart = cart.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <>
      <Navbar bg={"light"} variant="light">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src={cartIcon}
              alt="cart icon"
              style={{ width: "50px", marginRight: "20px" }}
            />
            E-Commerce App
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={"/cart"}>
              <i className="bi bi-cart"></i>
              <Badge pill variant="primary">
                {totalItemsInCart}
              </Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
