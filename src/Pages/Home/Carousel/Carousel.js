import React from "react";
import './Carousel.css'

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full mx-auto">
        <div id="item1" className="carousel-item w-full">
          <img src="https://i.ibb.co/R2zgk6X/img1.jpg" className="w-full" alt="" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://i.ibb.co/J5h44Rn/img2.jpg" className="w-full" alt="" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://i.ibb.co/4f0k2tW/img3.jpg" className="w-full" alt="" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://i.ibb.co/9NsM27H/img4.jpg" className="w-full" alt="" />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img src="https://i.ibb.co/sgBLqw5/img5.jpg" className="w-full" alt="" />
        </div>
        <div id="item6" className="carousel-item w-full">
          <img src="https://i.ibb.co/Fwt6rn3/img6.jpg" className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="bg-success w-5 h-5 rounded-full">
          
        </a>
        <a href="#item2" className="bg-success w-5 h-5 rounded-full">
          
        </a>
        <a href="#item3" className="bg-success w-5 h-5 rounded-full">
          
        </a>
        <a href="#item4" className="bg-success w-5 h-5 rounded-full">
          
        </a>
        <a href="#item5" className="bg-success w-5 h-5 rounded-full">
          
        </a>
        <a href="#item6" className="bg-success w-5 h-5 rounded-full">
          
        </a>
      </div>
    </div>
  );
};

export default Carousel;
