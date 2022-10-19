import React, { useEffect, useState } from "react";

import { PhotoSlider } from "../PhotoSlider/PhotoSlider";

import { Room } from "../../types/types";
import { Link} from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { toast } from "react-toastify";

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
    <MDBContainer
      className="shadow-4-strong"
      style={{
        margin: "1rem auto",
        padding: "1rem",
      }}
    >
      <MDBRow>
        <MDBCol size="md" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}>
          <PhotoSlider images={Object.values(roomData.room_images)}/>
        </MDBCol>

        <MDBCol md="6">
          <h3>{roomData.room_type}</h3>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Max Occupancy:
            </span>{" "}
            {roomData.room_max_occ}
          </p>
          <p>{roomData.room_desc}</p>
          <div style={{ display: "flex" }}>
            <span style={{
                fontWeight: "bold",
              }}>Amenities: </span>
            {roomData?.room_amenties.map((room) => (
              <p style={{ marginRight: "5px", marginLeft:"5px" }}>✓ {room}</p>
            ))}
          </div>

        </MDBCol>

        <MDBCol
          size="md"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft:"8rem"
          }}
        >
          <div>
            <p style={{fontSize: "0.8rem", marginBottom:0}}>Per night for one room</p>
            <p style={{fontSize: "1.5rem", fontWeight:"bold"}}>₹ {roomPrice}/-</p>
          </div>

          {check() ? (
            <>

              <div >
                <div  style={{
                  display: "flex",
                  alignItems:'center',
                }}>

                <label>Rooms :</label>
                <button className=" add_subtract" onClick={handleClickMinus}>-</button>
                <span style={{fontSize: "0.8rem"}}>{no}</span>
                <button className=" add_subtract" onClick={handleClickPlus}>+</button>
                </div>
              <div>
                <p style={{
                  fontSize: "1rem",
                  marginTop:'5px'
                }}>Total: ₹ {roomPrice * no}</p>
              </div>
              </div>

              <div>
                <p
                  id="booknow"
                  style={{
                    fontWeight: "bold",
                  }}
                >
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
                    style={{
                      fontSize: "1rem",
                      textDecoration: "none",
                      color: "white",
                      backgroundColor: "#1E90FF",
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                    }}
                  >
                    Book Now
                  </Link>
                </p>
              </div>

            </>

          ) : (

            <div
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Sold Out
            </div>
          )}

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Roomcards;
