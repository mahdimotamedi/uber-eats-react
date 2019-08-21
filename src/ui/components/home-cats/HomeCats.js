import React from "react";
import { Row } from "react-bootstrap";
import HomeCatsItem from "./HomeCatsItem";

function HomeCats() {
  return (
    <div className="home-cats">
      <h3>Explore Popular Categories</h3>

      <Row>
        <HomeCatsItem title="Breakfast and Brunch" imgClassName="breakfast" />
        <HomeCatsItem title="Desserts" imgClassName="desserts" />
        <HomeCatsItem title="Fast Food" imgClassName="fastFood" />
        <HomeCatsItem title="Healthy" imgClassName="healthy" />
        <HomeCatsItem title="Pizza" imgClassName="pizza" />
        <HomeCatsItem title="Wings" imgClassName="wings" />
      </Row>
    </div>
  );
}

export default HomeCats;
