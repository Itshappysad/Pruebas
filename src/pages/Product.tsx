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
    return <div>Cargando Información de producto...</div>;
  }
  return (
    <>
      <StoreItem product={product}/>
    </>
  );
}