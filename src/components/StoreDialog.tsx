import { useShoppingCart } from '../context/ShoppingCartContext';
import type { Product } from '../core/types';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

type Props = React.ComponentPropsWithRef<typeof Dialog> & {
  product: Product;
};

function StoreDialog({
  children,
  product: { imgUrl, name, sizes, colors, id },
  ...props
}: Props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='h-[80dvh] w-[70dvw] max-w-[95dvw] flex z-[80]'>
        <div className='p-4 flex flex-col items-center justify-center gap-3'>
          <img
            className='aspect-square h-96 object-cover'
            src={imgUrl}
            alt={name}
          />
          <h1 className='text-4xl'>{name}</h1>
        </div>
        <div className='flex-1 flex flex-col gap-4 justify-center'>
          <div className='flex gap-2 justify-center items-center'>
            <strong className='text-xl'>Tallas: </strong>
            <div className='flex gap-3'>
              {sizes.map((s, i) => (
                <button className='p-1 bg-gray-300 rounded-lg w-20' key={i}>
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <strong className='text-xl'>Colores: </strong>
            <div className='flex gap-3'>
              {colors.map((c, i) => (
                <button className='p-1 bg-gray-300 rounded-lg' key={i}>
                  <div
                    className='size-10 rounded-sm'
                    style={{ backgroundColor: c }}
                  ></div>
                </button>
              ))}
            </div>
          </div>
          <div className='flex gap-2 justify-center text-xl'>
            {quantity === 0 ? (
              <Button
                className='border border-black rounded-md'
                variant='outline'
                onClick={() => increaseCartQuantity(id)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M10 0v4H8l4 4l4-4h-2V0M1 2v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2'
                  />
                </svg>{' '}
                Añadir al carrito
              </Button>
            ) : (
              <div
                className='d-flex align-items-center flex-column'
                style={{ gap: '.5rem' }}
              >
                <div
                  className='d-flex align-items-center justify-content-center '
                  style={{ gap: '.5rem' }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className='fs-3'>{quantity}</span> en el carro
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>

                <Button
                  onClick={() => removeFromCart(id)}
                  variant='destructive'
                  size='sm'
                >
                  {' '}
                  Remover
                </Button>
              </div>
            )}

            <Button className='rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <g fill='none' fillRule='evenodd'>
                  <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
                  <path
                    fill='currentColor'
                    d='M16.724 3.03a2 2 0 0 0-2.828 0L3.582 13.344a2 2 0 0 0-.586 1.414v5.233c0 .557.453 1.01 1.01 1.01L20 21a1 1 0 1 0 0-2h-7.932l8.899-8.899a2 2 0 0 0 0-2.828zM9.24 19L19.553 8.687L15.31 4.444L4.996 14.758V19z'
                  />
                </g>
              </svg>{' '}
              Editar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default StoreDialog;
