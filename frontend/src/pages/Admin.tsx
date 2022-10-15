import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import "./admin.css";?

const Admin = () => {
  return (
    <Container>
      <br />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Room Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>-</option>
            <option value="1">Basic</option>
            <option value="2">Suite</option>
            <option value="3">Delux</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Max Occupancy</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Admin;
