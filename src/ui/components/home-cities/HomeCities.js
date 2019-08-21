import React from "react";
import { Col, Row } from "react-bootstrap";

function HomeCities() {
  return (
    <div className="cities">
      <h3>Cities Near You</h3>
      <a className="cities__btn-more" href="/">
        View all 500+ cities
      </a>

      <Row className="cities__items">
        <Col md={3}>
          <a href="/">Atlanta</a>
          <a href="/">Austin</a>
          <a href="/">Baltimore-Maryland</a>
          <a href="/">Boston</a>
        </Col>

        <Col md={3}>
          <a href="/">Dallas-Fort Worth</a>
          <a href="/">Denver</a>
          <a href="/">Las Vegas</a>
          <a href="/">Los Angeles</a>
        </Col>

        <Col md={3}>
          <a href="/">New York City</a>
          <a href="/">Orange County</a>
          <a href="/">Palm Springs</a>
          <a href="/">Philadelphia</a>
        </Col>

        <Col md={3}>
          <a href="/">Dallas-Fort Worth</a>
          <a href="/">Denver</a>
          <a href="/">Las Vegas</a>
          <a href="/">Los Angeles</a>
        </Col>
      </Row>
    </div>
  );
}

export default HomeCities;
