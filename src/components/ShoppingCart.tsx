import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import { CartItem } from './CartItem';
import storeItems from '../data/items.json';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carro de compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className='d-flex justify-content-between align-items-center mt-2 border-top pt-1'></div>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}

          <div className='ms-auto fw-bold fs-5'>
            Total{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0),
            )}
          </div>
          <div className='flex justify-center mt-8'>
            <button
              onClick={() => {
                if (!user) {
                  navigate('/signUp');
                }
                //TODO: Do the payment
              }}
              className='
               py-2 px-3 bg-blue-600 font-bold rounded-x1 text-white transition-transform 
                hover:bg-blue-500
                active:scale-85 
                absolute inset-x-0 bottom-0 h16 
              '
            >
              Pagar
            </button>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
