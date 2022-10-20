import React, { useEffect, useState } from "react";

import { PhotoSlider } from "../PhotoSlider/PhotoSlider";

import { Hall } from "../../types/types";
import { Link } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import personicon from "../../../public/icons8-user-groups-50.png";
import tick from "../../../public/icons8-tick-box-26.png";

interface Status {
  Wedding: number;
  Conference: number;
  Birthday: number;
}

interface Props {
  hallData: Hall;
  checkin: Date;
  checkout: Date;
  status: Status;
}

const Hallcards = ({ hallData, checkin, checkout, status }: Props) => {
  
  const [no, setNo] = useState(1);
  const [avaiRooms, setAvaiRooms] = useState(0);
  
  const hallType = hallData.hall_type;
  const hallPrice = Number(hallData.hall_price);

  // const linkRef = React.useRef<any>(null);

  // const check = (type: string) => {
  //   const status = bookedHalls.includes(type) ? true : false;
  //   return status;
  // };

  const check = () => {
    let keys = Object.keys(status);
    if (keys.includes(hallType)) {
      if (status[hallType] > 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const check1 = () => {
    Object.entries(status).forEach(([key, value]) => {
      if (hallType === key) {
        setAvaiRooms(value);
      }
    });
  };

  useEffect(() => {
    check1();
  }, []);

  return (
  <MDBContainer className="shadow-4-strong room-container">
      <MDBRow>

        <MDBCol size="md" className="card-column-one">
          <PhotoSlider images={Object.values(hallData.hall_image)} />
        </MDBCol>

        <MDBCol md="6">
          <h3>{hallData.hall_type}</h3>

          <p>
            <img src={personicon} style={{width:"1.5rem", height:"1.2rem", marginBottom:"0.2rem",marginRight:"0.3rem"}}/>
            {hallData.hall_max_occ} (Max Occupancy)
          </p>

          <p>{hallData.hall_desc}</p>

          <div style={{ display: "flex" }}>
            <span style={{
                fontWeight: "bold",
              }}>Amenities: </span>

            {hallData?.hall_amenties.map((room) => (
              <p style={{ marginRight: "5px", marginLeft:"5px" }}><img src={tick} style={{height:"1rem",marginBottom:"0.3rem"}}/> {room}</p>
            ))}

          </div>

        </MDBCol>

        <MDBCol size="md" className="card-column-three">
          <div>
            <p style={{fontSize: "0.8rem", marginBottom:0}}>Per day for a hall</p>
            <p style={{fontSize: "1.5rem", fontWeight:"bold"}}>₹ {hallPrice}/-</p>
          </div>

          {check() ? (
            <>
              <div>
                <p className="total-price">
                  Total: ₹ {hallPrice}
                </p>
              </div>

              <div>
                <p>
                  <Link
                    to="/booking"
                    state={{
                      no,
                      checkin,
                      checkout,
                      roomType:hallType,
                      roomPrice:hallPrice,
                      key: "Hall",
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
              Not Available
            </div>
          )}

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Hallcards;