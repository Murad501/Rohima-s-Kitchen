import React from "react";

const ReviewCart = ({ review }) => {
  const { userName, userImage, reviewText } = review;
  return (
    <div className="card w-full p-4 border rounded-none hover:shadow-lg ">
      <div className="flex items-center gap-4">
        <img className="w-20 rounded-full" src={userImage} alt="userImage" />
        <h1 className="font-bold text-2xl">{userName}</h1>
      </div>
      <div className="card-body">
        <p>{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewCart;
