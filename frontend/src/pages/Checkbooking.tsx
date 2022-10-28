import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import DisplayDetails from "../components/DisplayDetails/DisplayDetails";
import { BookingRoom, BookingHall } from "../types/types";
import Stack from "react-bootstrap/Stack";
import axios from "axios";

import roomsBackground from "../assets/images/about_banner.jpg";

import "../components/parallaxImage.css";
import DisplayDetailsHall from "../components/DisplayDetails/DisplayDetailsHall";

interface Res {
  data: BookingRoom[];
  loading: boolean;
}

interface Res1 {
  data_hall: BookingHall[];
  loading: boolean;
}

export const Checkbooking = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [bookingDetails, setBookingDetails] = React.useState<BookingRoom[]>(null);
  const [bookingDetails1, setBookingDetails1] =
    React.useState<BookingHall[]>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [del, setDel] = React.useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = emailRef.current.value;
    setLoading(true);
    const { data }: Res = await axios.get(
      `http://127.0.0.1:5000/api/booking/get/room/${email}`
    );
    setBookingDetails(data);
    const res: Res1 = await axios.get(
      `http://127.0.0.1:5000/api/booking/get/hall/${email}`
    );
    setBookingDetails1(res.data_hall);
    setLoading(false);
    setClicked(true);
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const a = async () => {
      const email = emailRef.current.value;
      setLoading(true);
      const { data }: Res = await axios.get(
        `http://127.0.0.1:5000/api/booking/get/room/${email}`
      );
      setBookingDetails(data);
      const { data_hall }: Res1 = await axios.get(
        `http://127.0.0.1:5000/api/booking/get/hall/${email}`
      );
      setBookingDetails1(data_hall);
      setLoading(false);
    };
    a();
  }, [del, setDel]);

  return (
    <header>
      <div
        className="p-5 text-center bg-image parallax"
        style={{ backgroundImage: `url(${roomsBackground})`, height: "100vh" }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">YOUR BOOKINGS</h1>
            </div>
          </div>
        </div>

        <Stack
          direction="horizontal"
          gap={3}
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "600px",
            padding: "2rem",
          }}
        >
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
      </div>

      <div>
        {clicked && (
          <Container>
            <br />
            <br />
            {loading ? (
              <div></div>
            ) : (
              <div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {bookingDetails?.length ? (
                    <DisplayDetails
                      bookingDetails={bookingDetails}
                      setDel={setDel}
                    />
                  ) : (
                    <div
                      style={{
                        marginTop: "2rem",
                        color: "red",
                        height: "5rem",
                      }}
                    >
                      <h5>No Room Bookings Found for this email: {emailRef.current.value}</h5>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {bookingDetails1?.length ? (
                    <DisplayDetailsHall
                      bookingDetails1={bookingDetails1}
                      setDel={setDel}
                    />
                  ) : (
                    <div
                      style={{
                        marginTop: "2rem",
                        color: "red",
                        height: "5rem",
                      }}
                    >
                      <h5>No Hall Bookings Found for this email: {emailRef.current.value}</h5>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Container>
        )}
      </div>
    </header>
  );
};

export default Checkbooking;
