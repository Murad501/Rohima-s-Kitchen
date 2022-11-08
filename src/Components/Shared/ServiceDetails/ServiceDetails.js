import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { authContext } from "../../../Context/UserContext";
import ReviewCart from "./ReviewCart";

const ServiceDetails = () => {
  const service = useLoaderData();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();
  const [reviews, setReviews] = useState([]);

  const { picture, title, price, description, _id } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  const { user, googleLogIn } = useContext(authContext);

  const handleGoogleSignIn = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.error(err));
  };

  const handleReviewSet = (event) => {
    event.preventDefault();
    const reviewText = event.target.review.value;

    const review = {
      userName: user.displayName,
      userImage: user.photoURL,
      userEmail: user.email,
      reviewText,
      serviceId: _id,
      serviceName: title,
      time: new Date(),
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            const currentReviews = [review, ...reviews]
            setReviews(currentReviews)
        }
      });
  };

  return (
    <div>
      <div class="grid mg:grid-cols-5 lg:grid-cols-3 gap-4">
        <div class="md:col-span-3 lg:col-span-2">
          <div className="card w-full border rounded-none p-3">
            <div className="card-body px-0">
              <h2 className="font-bold text-3xl">{title}</h2>
            </div>
            <figure>
              <img className="w-full" src={picture} alt="Service_image" />
            </figure>
            <p className="text-xl font-semibold my-5">
              Price: <span className="text-success">${price}</span>
            </p>
            <p className="text-lg">{description}</p>
          </div>
        </div>
        <div class="md:col-span-2 lg:col-span-1">
          {user?.email ? (
            <div className="text-center">
              <h1 className="mb-5 text-xl font-bold">Take a review</h1>
              <form
                onSubmit={handleReviewSet}
                className="flex flex-col items-center"
              >
                <textarea
                  name="review"
                  required
                  className="textarea textarea-bordered w-10/12 rounded-none"
                  placeholder="Your valuable feedback..."
                ></textarea>
                <button
                  className="btn btn-success text-white capitalize text-lg rounded-none hover:bg-emerald-600 my-5"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="mb-5 text-xl font-bold">
                Please Login to add a review
              </h1>
              <Link
                to="/login"
                state={{ from: location }}
                replace
                className="btn btn-success text-white capitalize text-lg rounded-none hover:bg-emerald-600"
              >
                Sign in with Email
              </Link>{" "}
              <br />
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-success text-white capitalize text-lg rounded-none hover:bg-emerald-600"
              >
                <FaGoogle></FaGoogle> Sign in with Google
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10 text-center">Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCart key={review._id} review={review}></ReviewCart>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
