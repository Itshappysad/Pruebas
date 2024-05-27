import { createContext, useState, useEffect, ReactNode, FC } from 'react';

interface CartItem {
  companyId: string;
  productIdx: number;
  size: string;
  color: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (companyId: string, productIdx: number, size: string, color: string) => void;
  removeFromCart: (index: number) => void;
}

const ShoppingCartContext = createContext<CartContextType | undefined>(undefined);

const ShoppingCartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (companyId: string, productIdx: number, size: string, color: string) => {
    setCart(prevCart => [
      ...prevCart,
      { companyId, productIdx, size, color }
    ]);
    alert('El producto se añadió al carrito.');
  };

  const removeFromCart = (index: number) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
