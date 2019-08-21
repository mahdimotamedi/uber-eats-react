import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoLight from "./../../../assets/images/logo-light.svg";
import getAppStore from "./../../../assets/images/get-app-store.svg";
import getGooglePlay from "./../../../assets/images/get-google-play.png";
import facebook from "./../../../assets/images/icons/facebook.svg";
import twitter from "./../../../assets/images/icons/twitter.svg";
import instagram from "./../../../assets/images/icons/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <div className="footer__logo">
              <img src={logoLight} alt="Uber Eats" />
            </div>

            <div className="footer__get-app">
              <img src={getAppStore} alt="Get it on App Store" />
              <img src={getGooglePlay} alt="Get it on Google Play" />
            </div>
          </Col>

          <Col md={3} className="footer__links">
            <a href="/">About Uber Eats</a>
            <a href="/">Read our blog</a>
            <a href="/">Buy gift cards</a>
            <a href="/">Sign up to deliver</a>
            <a href="/">Add your restaurant</a>
          </Col>

          <Col md={3} className="footer__links">
            <a href="/">Get Help</a>
            <a href="/">Read FAQs</a>
            <a href="/">View all cities</a>
            <a href="/">English</a>
          </Col>
        </Row>

        <hr />

        <Row className="footer__copyright">
          <Col md={6}>© 2019 Uber Technologies Inc.</Col>
          <Col md={6}>
            <div>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Use</a>
              <a href="/">Pricing</a>
            </div>

            <div className="footer__copyright--social">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
