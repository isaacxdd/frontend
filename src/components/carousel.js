// import { useLoaderData } from "react-router-dom";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Carousels({ images }) {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      dynamicHeight={false}
      useKeyboardArrows={true}
      autoPlay={true} 
      interval={1500} 
    >
      {images.map((image, index) => (
        <div key={index}>
          <img className="carouselImage" src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}
export default Carousels;