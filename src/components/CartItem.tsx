import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { Product } from "../core/types";
import { useEffect, useState } from "react";
import { getProductImage } from "../core/storage";

type CartItemProps = {
  quantity: number;
  item: Product;
};

export function CartItem({ item, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      const img = await getProductImage(item.id);

      setImage(img);
    };

    run();
  }, []);

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={image ?? undefined}
        alt="product"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
