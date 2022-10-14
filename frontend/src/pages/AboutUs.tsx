import React from "react";
import { UseFetch } from "../customHook/UseFetch";
import { Review } from "../types/types";
import Reviewcards from "../components/Roomcards/Reviewcards";

const  Aboutus = () => {
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
  <div style={{ minHeight: "100vh", margin: "2%" }}>
    <div id="reviews" className="reviews">
      <p>
        <h1>Top Reviews</h1>
      </p>
    </div>
    <div className="Review-card" style={{ display: "block"}}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data?.Reviews?.map((review) => (
          <Reviewcards reviewData={review} />
        ))
      )}
      </div>
  </div>
          );
     

};

export default Aboutus;

