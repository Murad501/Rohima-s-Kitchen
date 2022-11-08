import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { authContext } from "../../../Context/UserContext";

const ServiceDetails = () => {
  const service = useLoaderData();
  const location = useLocation()
  const googleProvider = new GoogleAuthProvider()

  const { user, googleLogIn } = useContext(authContext);

  const { picture, title, price, description } = service;

  const handleGoogleSignIn = () => {
    googleLogIn(googleProvider)
    .then(() => {

    })
    .catch(err => console.error(err))
  }

  return (
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
          <div className="flex flex-col items-center">
          <h1 className="mb-5 text-xl font-bold">Take a review</h1>
          <textarea className="textarea textarea-bordered w-10/12 rounded-none" placeholder="Your valuable feedback..."></textarea>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="mb-5 text-xl font-bold">Please Login to add a review</h1>
            <Link to='/login' state={{ from: location }} replace className="btn btn-success text-white capitalize text-lg rounded-none hover:bg-emerald-600">Sign in with Email</Link> <br />
            <button onClick={handleGoogleSignIn} className="btn btn-success text-white capitalize text-lg rounded-none hover:bg-emerald-600">
              <FaGoogle></FaGoogle> Sign in with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
