import "./grid.css";

import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

const PhotoGrid = () => {
  return (
    <MDBContainer style={{ width: "80%", margin: "auto", padding: "8%" }}>
      <div
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        <MDBTypography tag="h1" className="mb-0">
          Accomadation
        </MDBTypography>
        <MDBTypography tag="small" className="text-muted">
          We all live in an age that belongs to the young at heart. Life that is
          becoming extremely fast.
        </MDBTypography>
      </div>
      <MDBRow
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        className="mb-3"
      >
        <MDBCol size="4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://media-cdn.tripadvisor.com/media/photo-s/0b/f2/bc/a2/single-room-has-a-single.jpg"
                // fluid
                className="photogridimages"
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Basic</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYJu5rTwm2LBvvdtkKuc10T-qFXTta4HLvJAGf55mG7Qx1cTjB"
                // fluid
                className="photogridimages"
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Suite</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmDDeqwsXamzfNfzDiwaYDvtjCmeO2UTGJKXsaC_Q0LvjC2alr"
                // fluid
                className="photogridimages"
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Delux</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br />

      <MDBRow
        className="mb-3"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <MDBCol size="4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://cdn0.weddingwire.in/vendor/0450/3_2/960/jpeg/setup2_15_80450-162745330529859.jpeg"
                // fluid
                className="photogridimages"
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Wedding Hall</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://media.istockphoto.com/photos/conference-room-with-a-long-table-and-lots-of-chairs-picture-id98395721?k=20&m=98395721&s=612x612&w=0&h=aLPhhimrM4OYCsoFiK2EbMQqgKvNVSkPBl1M9Od0BYc="
                // fluid
                className="photogridimages"
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Conference Hall</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size="4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://www.chennaiconventioncentre.com/wp-content/uploads/2019/03/ccc-blog-825x412.jpg"
                // fluid
                className="photogridimages"
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Birthday Party</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PhotoGrid;
