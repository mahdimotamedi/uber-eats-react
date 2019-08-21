import React, { useState, useRef } from "react";
import { Badge, Button, Col, Figure, Row } from "react-bootstrap";
import starIcon from "../../../assets/images/icons/star.svg";
import arrowLeft from "../../../assets/images/icons/arrow-left.svg";
import arrowLeftDisabled from "../../../assets/images/icons/arrow-left-disabled.svg";
import arrowRight from "../../../assets/images/icons/arrow-right.svg";
import arrowRightDisabled from "../../../assets/images/icons/arrow-right-disabled.svg";

function CarouselFood({ title, items }) {
  const [translateX, setTranslateX] = useState(0);
  const [page, setPage] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const carouselDiv = useRef(null);

  const next = () => {
    if (isLastPage) return;

    const newPage = page + 1;
    setTranslateX(newPage * carouselDiv.current.offsetWidth * -1);
    setPage(newPage);
    checkPage(newPage);
  };

  const prev = () => {
    if (isFirstPage) return;

    const newPage = page - 1;
    setTranslateX(newPage * carouselDiv.current.offsetWidth * -1);
    setPage(newPage);
    checkPage(newPage);
  };

  const checkPage = page => {
    if (page === 0) setIsFirstPage(true);
    else setIsFirstPage(false);

    if (page + 1 >= items.length / 3) setIsLastPage(true);
    else setIsLastPage(false);
  };

  return (
    <div className="carousel-food">
      <h3>{title}</h3>

      <div className="carousel-food__navigator">
        <Button variant="light" onClick={() => prev()}>
          <img
            src={isFirstPage ? arrowLeftDisabled : arrowLeft}
            alt="arrow-left"
          />
        </Button>
        <Button variant="light" onClick={() => next()}>
          <img
            src={isLastPage ? arrowRightDisabled : arrowRight}
            alt="arrow-right"
          />
        </Button>
      </div>

      <div className="carousel-food__row">
        <Row
          ref={carouselDiv}
          style={{ transform: `translate(${translateX}px, 0px)` }}
        >
          {items.map(item => (
            <Col md={4} className="carousel-food__row--item" key={item.id}>
              <Figure>
                <Figure.Image src={item.image} />
                <Figure.Caption>
                  <h5>{item.title}</h5>
                  <p>
                    <span>$</span>•<span>{item.cuisineType.title}</span>•
                    <span>{item.mealType.title}</span>•
                    <span>{item.menuType.title}</span>
                  </p>

                  <Badge variant="light">
                    {item.preparation}-{item.preparation + 10} min
                  </Badge>
                  <Badge variant="light">
                    {item.rate} <img src={starIcon} alt="start-icon" />
                  </Badge>
                  <Badge variant="light">${item.price} Delivery Fee</Badge>
                </Figure.Caption>
              </Figure>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default CarouselFood;
