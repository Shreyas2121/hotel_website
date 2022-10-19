import "./roomcards.css";
import { Button, Carousel } from "react-bootstrap";
import "./slider.css"
import { UseFetch } from "../../customHook/UseFetch";
import {Review} from "../../types/types";
import { Rating } from '@mui/material';
import { useNavigate } from "react-router-dom";


import Person from "../../assets/images/person.png";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";


interface Res {
    data: {
      Reviews: Review[];
    };
    loading: boolean;
  }

const Reviewcards = () => {
    const { data, loading }: Res = UseFetch("http://127.0.0.1:5000/reviews");

    const navigate = useNavigate();

    const NavigateToAddReview = () => {
      navigate("/addreview/");
    };

    return (
      <MDBContainer fluid style={{
        height: "50rem",
        // backgroundColor: "#E0FFFF",
      }}>
        <br/>
        <br/>
        <div style={{
          textAlign: "center",
          padding: "40px",
        }}>
          <MDBTypography tag='h1' className='mb-0' style={{color:"black", fontWeight:"bold"}}>
            Testimonial from our customers
          </MDBTypography>
          <MDBTypography tag='small' className='text-muted'>
            Who are in extremely love with eco friendly system
          </MDBTypography>
        </div>

        <div>

        <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
        {/* <!-- Controls --> */}

        <Carousel>
                {loading ? (
              <h1>Loading...</h1>
              
          ) : (

              data?.Reviews?.map((review) => (
                <Carousel.Item >
              <div className="carousel-inner py-4">
                <div className="carousel-item active">
                  <div className="container" style={{
                    height:"25rem",
                    }}>
                    <div className="row">
                      
                      <div className="col-lg-3 shadow-4-strong" style={{
                      }}>
                        <img className="rounded-circle shadow-1-strong mb-4"
                          src={Person} alt="avatar"
                          style={{width: "20%"}} />
                        <h5 className="mb-3">{review.name}</h5>
                        <p><Rating name="read-only" value={review.rating} readOnly /> </p>
                        <p className="text-muted">
                          <i className="fas fa50%-quote-left pe-2"></i>
                         {review.reviews}
                        </p>
                      </div>

                      <div className="col-lg-3 shadow-4-strong">
                        <img className="rounded-circle shadow-1-strong mb-4"
                          src={Person} alt="avatar"
                          style={{width: "20%"}} />
                        <h5 className="mb-3">{review.name}</h5>
                        <p><Rating name="read-only" value={review.rating} readOnly /> </p>
                        <p className="text-muted">
                          <i className="fas fa50%-quote-left pe-2"></i>
                         {review.reviews}
                        </p>
                      </div>

                      <div className="col-lg-3 shadow-4-strong">
                        <img className="rounded-circle shadow-1-strong mb-4"
                          src={Person} alt="avatar"
                          style={{width: "20%"}} />
                        <h5 className="mb-3">{review.name}</h5>
                        <p><Rating name="read-only" value={review.rating} readOnly /> </p>
                        <p className="text-muted">
                          <i className="fas fa50%-quote-left pe-2"></i>
                         {review.reviews}
                        </p>
                      </div>

                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </Carousel.Item>
      )))}     
    </Carousel>

  </div>

        <br/>
        <div style={{display:"flex", justifyContent:"center"}}>
          <Button onClick={NavigateToAddReview} style={{width:800, padding:8}}>
                Add Review
          </Button>
        </div>    
      </div>

    </MDBContainer>
    );
};

export default Reviewcards;