import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import Popup from "../components/Popup";
import { useState } from "react";

export function Store() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <h1>
        <center>Tienda principal</center>
      </h1>
      <Row md={2} xs={1} lg={2} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <button onClick={() => setButtonPopup(true)}>Opn</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h1>stest</h1>
            </Popup>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
