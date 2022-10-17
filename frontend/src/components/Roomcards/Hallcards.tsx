import React, { LinkHTMLAttributes, useState } from "react";

import Card from "react-bootstrap/Card";
import { PhotoSlider } from "../PhotoSlider/PhotoSlider";

import { Hall } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


interface Props {
  hallData: Hall;
  checkin: Date;
  bookedHalls: Array<string>;
}

const Hallcards = ({ hallData, checkin, bookedHalls }: Props) => {
  const hallType = hallData.hall_type;
  const hallPrice = Number(hallData.hall_price);

  const linkRef = React.useRef<any>(null);

  const check = (type: string) => {
    const status = bookedHalls.includes(type) ? true : false;
    // linkRef.current!.innerText = status ? "Booked" : "Available";
    return status;
  };

  return (
    // <Card style={{ width: "25%", margin: "1rem" }}>
    //   <div style={{ margin: "0.5rem" }}>
    //     <PhotoSlider images={hallData.hall_image} />
    //   </div>
    //   <Card.Body>
    //     <Card.Title>{hallData.hall_type}</Card.Title>
    //     <Card.Text>{hallData.hall_price}</Card.Text>
    //     <Card.Text>{hallData.hall_desc}</Card.Text>
    //     <Card.Text>{hallData.hall_max_occ}</Card.Text>
    //     <Card.Text>{hallData.hall_desc}</Card.Text>
    //     <Card.Text>{hallData.hall_amenties}</Card.Text>
    //     <div>
          // <p
          //   id="booknow"
          //   style={{
          //     fontWeight: "bold",
          //     cursor: "pointer",
          //     textAlign: "center",
          //     fontSize: "1.5rem",
          //     margin: "0.5rem",
          //   }}
          // >
          //   {check(hallType) ? (
          //     <p
          //       style={{
          //         color: "red",
          //         fontWeight: "bold",
          //         textAlign: "center",
          //         backgroundColor: "grey",
          //         borderRadius: "0.5rem",
          //       }}
          //     >
          //       Sold Out
          //     </p>
          //   ) : (
          //     <Link
          //       ref={linkRef}
          //       to="/booking"
          //       state={{
          //         no: 1,
          //         checkin: checkin,
          //         checkout: new Date(),
          //         roomType: hallType,
          //         roomPrice: hallPrice,
          //         key: "Hall",
          //       }}
          //       style={{
          //         textDecoration: "none",
          //         color: "white",
          //         backgroundColor: "green",
          //         padding: "0.5rem",
          //       }}
          //     >
          //       Book Now
          //     </Link>
          //   )}
          // </p>
    //     </div>
    //   </Card.Body>
    // </Card>

    <MDBContainer className="shadow-4-strong" style={{
      margin:"1rem auto",
      // border:"2px dashed black",
      // backgroundColor:"grey",
      padding:"1rem",
      // borderRadius:"1rem",
      }}>
    <MDBRow>
      <MDBCol size='md'>
      <PhotoSlider images={Object.values(hallData.hall_image)} />
      </MDBCol>
      <MDBCol md="6">
        <h3>{hallData.hall_type}</h3>
        <p>{hallData.hall_desc}</p>
        <p>{hallData.hall_max_occ}</p>
        <div style={{display:"flex"}}>
        {hallData?.hall_amenties.map((hall) => (
              <p style={{marginRight:"5px"}}>{hall}</p>
            ))}
        </div>
      </MDBCol>
      <MDBCol size='md' style={{
        alignSelf:"center"
      }}>
      <p
            id="booknow"
            style={{
              fontWeight: "bold",
              cursor: "pointer",
              textAlign: "center",
              fontSize: "1.5rem",
              margin: "0.5rem",
            }}
          >
            {check(hallType) ? (
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "grey",
                  borderRadius: "0.5rem",
                }}
              >
                Sold Out
              </p>
            ) : (
              <Link
                ref={linkRef}
                to="/booking"
                state={{
                  no: 1,
                  checkin: checkin,
                  checkout: new Date(),
                  roomType: hallType,
                  roomPrice: hallPrice,
                  key: "Hall",
                }}
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "green",
                  padding: "0.5rem",
                }}
              >
                Book Now
              </Link>
            )}
          </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>

  );
};

export default Hallcards;
