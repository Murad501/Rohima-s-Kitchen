import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation()

    if(loading){
        return <div className='flex justify-center items-center h-screen -mt-32'><progress className="progress w-56"></progress></div>
    }
    if(!user?.email){
       return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;