import { StoreItem } from '../components/StoreItem';
import { useParams } from 'react-router-dom';
import { Product as ProdType  } from "../core/types";
import { getProduct } from '../core/database';
import { useEffect, useState } from 'react';

export function Product() {
  const id = useParams().id
  const [product, setProduct] = useState<ProdType | null>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProduct(id);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Producto no encontrado [ id: {id} ]</div>;
  }

  // const item:ProdType = {
  //   id: "1",
  //   name: "asdasd",
  //   price: 1234,
  //   colors: ["blanco", "negro"],
  //   sizes: ["grande", "pequeño"]
  // }

  return (
    <>
      <StoreItem product={product}/>
    </>
  );
}