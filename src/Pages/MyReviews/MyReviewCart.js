import React from "react";
import { Link } from "react-router-dom";

const MyReviewCart = ({ review, handleDeleteReview }) => {
  const { reviewText, serviceName, _id } = review

  return (
    <div className="card w-full p-4 border rounded-none hover:shadow-lg ">
      <h1 className="text-2xl lg:text-3xl font-bold mb-5">{serviceName}</h1>
      <div className="card-body p-0">
        <p>{reviewText}</p>
      </div>
      <div className="flex justify-between my-5">
        <Link to={`/editreview/${_id}`} className="btn btn-success w-24 rounded-none text-white ">Edit</Link>
        <button onClick={()=>handleDeleteReview(_id)} className="btn btn-error w-24 rounded-none text-white ">Delete</button>
      </div>
    </div>
  );
};

export default MyReviewCart;
