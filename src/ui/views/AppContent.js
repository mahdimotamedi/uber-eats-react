import React, { useEffect, useState } from "react";
import CarouselFood from "../components/carousel-food/CarouselFood";
import { Container } from "react-bootstrap";
import ApiFood from "../../core/api/api.food";
import HomeIntro from "../components/home-intro/HomeIntro";
import HomeCities from "../components/home-cities/HomeCities";
import HomeCats from "../components/home-cats/HomeCats";

function AppContent() {
  const [foods1, setFoods1] = useState([]);
  const [foods2, setFoods2] = useState([]);

  useEffect(() => {
    setFoods1(ApiFood.getFoods({ cuisineType: "American" }));
    setFoods2(ApiFood.getFoods({ mealType: "Breakfast" }));
  }, []);

  return (
    <>
      <Container>
        <CarouselFood title="Food Delivery in Piscataway" items={foods1} />

        <hr />

        <HomeIntro />

        <hr />

        <CarouselFood title="New on Uber Eats" items={foods2} />

        <hr />

        <HomeCities />

        <hr />

        <HomeCats />
      </Container>
    </>
  );
}

export default AppContent;
