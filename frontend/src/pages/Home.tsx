import React from "react";
import Container from "react-bootstrap/esm/Container";
import PhotoGrid from "../components/Grid/PhotoGrid";
import Service from "../components/services/Service";
import Slider from "../components/Slider/Slider";
import Reviewcards from "../components/Roomcards/Reviewcards";

const Home = () => {
  return (
    <Container>
      <br />
      <Slider />
      <br />
      <PhotoGrid />
      <Service />
      <Reviewcards />
    </Container>
  );
};

export default Home;
