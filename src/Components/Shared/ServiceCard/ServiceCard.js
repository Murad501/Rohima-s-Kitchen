import React from "react";
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { picture, title, price, description, _id } = service;

  return (
    <div className="card border p-2 rounded-sm hover:shadow-lg">
      <figure>
        <PhotoProvider>
        <PhotoView src={picture}>
        <img src={picture} style={{ objectFit: 'cover' }} alt="Service_Image" />
        </PhotoView>
        </PhotoProvider>
      </figure>
      <div>
        <h2 className="mt-5 font-bold text-2xl">{title}</h2>
        <p className="my-5">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-between items-center mb-5">
          <p className="text-xl font-semibold">
            Price: <span className="text-success">${price}</span>
          </p>
          <Link
            to={`/service/${_id}`}
            className="btn btn-success rounded-none w-24 text-white font-semibold"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
