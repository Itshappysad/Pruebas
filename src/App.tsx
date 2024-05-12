import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <ShoppingCartProvider>
        <Container className="brd">
          <Outlet />
        </Container>
      </ShoppingCartProvider>
      <Footer />
    </>

  );
}

export default App;

/* https://www.youtube.com/watch?v=lATafp15HWA refference*/
