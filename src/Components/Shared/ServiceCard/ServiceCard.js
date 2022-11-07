import React from "react";

const ServiceCard = ({ service }) => {
    const {picture, title, price, description} = service
    console.log(service)
  return (
    <div className="card border p-2 rounded-sm hover:shadow-lg">
      <figure>
        <img src={picture} alt="Service_Image" />
      </figure>
      <div>
        <h2 className="mt-5 font-bold text-2xl">{title}</h2>
        <p className="my-5">{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
        <div className="card-actions justify-between items-center">
            <p className="text-xl font-semibold">Price: <span className="text-success">${price}</span></p>
          <button className="btn btn-success text-white font-semibold">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
