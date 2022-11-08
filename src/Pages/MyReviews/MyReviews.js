import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/UserContext';
import MyReviewCart from './MyReviewCart';

const MyReviews = () => {
    const {user} = useContext(authContext)

    const [reviews, setReviews] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    return (
        <div>
            <h1 className="text-2xl lg:text-5xl font-bold mb-10 text-center">Your all reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <MyReviewCart key={review._id} review={review}></MyReviewCart>)
                }
            </div>
        </div>
    );
};

export default MyReviews;