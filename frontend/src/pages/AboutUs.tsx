import React, { useEffect, useState } from "react";
import Reviews from "../components/HotelReview/Reviews";

const AboutUs = () => {
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data: any) => setData(data));
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Reviews />
      {data.map((item: any) => (
        <div key={item.id}>
          <img src={item.room_images.bathroom} />
          <img src={item.room_images.bedroom} />
          <img src={item.room_images.living_room} />
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
