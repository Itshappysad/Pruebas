import { useContext } from 'react';
import { ShoppingCartContext} from '../../context/ShoppingCartContext';
import './styles.css';


const ShoppingCartPage = () => {
  const cartContext = useContext(ShoppingCartContext);
  if (!cartContext) {
    throw new Error('No se encontró el contexto para el carrito.');
  }
  const { cart } = cartContext;

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <div className="container">
            <div className="row cart-row">
              <h2 className="col-sm">Producto</h2>
              <h2 className="col-sm">Nombre</h2>
              <h2 className="col-sm">Talla</h2>
              <h2 className="col-sm">Color</h2>
              <h2 className="col-sm">Precio</h2>
            </div>
          {cart.map((item) => (
            <div className="row cart-row">
              <img className="col-sm item-cart-img" src={item.imageUrl} alt={item.name} />
              <h5 className="col-sm">{item.name}</h5>
              <p className="col-sm">{item.size}</p>
              <p className="col-sm">{item.color}</p>
              <p className="col-sm">{item.price}</p>
            </div>
          ))}
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Total: ${totalPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;