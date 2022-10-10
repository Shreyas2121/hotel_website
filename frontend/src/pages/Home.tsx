import React from "react";
import Container from "react-bootstrap/esm/Container";
import PhotoGrid from "../components/Grid/PhotoGrid";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <Container>
      <br />
      <Slider />
      <br />
      <PhotoGrid />
    </Container>
  );
};

export default Home;
