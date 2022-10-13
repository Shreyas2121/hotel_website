import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
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
    checkin: Date;
    hallType: string;
    hallPrice: number;
  }

export const BookingDetailsHall = () => {
    const location = useLocation();
    const { checkin, hallType, hallPrice }: State = location.state;
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const specialReqRef = useRef<HTMLTextAreaElement>(null);
    const couponRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const checkRef = useRef<HTMLInputElement>(null);

    console.log(checkin, hallType, hallPrice);

    let total_price = hallPrice;
    console.log(total_price);

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
            console.log(typeof each);
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
          checkin,
          hallType,
          hallPrice,
          couponId: couponRef.current?.value,
          discount: discount.toString(),
          total,
        };
    
        const res = await axios.post(`http://127.0.0.1:5000/booking/hall`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.data == "Booking Successful") {
          alert(res.data);
        } else {
          alert(res.data);
        }
      };

      return (
        <div className="bookingdetails_container">
          <form>
            <div className="elem-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                ref={nameRef}
                id="name"
                name="visitor_name"
                placeholder="John Doe"
                pattern="[A-Z\sa-z]{3,20}"
                // required=""
              />
            </div>
            <div className="elem-group">
              <label htmlFor="email">Your E-mail</label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="visitor_email"
                placeholder="john.doe@email.com"
                // required=""
              />
            </div>
            <hr />

            <div className="elem-group inlined">
              <label htmlFor="checkin-date">Date : </label>
              <p>
                {checkin.getDate()}/{checkin.getMonth()}/{checkin.getFullYear()}
              </p>
            </div>
            <div className="elem-group">
              <label htmlFor="room-selection">Hall Type</label>
              <p>{hallType}</p>
            </div>
            <hr />
    
            {/* <Addon /> */}
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <div className="checkbox-container">
                {Object.entries(type).map(([key, value]) => (
                  <div>
                    <input
                      ref={checkRef}
                      className="checkbox-input"
                      id={key}
                      name={key}
                      value={key}
                      type="checkbox"
                      onChange={handleAddon}
                    />
                    <label className="checkbox">
                      {key} : {value}
                    </label>
                  </div>
                ))}
              </div>
            )}
    
            <div className="elem-group">
              <label htmlFor="message">Special Request?</label>
              <textarea
                ref={specialReqRef}
                id="message"
                name="visitor_message"
                placeholder="Tell us anything else that might be important."
                // required=""
                defaultValue={""}
              />
            </div>
    
            <div>
              <span>{total}</span>
              <br />
              {/* <span>{discountedTotal}</span> */}
            </div>
    
            <div>
              <input type="text" ref={couponRef} />
              <button ref={buttonRef} onClick={handleCoupon}>
                Apply
              </button>
            </div>
    
            <button type="button" onClick={handleSubmit}>
              Book The Rooms
            </button>
          </form>
        </div>
      );
    };
    
export default BookingDetailsHall;