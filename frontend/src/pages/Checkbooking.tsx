import React, { ReactEventHandler, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import DisplayDetails from "../components/DisplayDetails/DisplayDetails";
import { Booking } from "../types/types";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import InputGroup from 'react-bootstrap/InputGroup';
import Stack from "react-bootstrap/Stack";
import axios from "axios";

interface Res {
  data: Booking[];
  loading: boolean;
}

export const Checkbooking = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [bookingDetails, setBookingDetails] = React.useState<Booking[]>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [del, setDel] = React.useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = emailRef.current.value;
    setLoading(true);
    const { data }: Res = await axios.get(
      `http://127.0.0.1:5000/reservation/get/${email}`
    );
    setBookingDetails(data);
    console.log(data);
    setLoading(false);
    setClicked(true);
  };

  useEffect(() => {
      const a = async() => {
        const email = emailRef.current.value;
    setLoading(true);
    const { data }: Res = await axios.get(
      `http://127.0.0.1:5000/reservation/get/${email}`
    );
    setBookingDetails(data);
    console.log(data);
    setLoading(false);
      }
      a(); 
  },[del,setDel]) 

  return (
    <Container style={{ minHeight: "100vh" }}>
      <br />
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          ref={emailRef}
          type="email"
          className="me-auto"
          placeholder="Enter Email"
        />
        <Button onClick={handleSubmit} type="button" variant="secondary">
          Check
        </Button>
      </Stack>
      <br />
      {clicked && (
        <div>
          {loading ? (
            <div></div>
          ) : (
            <div
              style={{
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <DisplayDetails bookingDetails={bookingDetails} setDel={setDel} />
            
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default Checkbooking;
