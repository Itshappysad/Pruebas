import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import { type Product } from '../core/types';
import { useEffect, useState } from 'react';
import { getProducts } from '../core/database';
import { toast } from 'sonner';
import './Store.css';

export function Store() {
  const [storeItems, setStoreItems] = useState<Product[] | null>(null);

  useEffect(() => {
    const run = async () => {
      const products = await getProducts();

      if (!products) {
        return toast.error('Ha ocurrido un error');
      }

      setStoreItems(products);
    };

    run();
  }, []);

  return (
    <>
      <div className="store">
        <Row md={2} xs={1} lg={2} className='g-3'>
          {storeItems?.map(item => (
            <Col key={item.id}>
              <div>aaaa {item.id}</div>
              <StoreItem product={item} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
