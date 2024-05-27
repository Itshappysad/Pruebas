import { getProducts, getProductsByCategory } from '../core/database';
import { StoreItem } from '../components/StoreItem';
import { type CompanyItem } from '../core/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './Store.css';

export function Store() {
  const category = useParams().category
  const [storeItems, setStoreItems] = useState<CompanyItem[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = category === 'all' ?
          await getProducts() :
          await getProductsByCategory(category)


        if (!products) {
          setError('No se encontraron productos en la categoría ['+category+']')
          return;
        }
        
        setStoreItems(products);
      } catch (error) {
        console.error('No se encontraron productos en la categoría:', category, error);
        setError('No se encontraron productos en la categoría ['+category+']')
      }
    };

    fetchProducts();
  }, [category]);

  if (error) {
    return <div className="errorMessage">Error: {error}</div>
  }

  if (!storeItems) {
    return  <div className="flex items-center justify-center h-screen">
              <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
  }

  return (
    <>
      <div className="store-items-container">
          {storeItems?.map(item => (
              <StoreItem product={item} />
          ))}
      </div>
    </>
  );
}
