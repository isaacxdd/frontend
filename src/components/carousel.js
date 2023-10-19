// import { useLoaderData } from "react-router-dom";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Carousels({ albums }) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          useKeyboardArrows={true}
          autoPlay={true}
          interval={1500}
          className="max-w-full"
        >
          {albums.map((album, index) => (
            <div key={index} className="w-full h-81">
              <img
                className="object-contain w-full h-full"
                src={album}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

export default Carousels;