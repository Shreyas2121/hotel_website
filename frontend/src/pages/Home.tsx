import React from "react";
import Container from "react-bootstrap/esm/Container";
import PhotoGrid from "../components/Grid/PhotoGrid";
import Service from "../components/services/Service";
import Slider from "../components/Slider/Slider";
import Reviewcards from "../components/Roomcards/Reviewcards";
import { UseFetch } from "../customHook/UseFetch";
import { Review } from "../types/types";

const Home = () => {
  const { data, loading }: Res = UseFetch(
    "http://127.0.0.1:5000/reviews"
  );
 
  interface Res {
    data: {
      Reviews: Review[];
    };
    loading: boolean;
  }
  return (
    <Container>
      <br />
      <Slider />
      <br />
      <PhotoGrid />
      <Service />
      <div className="Review-card" style={{ display: "block"}}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data?.Reviews?.map((review) => (
          <Reviewcards reviewData={review} />
        ))
      )}
      </div>
    </Container>
  );
};

export default Home;
