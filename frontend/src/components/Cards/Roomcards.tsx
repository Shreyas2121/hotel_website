import React, { useEffect, useState } from "react";

import { PhotoSlider } from "../PhotoSlider/PhotoSlider";

import { Room } from "../../types/types";
import { Link} from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { toast } from "react-toastify";

import personicon from "../../../public/icons8-person-64.png";
import tick from "../../../public/icons8-tick-box-26.png";
import area from "../../../public/icons8-surface-48.png";

import "./roomcards.css";

interface Status {
  Basic: number;
  Suite: number;
  Deluxe: number;
}

interface Props {
  roomData: Room;
  checkin: Date;
  checkout: Date;
  status: Status;
}

const Roomcards = ({ roomData, checkin, checkout, status }: Props) => {
  const [no, setNo] = useState(1);
  const [avaiRooms, setAvaiRooms] = useState(0);
  const roomType = roomData.room_type;
  const roomPrice = Number(roomData.room_price);

  const check = () => {
    let keys = Object.keys(status);
    if (keys.includes(roomType)) {
      if (status[roomType] > 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const check1 = () => {
    Object.entries(status).forEach(([key, value]) => {
      if (roomType === key) {
        setAvaiRooms(value);
      }
    });
  };

  const handleClickMinus = () => {
    if (no > 1) {
      setNo((prev) => prev - 1);
    } else {
      toast.error("Please select atleast one room");
    }
  };

  const handleClickPlus = () => {
    if (no < avaiRooms) {
      setNo((prev) => prev + 1);
    } else {
      toast.error("No more rooms available");
    }
  };

  useEffect(() => {
    check1();
  }, []);

  return (
    <MDBContainer className="shadow-4-strong room-container">
      <MDBRow>

        <MDBCol className="card-column-one" size="md">
            <PhotoSlider images={Object.values(roomData.room_images)}/>
        </MDBCol>

        <MDBCol md="6">
          <h3>{roomData.room_type}</h3>

          <div className="max-occupancy-div">
            <p>
                <img src={personicon} className="max-occupancy"/>
                {roomData.room_max_occ} (Max Occupancy)
            </p>

            <div className="display-flex">
              <p className="room-area">{roomData.room_area}</p>
              <img src={area} style={{height:"1.5rem"}}/>
            </div>

          </div>

          <p>{roomData.room_desc}</p>
          
          <div className="display-flex">
            <span className="amenities-span">
              Amenities:
            </span>

            {roomData?.room_amenties.map((room) => (
              <p className="room-para"><img src={tick} className="tick-img"/> {room}</p>
            ))}

          </div>

        </MDBCol>

        <MDBCol className="card-column-three" size="md">

            <div>
              <p className="per-night">Per night for one room</p>
              <p className="room-price">₹ {roomPrice}/-</p>
            </div>

          {check() ? (
            <>
              <div>

                <div className="col-3-div-2">
                  <label>Rooms :</label>
                  <div className="plusminus">
                    <button className="add_subtract" id="addButton" onClick={handleClickMinus}>-</button>
                    <span style={{fontSize: "0.8rem", margin:"0.5rem"}}>{no}</span>
                    <button className="add_subtract" id="subtractButton" onClick={handleClickPlus}>+</button>
                  </div>
                </div>

                <div>
                  <p className="total-price">
                    Total: ₹ {roomPrice * no}
                  </p>
                </div>

              </div>

              <div>
                <p>
                  <Link
                    to="/booking"
                    state={{
                      no,
                      checkin,
                      checkout,
                      roomType,
                      roomPrice,
                      key: "Room",
                    }}
                    className="link-style"
                    id="booknow"
                  >
                    Select Room
                  </Link>
                </p>
              </div>
            </>

          ) : (

            <div className="sold-out">
              Sold Out
            </div>
          )}

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Roomcards;