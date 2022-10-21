import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UseFetch } from "../../customHook/UseFetch";
import { Addon } from "../../types/types";
import "./bookingdetails.css";

interface ResAddon {
  data: {
    addOn_type: Addon;
  };
  loading: boolean;
}

interface State {
  no: number;
  checkin: Date;
  checkout: Date;
  roomType: string;
  roomPrice: number;
  key: string;
}

export const BookingDetails = () => {
  const location = useLocation();
  const { no, checkin, checkout, roomType, roomPrice, key }: State =
    location.state;
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const specialReqRef = useRef<HTMLTextAreaElement>(null);
  const couponRef = useRef<HTMLInputElement>(null);

  const [coupon, setCoupon] = useState("");

  const buttonRef = useRef<HTMLButtonElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  let total_price = roomPrice * no;

  const { data, loading }: ResAddon = UseFetch(
    `http://127.0.0.1:5000/booking/addon/`
  );

  const [selectCheck, setSelectCheck] = useState({
    addon: [],
  });

  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    Object.values(filtAddOn()).forEach((each: any) => {
      total_price += each;
    });
    setTotal(total_price);
  }, [selectCheck]);

  const type = data?.addOn_type;

  const handleAddon = (e) => {
    if (e.target.checked) {
      setSelectCheck({
        addon: [...selectCheck.addon, e.target.value],
      });
    }
    if (!e.target.checked) {
      setSelectCheck({
        addon: selectCheck.addon.filter((item) => item !== e.target.value),
      });
    }
  };

  const filtAddOn = () => {
    let a = {};
    selectCheck.addon.forEach((each) => {
      if (Object.keys(type).includes(each)) {
        a[each] = type[each];
      }
    });
    return a;
  };

  const handleCoupon = async (e) => {
    e.preventDefault();
    // const coupon = couponRef.current?.value;
    const res = await axios.post("http://127.0.0.1:5000/booking/coupon", {
      coupon,
    });

    if (res.data == "Invalid Coupon") {
      toast.error(res.data);
    } else {
      setDiscount(res.data);
      toast.success("Coupon Applied Successfully");
      couponRef.current.disabled = true;
      let price = total * (res.data / 100);
      setTotal(total - price);
      buttonRef.current.disabled = true;
    }
  };

  const addOnPrice = () => {
    let price = 0;
    Object.values(filtAddOn()).forEach((each: any) => {
      price += each;
    });
    return price;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const specialReq = specialReqRef.current?.value;

    if (name === "" || email === "") {
      toast.error("Please fill all the fields");
      return;
    }

    const selectedAddons = filtAddOn();
    console.log(selectedAddons);
    const data = {
      name,
      email,
      date: new Date(),
      specialReq,
      selectedAddons,
      no,
      checkin,
      checkout,
      roomType,
      roomPrice,
      couponId: coupon,
      discount: discount.toString(),
      total,
    };
    let res: any;

    if (key == "Hall") {
      res = await axios.post(`http://127.0.0.1:5000/booking/hall`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      res = await axios.post(`http://127.0.0.1:5000/booking/room`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (res.data.message == "Booking Successful") {
      toast.success("Booking Successful");
      navigate("/booking/success", {
        state: { data, key },
      });
    } else {
      toast.error("Booking Failed");
    }
  };

  return (
    <Form id="c" onSubmit={handleSubmit}>
      <div>
        <Container className="booking-details">
          <div id="container">
            {key == "Hall" ? (
              <h2 id="title-of-form">BOOK A HALL WITH US</h2>
            ) : (
              <h2 id="title-of-form">BOOK A ROOM WITH US</h2>
            )}
            <br />
            <div id="personal-details">
              <Form.Group id="name-group" className="mb-3">
                <Form.Label id="name-label">Name</Form.Label>
                <Form.Control id="name-id" type="text" ref={nameRef} required />
              </Form.Group>

              <Form.Group
                id="email-group"
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label id="email-label" htmlFor="email" required>
                  E-mail
                </Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  id="email"
                  name="visitor_email"
                  required={true}
                />
              </Form.Group>
            </div>
            <hr />

            <div id="details">
              <div>
                {key == "Hall" ? (
                  <Form.Group>
                    <Form.Label id="Hall-bk-date">
                      {checkin.toDateString()}
                    </Form.Label>
                  </Form.Group>
                ) : (
                  <Form.Group>
                    <Form.Label htmlFor="adult" id="checkin">
                      <p className="bold">Check In: </p>{checkin.toDateString()}
                    </Form.Label>
                    <Form.Label htmlFor="adult" id="checkout">
                      <p className="bold">Check Out: </p>{checkout.toDateString()}
                    </Form.Label>
                  </Form.Group>
                )}
              </div>

              <div>
                {key == "Hall" ? (
                  <div></div>
                ) : (
                  <Form.Group>
                    <Form.Label htmlFor="adult" id="room-qnty">
                    <p className="bold">No of rooms:</p> {no}
                    </Form.Label>
                  </Form.Group>
                )}

                <Form.Group>
                  <Form.Label htmlFor="adult" id="room-type">
                  <p className="bold">Type: </p>{roomType}
                  </Form.Label>
                </Form.Group>
              </div>

            </div>

            <hr />
            <Form.Group>
              <br />
              <Form.Label id="addons"> Select Addons: </Form.Label>
              {loading ? (
                <h1>Loading...</h1>
              ) : (
                <div id="addon-list">
                  {Object.entries(type).map(([key, value]) => (
                    <Form.Group style={{ display: "flex" }}>
                      <Form.Check
                        ref={checkRef}
                        className="checkbox-Form.Control"
                        id={key}
                        name={key}
                        value={key}
                        type="checkbox"
                        onChange={handleAddon}
                      />
                      <Form.Label className="checkbox" id="check-box">
                        {key} <br />{" "}
                        <p style={{ fontSize: "0.8rem" }}>₹ {value}</p>
                      </Form.Label>
                    </Form.Group>
                  ))}
                </div>
              )}
            </Form.Group>
            <hr />

            <Form.Group>
              <Form.Label htmlFor="message" id="special-req">
                Special Request?
              </Form.Label>
              <textarea
                ref={specialReqRef}
                id="message"
                name="visitor_message"
                placeholder="Tell us anything else that might be important."
                defaultValue={""}
              />
              <hr />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="coupon" id="coupon">
                Coupon Code:{" "}
              </Form.Label>
              <div id="coupon-section">
                {" "}
                <Form.Control
                  id="coupon-box"
                  type="text"
                  ref={couponRef}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <Button
                  id="coupon-btn"
                  ref={buttonRef}
                  disabled={coupon === ""}
                  onClick={handleCoupon}
                >
                  Apply
                </Button>
              </div>
            </Form.Group>
          </div>
        </Container>
      </div>

      <div>
        <Container className="booking-details">
          <div className="price-details">
            <table>
              <tr>
                <th>Details</th>
              </tr>
              <tr>
                <td><br /></td>
              </tr>
              <tr>
                <td>Room:</td>
                <td>{no} x {roomPrice/no}</td>
              </tr>
              <tr>
                <td>Addons:</td>
                <td>{addOnPrice()}</td>
              </tr>
              <tr>
                <td><hr /></td>
                <td><hr /></td>
              </tr>
              <tr>
                <td>Discount:</td>
                <td>{discount}%</td>
              </tr>
              <tr>
                <td><hr /></td>
                <td><hr /></td>
              </tr>
              <tr style={{fontSize:"1.3rem"}}>
                <td>Total:</td>
                <td>₹{total}</td>
              </tr>
              <tr>
                <td><br /></td>
              </tr>
            </table>
              <Button variant="primary" type="submit" id="submit-booking-btn" >
                Book Now
              </Button>
          </div>
        </Container>
      </div>
    </Form>
  );
};

export default BookingDetails;

{/* <Container className="booking-details">
      <div className="price-details">
        <table>
          <tr>
            <th>Details</th>
          </tr>
          <tr>
            <td><br /></td>
          </tr>
          <tr>
            <td>Room:</td>
            <td>{roomPrice}</td>
          </tr>
          <tr>
            <td>Addons:</td>
            <td>{addOnPrice()}</td>
          </tr>
          <tr>
            <td><hr /></td>
            <td><hr /></td>
          </tr>
          <tr>
            <td>Discount:</td>
            <td>{discount}%</td>
          </tr>
          <tr>
            <td><hr /></td>
            <td><hr /></td>
          </tr>
          <tr style={{fontSize:"1.3rem"}}>
            <td>Total:</td>
            <td>₹{total}</td>
          </tr>
          <tr>
            <td><br /></td>
          </tr>
        </table>
          <Button variant="primary" type="submit" id="submit-booking-btn" >
            Book Now
          </Button>
      </div>
    </Container> */}
