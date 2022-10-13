import React from "react";
import {Container}  from "react-bootstrap";
import Service from "../components/services/Service";
import RenderHall from "../components/image_renderer_hall/RenderHall";

const Halls = () => {
  return (
  <div style={{ minHeight: "100vh" }}>
  <Container>
  <br />
  <RenderHall />
  <br />

  </Container>
  </div>

  );
};

export default Halls;
