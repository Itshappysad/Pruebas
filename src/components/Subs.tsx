import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button } from "./ui/button";
import { Subscription } from "../core/types";

type SubsItemsProps = {
  Subscription: Subscription;
};
export function Subsitems({ Subscription }: SubsItemsProps) {
  const { id } = Subscription;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className=" grid gap-0.1 grid-cols-3 h-124 w-full place-items-center rounded-lg   ">
      <div className=" flex flex-col items-center h-full relative w-64  rounded-lg shadow-xl bg-white ">
        <h1 className="shadow-inner  hover:bg-gray-100">Mensual</h1>
        Incluye:
        <ol className="italic hover:text-gray-500 transition ease-in-out delay-150">
          <li>&#x2713; Lorem</li>
          <li>&#x2713; Ipsum</li>
          <li>&#x2713; dolor </li>
          <li>&#x2715; sit</li>
          <li>&#x2715; amet</li>
          <li>&#x2715; consectetur </li>
          <li>&#x2715; adipiscing </li>
          <li>&#x2715; elit</li>
          <li>&#x2715; sed </li>
        </ol>
        <h2>$15.000</h2>
        <p className="text-xs	">Por mes</p>
        <Button
          className="text-decoration-none text-gray-600"
          asChild
          variant="outline"
        >
          <Link to="">
            <b>&#xFF04;</b> Suscribirse!
          </Link>
        </Button>
      </div>
      <div className=" flex flex-col items-center h-full relative w-64  rounded-lg shadow-xl bg-white ">
        <h1 className="shadow-inner  hover:bg-gray-100 hover:text-blue-500 transition ease-in-out delay-150">
          Mensual +
        </h1>
        Incluye:
        <ol className="italic hover:text-gray-500 transition ease-in-out delay-150 ">
          <li>&#x2713; Lorem</li>
          <li>&#x2713; Ipsum</li>
          <li>&#x2713; dolor </li>
          <li>&#x2713; sit</li>
          <li>&#x2713; amet</li>
          <li>&#x2715; consectetur </li>
          <li>&#x2715; adipiscing </li>
          <li>&#x2715; elit</li>
          <li>&#x2715; sed </li>
        </ol>
        <h2>$22.000</h2>
        <p className="text-xs	">Por mes</p>
        <Button
          className="text-decoration-none text-gray-600"
          asChild
          variant="outline"
        >
          <Link to="">
            <b>&#xFF04;</b> Suscribirse!
          </Link>
        </Button>
      </div>
      <div className=" flex flex-col items-center h-full relative w-64  rounded-lg shadow-xl bg-white ">
        <h1 className=" shadow-inner  hover:bg-gray-100 hover:text-yellow-500  transition ease-in-out delay-150">
          Anual
        </h1>
        Incluye:
        <ol className="italic hover:text-gray-500 transition ease-in-out delay-150">
          <li>&#x2713; Lorem</li>
          <li>&#x2713; Ipsum</li>
          <li>&#x2713; dolor </li>
          <li>&#x2713; sit</li>
          <li>&#x2713; amet</li>
          <li>&#x2713; consectetur </li>
          <li>&#x2713; adipiscing </li>
          <li>&#x2713; elit</li>
          <li>&#x2713; sed </li>
        </ol>
        <h2>$240.000</h2>
        <p className="text-xs	">Por año</p>
        <Button
          className="text-decoration-none text-gray-600"
          asChild
          variant="outline"
        >
          <Link to="">
            <b>&#xFF04;</b> Suscribirse!
          </Link>
        </Button>
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
    </div>
  );
}

export default Subsitems;

/*,

  add to somewhere items or dsmth*/
