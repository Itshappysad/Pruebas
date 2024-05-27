import { createContext, useState, ReactNode, FC } from 'react';
//import { useLocalStorage } from '../hooks/useLocalStorage';


interface CartItem {
  companyId: string;
  productIdx: number;
  size: string;
  color: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    companyId: string,
    productIdx: number,
    size: string,
    color: string) => void;
  removeFromCart: (index: number) => void;
}

const ShoppingCartContext = createContext<CartContextType | undefined>(undefined)

const ShoppingCartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (companyId: string, productIdx: number, size: string, color: string) => {
    setCart(prevCart => [
      ...prevCart,
      { companyId, productIdx, size, color }
    ]);
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