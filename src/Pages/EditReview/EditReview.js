import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toastSuccess } from "../../Components/Shared/Toast/Toast";

const EditReview = () => {
  const review = useLoaderData();
  const navigate = useNavigate()

    const handleEditReview = (event) =>{
        event.preventDefault()
        const editedReview = event.target.updateReview.value

        fetch(`https://rohimas-kitchen-server.vercel.app/editreview/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({editedReview})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toastSuccess('Review updated successfully')
                navigate('/myreviews')
            }
        })
    }

  return (
    <div>
      <h1 className="text-2xl lg:text-5xl font-bold mb-10 text-center">
        Please edit your review
      </h1>
      <form onSubmit={handleEditReview} className="max-w-xl mx-auto">
        <h1 className="text-xl font-bold my-5 text-center">{review.serviceName}</h1>
        <textarea
          required
          type="text"
          name="updateReview"
          placeholder="start writing..."
          className="input input-bordered focus:outline-none w-full h-48"
        />
        <button
            type="submit"
            className="btn bg-success border-none rounded-none text-whiter w-full text-lg font-semibold hover:bg-emerald-600"
          >
            Submit
          </button>
      </form>
    </div>
  );
};

export default EditReview;
