import { Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { Product } from '../core/types';
import StoreDialog from './StoreDialog';
import { useEffect, useState } from 'react';
import { getProductImage } from '../core/storage';

export type StoreItemProps = {
  product: Product;
};

export function StoreItem({ product }: StoreItemProps) {
  const { name, price, id } = product;

  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      const img = await getProductImage(id);

      setImage(img);
    };

    run();
  }, []);

  return (
    <StoreDialog product={product} img={image ?? undefined}>
      <Card>
        <Card.Img
          variant='top'
          src={image ?? undefined}
          style={{ objectFit: 'cover', height: '450px' }}
        />

        <Card.Body className='d-flex flex-column'>
          <Card.Title className='d-flex flex-column align-items-baseline mb-4'>
            <span className='ms-3'>{name}</span>
            <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </StoreDialog>
  );
}
