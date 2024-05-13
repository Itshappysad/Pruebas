import { StoreItem } from '../components/StoreItem'
import { useParams } from 'react-router-dom'
import { Product as ProdType } from "../core/types"
import { getProduct } from '../core/database'
import { useEffect, useState } from 'react'

export function Product() {
  const id = useParams().id
  const [product, setProduct] = useState<ProdType | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(id)
        if (productData) {
          setProduct(productData)
        } else {
          setError('No se encontró el producto ['+id+']')
        }
      } catch (error) {
        setError('No se encontró el producto ['+id+']')
        console.error('Error fetching product: ',id, error)
      }
    };
    fetchProduct()
  }, [id]);

  if (error) {
    return <div className="errorMessage">Error: {error}</div>
  }

  if (!product) {
    return  <div className="flex items-center justify-center h-screen">
              <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
  }

  return (
    <>
      <StoreItem product={product} />
    </>
  );
}
