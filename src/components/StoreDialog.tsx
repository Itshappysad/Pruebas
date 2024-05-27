import { useShoppingCart } from "../context/ShoppingCartContext";
import type { CompanyItem } from "../core/types";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type Props = React.ComponentPropsWithRef<typeof Dialog> & {
  product: CompanyItem;
  img?: string;
};

function StoreDialog({
  children,
  product: { name, availability, imageUrl },
  ...props
}: Props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(name);

  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[80dvh] w-[70dvw] max-w-[95dvw] flex z-[80]">
        <div className="p-4 flex flex-col items-center justify-center gap-3">
          <img
            className="aspect-square h-96 object-cover"
            src={imageUrl}
            alt={name}
          />
          <h1 className="text-4xl">{name}</h1>
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <div className="flex gap-2 justify-center items-center">
            <strong className="text-xl">Tallas: </strong>
            <div className="flex gap-3">
              {availability.size.map((size) => (
                <button key={"btn1".concat(name)}
                  className="p-1 bg-black w-20 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-700 "
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <strong className="text-xl">Colores: </strong>
            <div className="flex gap-3">
              {availability.color.map((c, i) => (
                <button key={"btn2".concat(name)}
                  className="p-1 bg-neutral-700 rounded-md shadow-sm hover:scale-125 ease-in-out duration-700"
                >
                  <div
                    className="size-10 rounded-sm"
                    style={{ backgroundColor: c }}
                  ></div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2 justify-center text-xl">
            {quantity === 0 ? (
              <Button
                className="border border-black rounded-md"
                variant="outline"
                onClick={() => increaseCartQuantity(id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 0v4H8l4 4l4-4h-2V0M1 2v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                  />
                </svg>{" "}
                Añadir al carrito
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center "
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> en el carro
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>

                <Button
                  onClick={() => removeFromCart(id)}
                  variant="destructive"
                  size="sm"
                >
                  {" "}
                  Remover
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default StoreDialog;
