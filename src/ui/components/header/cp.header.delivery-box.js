import React, { useRef, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import mapIcon from "../../../assets/images/map.svg";

function CpHeaderDeliveryBox() {
  const [inputFocus, setInputFocus] = useState(false);

  const inputRef = useRef(null);

  return (
    <div className="header__content--delivery-box">
      <InputGroup className={inputFocus ? "active" : ""}>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <img src={mapIcon} alt="map-icon" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          ref={inputRef}
          placeholder="Enter delivery address"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
        <InputGroup.Append>
          <Button variant="success">Find Food</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default CpHeaderDeliveryBox;
