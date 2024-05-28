import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import './styles.css';
import { formatCurrency } from '../../utilities/formatCurrency';
import { useAuth } from '../../context/useAuth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';


const PaymentPage = () => {
  const { user } = useAuth();
  const cartContext = useContext(ShoppingCartContext);
  if (!cartContext) {
    throw new Error('No se encontró el contexto para el carrito.');
  }
  const navigate = useNavigate()
  const { cart } = cartContext;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>


      <h1>Realizar pago</h1>

      <div className="mt-10 container text-center">
        <div className="row border">
          <div className="col border">
            <h2>Total</h2>
          </div>
          <div className="col border text-xl">
          {formatCurrency(totalPrice)}
          </div>
        </div>
      </div>



      <h2 className="mt-10">Información de envío</h2>

      <div className="mt-10 container text-center">
        <div className="row border">
          <div className="col border">
            <h5>Nombre</h5>
          </div>
          <div className="col border">
            {user?.name}
          </div>
        </div>
        <div className="row border">
          <div className="col border">
            <h5>Dirección</h5>
          </div>
          <div className="col border">
          {user?.address}
          </div>
        </div>
        <div className="row border">
          <div className="col border">
            <h5>Código postal</h5>
          </div>
          <div className="col border">
            {user?.postalcode}
          </div>
        </div>
      </div>
      <div className='w-full mt-10'>
        <button className='m-10 w-full btn btn-dark'
          onClick={() => {
            toast.success('Gracias por tu compra. La orden será creada y se enviará el producto cuando se confirme el pago.')
            navigate("/")
            localStorage.removeItem("shoppingCart")
            window.location.reload();
          }}> Finalizar compra</button>
      </div>
      
    </div>
  );
};

export default PaymentPage;
