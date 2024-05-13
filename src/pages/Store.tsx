import { Col, Row } from 'react-bootstrap';
import { getProducts, getProductsByCategory } from '../core/database';
import { StoreItem } from '../components/StoreItem';
import { type Product } from '../core/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './Store.css';

export function Store() {
  const category = useParams().category
  const [storeItems, setStoreItems] = useState<Product[] | null>(null)
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
      <div className="store">
        <Row md={2} xs={1} lg={2} className='g-3'>
          {storeItems?.map(item => (
            <Col key={item.id}>
              <StoreItem product={item} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
