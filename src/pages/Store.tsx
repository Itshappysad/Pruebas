import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import Popup from "../components/Popup";
import { useState } from "react";

export function Store() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const hidden = {
    display: "none",
  };
  return (
    <>
      <h1>
        <center>Tienda principal</center>
      </h1>
      <Row
        md={2}
        xs={1}
        lg={2}
        className="g-3"
        style={buttonPopup ? { display: "none" } : {}}
      >
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
