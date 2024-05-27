import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import "./styles.css";
import { useContext } from "react";
import cartImg from '../../assets/cart.jpeg';


export function Navbar() {
  const cartContext = useContext(ShoppingCartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }
  const { cart } = cartContext;

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <a className="navbar-title-link" href="/">
          <h1 className="navbar-title font-cursive font-bold text-5xl">
            Avocado -e- Vestiti
          </h1>
        </a>
        <Nav className="me-px font-semibold text-2xl ">
          <Nav.Link to="/store/all" as={NavLink}>
          Todos los productos
          </Nav.Link>
          <Nav.Link to="/store/shirt" as={NavLink}>
          Camisas
          </Nav.Link>
          <Nav.Link to="/store/pant" as={NavLink}>
          Pantalones
          </Nav.Link>
          <Nav.Link to="/store/accessory" as={NavLink}>
          Accesorios
          </Nav.Link>
          <Nav.Link to="/shopping-cart" as={NavLink}>
            <div className="flex flex-col items-center">
              <img className="cart-image" src={cartImg} alt="Example" />
              <p className="cart-count"> { cart.length <= 0 ? "" : "("+ cart.length +")" } </p>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
