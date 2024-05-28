import { useContext } from 'react';
import { ShoppingCartContext} from '../../context/ShoppingCartContext';
import './styles.css';
import { formatCurrency } from '../../utilities/formatCurrency';


const ShoppingCartPage = () => {
  const cartContext = useContext(ShoppingCartContext);
  if (!cartContext) {
    throw new Error('No se encontró el contexto para el carrito.');
  }
  const { cart, removeFromCart } = cartContext;

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
              <div className="col-sm"> </div>
            </div>
          {cart.map((item, index) => (
            <div className="row cart-row">
              <img className="col-sm item-cart-img" src={item.imageUrl} alt={item.name} />
              <h5 className="col-sm">{item.name}</h5>
              <p className="col-sm">{item.size}</p>
              <p className="col-sm">{item.color}</p>
              <p className="col-sm">{formatCurrency(item.price)}</p>
              <button className="col-sm btn btn-outline-dark"
                  onClick={() => removeFromCart(index)}>
                    Eliminar
          </button>

            </div>
          ))}
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Total</h3>
          <h4>{formatCurrency(totalPrice)}</h4>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
