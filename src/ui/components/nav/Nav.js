import React, { useEffect, useState } from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import logoDark from "../../../assets/images/logo.svg";
import mapIcon from "../../../assets/images/map.svg";

function Nav() {
  const [onTop, setOnTop] = useState(true);
  const [haveScrolled, setHaveScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    setOnTop(window.scrollY === 0);
    setHaveScrolled(true);
  };

  return (
    <nav
      className={`nav ${
        onTop ? (haveScrolled ? "nav-no-sticky" : "") : "nav-sticky"
      }`}
    >
      <Container>
        <div className="nav__logo-part">
          <img src={logoDark} alt="Uber Eats" />
        </div>

        <div className="nav__deliver-box">
          <div className="nav__deliver-box--container">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <img src={mapIcon} alt="map-icon" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Enter delivery address" />
            </InputGroup>
          </div>
        </div>

        <div className="nav__sign-in-part">
          <a href="/">Sign In</a>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
