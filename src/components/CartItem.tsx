import { Button, Stack } from "react-bootstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { Product } from "../core/types";
import { useContext, useEffect, useState } from "react";
import { getProductImage } from "../core/storage";

type CartItemProps = {
  productIdx: number;
};

export function CartItem({ productIdx }: CartItemProps) {
  const cartContext = useContext(ShoppingCartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }
  const { cart, removeFromCart } = cartContext;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">

      <div className="me-auto">
      {cart[productIdx].companyId}
      </div>
      <div>
      {cart[productIdx].productIdx}
      </div>
      <div>
      {cart[productIdx].size}
      </div>
      <div>
      {cart[productIdx].color}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(productIdx)}
      >
        &times;
      </Button>
    </Stack>
  );
}
