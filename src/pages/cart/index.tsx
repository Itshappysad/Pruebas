import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

interface ProductProps {
  company: string;
  productIndex: number;
  product: {
    name: string;
    price: number;
  };
}

const ShoppingCartPage = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }


  return (
    <div>
      total
      <ShoppingCart name="asdasd"/>
    </div>
  );
};

export default ShoppingCartPage;



const ShoppingCart: React.FC<ProductProps> = ({ company, productIndex}) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart } = cartContext;

  const handleAddToCart = () => {
    addToCart(company, productIndex, size, color);
  };

  return (
    <div>
      <h2>{company}</h2>
      <p>index: {productIndex}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};