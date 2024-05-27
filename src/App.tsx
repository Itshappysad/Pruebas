import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="brd">
        <Outlet />
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
