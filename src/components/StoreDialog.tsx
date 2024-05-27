import { useContext, useState } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import type { CompanyItem } from "../core/types";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type Props = React.ComponentPropsWithRef<typeof Dialog> & {
  product: CompanyItem;
  img?: string;
};

function StoreDialog({
  children,
  product: { companyId, productIdx, name, availability, imageUrl, price },
  ...props
}: Props) {
  const cartContext = useContext(ShoppingCartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const [selectedColor, setSelectedColor] = useState(availability.color[0]);
  const [selectedSize, setSelectedSize] = useState(availability.size[0]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const { addToCart } = cartContext;

  const dropdownStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
  };

  const optionStyle = (color) => ({
    backgroundColor: color,
    color: '#fff',
    padding: '10px',
  });

  const displayStyle = {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: selectedColor,
    color: '#fff',
    borderRadius: '5px',
    textAlign: 'center',
  };

  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div>
              <img
                className="aspect-square h-96 object-cover"
                src={imageUrl}
                alt={name}
              />
              <h1 className="text-4xl">{name}</h1>
            </div>

            <div className="flex flex-col justify-evenly">

              <div>
                <h3>Color</h3>
                <select value={selectedColor} onChange={handleColorChange} style={dropdownStyle}>
                  {availability.color.map((color) => (
                    <option value={color} style={optionStyle(color)}>
                      {color}
                    </option>
                  ))}
                </select>
                <div style={displayStyle}>
                </div>
              </div>

              <div>
                <h3>Talla</h3>
                <select value={selectedSize} onChange={handleSizeChange} style={dropdownStyle}>
                  {availability.size.map((color) => (
                    <option value={color} style={optionStyle(color)}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>
          <Button
            className="border border-black rounded-md"
            variant="outline"
            onClick={() => addToCart(companyId, productIdx, name, selectedSize, selectedColor, price, imageUrl)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M10 0v4H8l4 4l4-4h-2V0M1 2v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2" />
            </svg>{" "}
            Añadir al carrito
          </Button>
        </div>



    </DialogContent>
    </Dialog >
  );
}
export default StoreDialog;
