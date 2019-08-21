import React from "react";
import { Col } from "react-bootstrap";

function HomeCatsItem({ title, imgClassName }) {
  return (
    <Col md={2} xs={4} className="home-cats__item">
      <div className={`home-cats__item--img ${imgClassName}`} />
      <div className="home-cats__item--title">{title}</div>
    </Col>
  );
}

export default HomeCatsItem;
