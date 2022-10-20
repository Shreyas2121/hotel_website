import React, { useEffect, useState } from "react";

import { PhotoSlider } from "../PhotoSlider/PhotoSlider";

import { Room } from "../../types/types";
import { Link} from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { toast } from "react-toastify";

import personicon from "../../../public/icons8-person-64.png";
import tick from "../../../public/icons8-tick-box-26.png";
import area from "../../../public/icons8-surface-48.png";

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

          <div style={{display:"flex", justifyContent:"space-between"}}>
          <p>
              <img src={personicon} alt="personicon" style={{width:"1.5rem", height:"1.5rem"}}/>
              {roomData.room_max_occ}
          </p>

          <p>
            <span
              style={{
                fontWeight: "bold",
                display:"flex"
              }}
            >
              <img src={area} style={{height:"2rem"}}/>
              <p style={{fontSize:"0.8rem"}}>{roomData.room_area}</p>
            </span>
          </p>

          </div>

          <p>{roomData.room_desc}</p>
          
          <div style={{ display: "flex" }}>
            <span style={{
              fontWeight: "bold",
            }}>
              Amenities:
            </span>

            {roomData?.room_amenties.map((room) => (
              <p style={{ marginRight: "5px", marginLeft:"5px" }}><img src={tick} style={{height:"1rem",marginBottom:"0.3rem"}}/> {room}</p>
            ))}

          </div>

        </MDBCol>

        <MDBCol className="card-column-three" size="md">

            <div>
              <p style={{fontSize: "0.8rem", marginBottom:0}}>Per night for one room</p>
              <p style={{fontSize: "1.5rem", fontWeight:"bold"}}>₹ {roomPrice}/-</p>
            </div>

          {check() ? (
            <>
              <div>

                <div className="col-3-div-2">
                  <label>Rooms :</label>
                  <button className="add_subtract" id="addButton" onClick={handleClickMinus}>-</button>
                  <span style={{fontSize: "0.8rem"}}>{no}</span>
                  <button className="add_subtract" id="subtractButton" onClick={handleClickPlus}>+</button>
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
                    Book Now
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