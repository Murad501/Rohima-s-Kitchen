import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { toastSuccess } from "../../Components/Shared/Toast/Toast";
import { authContext } from "../../Context/UserContext";
import useTitle from "../../hooks/useTitle";
import MyReviewCart from "./MyReviewCart";


const MyReviews = () => {
  const { user } = useContext(authContext);
  const [reviews, setReviews] = useState([]);

  useTitle('My Reviews')

  useEffect(() => {
    fetch(`https://server-link-rohimas-kitchen.vercel.app/myreviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDeleteReview = (id) =>{
    fetch(`https://server-link-rohimas-kitchen.vercel.app/delete/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
            const availableReviews = reviews.filter(review => review._id !== id)
            setReviews(availableReviews)
            toastSuccess('Review deleted successfully')
        }
    })
  }

  return (
    <div>
      {reviews.length !== 0 ? 
        <>
          <h1 className="text-2xl lg:text-5xl font-bold mb-10 text-center">
            Your all reviews
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <MyReviewCart key={review._id} review={review} handleDeleteReview={handleDeleteReview}></MyReviewCart>
            ))}
          </div>
        </>
       : 
        <div className="flex justify-center items-center h-screen -mt-32">
            <h1 className="text-xl">No reviews were added</h1>
        </div>
      }
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyReviews;
