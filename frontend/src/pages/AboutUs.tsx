import Reviewcards from "../components/Roomcards/Reviewcards";
import { Link } from "react-router-dom";

const Aboutus = () => {

  return (
    <div style={{ minHeight: "100vh", margin: "2%" }}>
      <div id="reviews" className="reviews">
        <p>
          <h1>Top Reviews</h1>
        </p>
        <p>
          <Link to="/addreview">Add Review</Link>
        </p>
      </div>
      <Reviewcards />
    </div>
  );
};

export default Aboutus;
