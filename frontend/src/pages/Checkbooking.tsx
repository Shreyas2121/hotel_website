import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import DisplayDetails from "../components/DisplayDetails/DisplayDetails";
import { Booking, BookingHall } from "../types/types";
import Stack from "react-bootstrap/Stack";
import axios from "axios";

import roomsBackground from "../assets/images/about_banner.jpg";

import "../components/parallaxImage.css";
import DisplayDetailsHall from "../components/DisplayDetails/DisplayDetailsHall";

interface Res {
  data: Booking[];
  loading: boolean;
}

interface Res1 {
  data: BookingHall[];
  loading: boolean;
}

export const Checkbooking = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [bookingDetails, setBookingDetails] = React.useState<Booking[]>(null);
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
      `http://usehotelbackend-env.eba-x3zhkiev.ap-northeast-1.elasticbeanstalk.com/reservation/get/room/${email}`
    );
    setBookingDetails(data);
    const res: Res1 = await axios.get(
      `http://usehotelbackend-env.eba-x3zhkiev.ap-northeast-1.elasticbeanstalk.com/reservation/get/hall/${email}`
    );
    setBookingDetails1(res.data);
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
        `http://usehotelbackend-env.eba-x3zhkiev.ap-northeast-1.elasticbeanstalk.com/reservation/get/room/${email}`
      );
      setBookingDetails(data);
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
                  <h2>
                    Room bookings Found for E-mail: {emailRef.current.value}
                  </h2>

                  {bookingDetails.length ? (
                    <DisplayDetails
                      bookingDetails={bookingDetails}
                      setDel={setDel}
                    />
                  ) : (
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      No Bookings Found for this email: {emailRef.current.value}
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
                  <h2>
                    Room bookings Found for E-mail: {emailRef.current.value}
                  </h2>

                  {bookingDetails.length ? (
                    <DisplayDetailsHall
                      bookingDetails1={bookingDetails1}
                      setDel={setDel}
                    />
                  ) : (
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      No Bookings Found for this email: {emailRef.current.value}
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
