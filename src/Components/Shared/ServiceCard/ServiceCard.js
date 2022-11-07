import React from "react";

const ServiceCard = ({ service }) => {
    const {picture, title, price, description} = service
    console.log(service)
  return (
    <div className="card border">
      <figure>
        <img src={picture} alt="Service_Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
        <div className="card-actions justify-end">
            <p>Price: ${price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
