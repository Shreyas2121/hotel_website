import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const PhotoSlider = ({images}) => {
  return (
    <Carousel>
        {images.map((image, index) => (
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
          height={200}
        />
        </Carousel.Item>
        ))}
    </Carousel>
  )
}
