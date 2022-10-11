import React from "react";
import Container from "react-bootstrap/esm/Container";
import PhotoGrid from "../components/Grid/PhotoGrid";
import Service from "../components/services/Service";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <Container>
      <br />
      <Slider />
      <br />
      <PhotoGrid />
      <Service />
    </Container>
  );
};

export default Home;
