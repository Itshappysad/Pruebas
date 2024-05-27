import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import "./styles.css";
import { useContext } from "react";
import cartImg from '../../assets/cart.jpeg';
import { useAuth } from "../../context/useAuth";
import { useModal } from "./hooks";
import { Settings } from "../Settings";


export function Navbar() {
  const { user } = useAuth();
  const { isOpen, handleOpen, handleClose } = useModal();
  const navigate = useNavigate();

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
        <Button
            onClick={
              user
                ? handleOpen
                : () => {
                    navigate("/signUp");
                  }
            }
            style={{
              width: "3rem",
              height: "3rem",
              position: "relative",
              gap: ".5rem",
            }}
            variant="outline-secondary"
          >
            <svg
              viewBox="2.5 2 31 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="40"
              height="40"
            >
              <title />
              <circle cx="12" cy="8" fill="currentColor" r="4" />
              <path
                d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z"
                fill="currentColor"
              />
            </svg>
          </Button>
      </Container>
      <Settings isOpen={isOpen} handleClose={handleClose} />
    </NavbarBs>
  );
}
