import React from "react";
import headerBackLeft from "../../../assets/images/header-back-left.svg";
import headerBackRight from "../../../assets/images/header-back-right.svg";
import CpHeaderDeliveryBox from "./cp.header.delivery-box";

function CpHeader() {
  return (
    <header className="header">
      <div className="header__backgrounds">
        <img
          className="header__backgrounds--left"
          src={headerBackLeft}
          alt="header-background"
        />
        <img
          className="header__backgrounds--right"
          src={headerBackRight}
          alt="header-background"
        />
      </div>

      <div className="header__content">
        <div className="header__content--text">
          <h2>Restaurants you love, delivered to you</h2>
        </div>

        <CpHeaderDeliveryBox />
      </div>
    </header>
  );
}

export default CpHeader;
