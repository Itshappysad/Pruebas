import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';

export function Store() {
  return (
    <>
      <h1>
        <center>Tienda principal</center>
      </h1>
      <Row md={2} xs={1} lg={2} className='g-3'>
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
