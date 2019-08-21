import React from "react";
import { Col, Figure, Row } from "react-bootstrap";
import homeLand1 from "../../../assets/images/home-land-1.svg";
import homeLand2 from "../../../assets/images/home-land-2.svg";
import homeLand3 from "../../../assets/images/home-land-3.svg";
import apple from "../../../assets/images/apple.svg";
import playStore from "../../../assets/images/play-store.svg";

function HomeIntro() {
  return (
    <Row className="home-intro">
      <Col md={4}>
        <Figure>
          <Figure.Image src={homeLand1} />
          <Figure.Caption>
            <h5>There's more to love in the app.</h5>
            <p>
              Get the app:
              <a href="/">
                <img src={apple} alt="apple" /> IPhone
              </a>
              <a href="/">
                <img src={playStore} alt="play-store" /> Android
              </a>
            </p>
          </Figure.Caption>
        </Figure>
      </Col>

      <Col md={4}>
        <Figure>
          <Figure.Image src={homeLand2} />
          <Figure.Caption>
            <h5>Your restaurant, delivered</h5>
            <a href="/" className="home-intro__action">
              Add your restaurant
            </a>
          </Figure.Caption>
        </Figure>
      </Col>

      <Col md={4}>
        <Figure>
          <Figure.Image src={homeLand3} />
          <Figure.Caption>
            <h5>Deliver the Eats</h5>
            <a href="/" className="home-intro__action">
              Sign up to deliver
            </a>
          </Figure.Caption>
        </Figure>
      </Col>
    </Row>
  );
}

export default HomeIntro;
