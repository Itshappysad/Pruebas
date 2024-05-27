import { Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { CompanyItem } from '../core/types';
import StoreDialog from './StoreDialog';

type StoreItemProps = {
  product: CompanyItem;
};

export function StoreItem({ product }: StoreItemProps) {
  const { name, price, imageUrl } = product;

  return (
    <StoreDialog product={product} img={imageUrl ?? undefined}>
      <Card>
        <Card.Img
          variant='top'
          src={imageUrl}
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
