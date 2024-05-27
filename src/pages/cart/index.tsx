import { useContext } from 'react';
import { ShoppingCartContext} from '../../context/ShoppingCartContext';


const ShoppingCartPage = () => {
  const cartContext = useContext(ShoppingCartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }
  const { cart } = cartContext;


  return (
    <div>
      {JSON.stringify(cart)}
    </div>
  );
};

export default ShoppingCartPage;
