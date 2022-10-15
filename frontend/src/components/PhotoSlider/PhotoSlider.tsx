import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const PhotoSlider = ({images}) => {
  return (
    <Carousel>
        {images.map((image, index) => (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
        </Carousel.Item>
        ))}
    </Carousel>
  )
}
