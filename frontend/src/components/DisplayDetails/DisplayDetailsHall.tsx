import React from "react";
import { Button } from "react-bootstrap";
import { Booking, BookingHall } from "../../types/types";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./DisplayDetails.css";
import { Checkmark } from "react-checkmark";

interface Props {
  bookingDetails1: BookingHall[];
  setDel: React.Dispatch<React.SetStateAction<boolean>>;
}

const DisplayDetailsHall = ({ bookingDetails1, setDel }: Props) => {
  console.log(bookingDetails1);
  const handleSubmit = async (id: string) => {
    const res = await axios.delete(
      `http://usehotelbackend-env.eba-x3zhkiev.ap-northeast-1.elasticbeanstalk.com/reservation/hall/${id}`
    );
    console.log(res);
    if (res.status === 200) {
      setDel(true);
      toast.success("Reservation deleted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  const check_ongoin = (checkin: string, checkout: string) => {
    const checkin_date = new Date(checkin);
    const checkout_date = new Date(checkout);
    const today = new Date();
    if (today >= checkin_date && today <= checkout_date) {
      return true;
    } else {
      return false;
    }
  };

  const check = (date: string) => {
    const newDate = new Date(date);
    const currentDate = new Date();
    if (newDate.getFullYear() === currentDate.getFullYear()) {
      if (newDate.getMonth() <= currentDate.getMonth()) {
        if (newDate.getDate() <= currentDate.getDate()) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else if (newDate.getFullYear() < currentDate.getFullYear()) {
      return true;
    }
  };

  return (
    <div id="table-div">
      <h5>
        Hall bookings Found for E-mail:
      </h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Hall Type</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookingDetails1.map((booking) => (
            <>
              {booking._id ? (
                <tr>
                  <td>{booking.booking_username}</td>
                  <td>{new Date(booking.booking_check_in).toDateString()}</td>
                  <td>{new Date(booking.booking_check_out).toDateString()}</td>
                  <td>{booking.booking_hall_type}</td>

                  <td>{booking.booking_total}</td>
                  <td>
                    {check(booking.booking_check_in) ? (
                      <span>
                        {check_ongoin(
                          booking.booking_check_in,
                          booking.booking_check_out
                        ) ? (
                          <span>On-going</span>
                        ) : (
                          <span>
                            <Checkmark size="40px" />
                          </span>
                        )}
                      </span>
                    ) : (
                      <span>Incomplete</span>
                    )}
                  </td>
                  <td>
                    {check(booking.booking_check_in) ? (
                      <span>
                        {check_ongoin(
                          booking.booking_check_in,
                          booking.booking_check_out
                        ) ? (
                          <span id="Ongoing">
                            --------------------------------
                          </span>
                        ) : (
                          <span>
                            <Button id="AddReview">
                              <Link
                                to="/addreview"
                                state={{
                                  name: booking.booking_username,
                                  email: booking.booking_useremail,
                                }}
                              >
                                Add Review
                              </Link>
                            </Button>
                          </span>
                        )}
                      </span>
                    ) : (
                      <Button
                        onClick={(e) => handleSubmit(booking._id)}
                        id="Cancel_Booking"
                      >
                        Cancel Booking
                      </Button>
                    )}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td>No Booking</td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayDetailsHall;
