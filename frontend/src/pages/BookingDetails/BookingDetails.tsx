import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UseFetch } from "../../customHook/UseFetch";
import { Addon } from "../../types/types";
// import { Addon } from "../Addons/Addon";
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
    // setTotal();
  }, [selectCheck]);

  const type = data?.addOn_type;
  // const ent = Object.entries(type);

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
    const coupon = couponRef.current?.value;
    const res = await axios.post("http://127.0.0.1:5000/booking/coupon", {
      coupon,
    });

    if (res.data == "Invalid Coupon") {
      alert(res.data);
    } else {
      setDiscount(res.data);
      let price = total * (res.data / 100);
      setTotal(total - price);
      buttonRef.current.disabled = true;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const specialReq = specialReqRef.current?.value;

    const selectedAddons = filtAddOn();
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
      couponId: couponRef.current?.value,
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
      navigate("/");
    } else {
      toast.error("Booking Failed");
    }
  };

  return (
    <Container
      style={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              gap: "5px",
            }}
          >
            <Form.Group
              style={{
                width: "50%",
              }}
              className="mb-3"
            >
              <Form.Label
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Name
              </Form.Label>
              <Form.Control type="text" required={true} ref={nameRef} />
            </Form.Group>

            <Form.Group
              style={{
                width: "50%",
              }}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
                htmlFor="email"
              >
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
          {key == "Hall" ? (
            <div></div>
          ) : (
            <Form.Group>
              <Form.Label htmlFor="adult">No of rooms : {no}</Form.Label>
            </Form.Group>
          )}

          {key == "Hall" ? (
            <Form.Group>
              <Form.Label>{checkin.toDateString()}</Form.Label>
            </Form.Group>
          ) : (
            <Form.Group>
              <Form.Label htmlFor="adult">
                Check In : {checkin.toDateString()}
              </Form.Label>
              <br />
              <Form.Label htmlFor="adult">
                Check Out : {checkout.toDateString()}
              </Form.Label>
            </Form.Group>
          )}

          <Form.Group>
            <Form.Label htmlFor="adult">Type : {roomType}</Form.Label>
          </Form.Group>
          <hr />
          <Form.Group>
            <br />
            <Form.Label> Select Addons: </Form.Label>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                {Object.entries(type).map(([key, value]) => (
                  <Form.Group>
                    <Form.Check
                      ref={checkRef}
                      className="checkbox-Form.Control"
                      id={key}
                      name={key}
                      value={key}
                      type="checkbox"
                      onChange={handleAddon}
                    />
                    <Form.Label className="checkbox">
                      {key} : {value}
                    </Form.Label>
                  </Form.Group>
                ))}
              </div>
            )}
          </Form.Group>
          <hr />

          <Form.Group>
            <Form.Label htmlFor="message">Special Request?</Form.Label>
            <textarea
              style={{
                width: "100%",
                height: "100px",
                padding: "12px 20px",
                boxSizing: "border-box",
                border: "2px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#f8f8f8",
                resize: "none",
              }}
              ref={specialReqRef}
              id="message"
              name="visitor_message"
              placeholder="Tell us anything else that might be important."
              defaultValue={""}
            />
            <hr />
          </Form.Group>

          <Form.Group
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Form.Label htmlFor="coupon">Coupon Code: </Form.Label>
            <Form.Control
              style={{
                width: "50%",
              }}
              type="text"
              ref={couponRef}
            />
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
                marginTop: "10px",
              }}
              ref={buttonRef}
              onClick={handleCoupon}
            >
              Apply
            </Button>
          </Form.Group>
          <hr />

          <Form.Group>
            <Form.Text
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "50%",
              }}
            >
              Total: {total}
            </Form.Text>
          </Form.Group>
          <hr />
          <br />
          <Button onClick={handleSubmit} variant="primary" type="button">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default BookingDetails;
