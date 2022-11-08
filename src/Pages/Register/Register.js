import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';

const Register = () => {

    const {createUserByEmail} = useContext(authContext)
    const [error, setError] = useState('')

    const handleRegister = (event) =>{
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userImage = form.imageUrl.value;


        createUserByEmail(email, password)
        .then(result => {
            setError('')
            const user = result.user
            updateProfile(user, {
                displayName: name,
                photoURL: userImage
            })
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="flex justify-center my-20">
      <div className="card w-full max-w-lg border hover:shadow-lg rounded-none">
        <p className="text-center my-5 font-bold text-3xl">Please Register</p>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="form-control">
                <p>{error}</p>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image url</span>
              </label>
              <input
                required
                type="text"
                name="imageUrl"
                placeholder="url"
                className="input input-bordered"
              />
            </div>
            <div className="mx-auto my-5 w-full">
              <button
                type="submit"
                className="btn bg-success border-none rounded-none text-whiter w-full text-lg font-semibold hover:bg-emerald-600"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-center my-3 text-lg">
            Already have an account? 
            <Link to="/login" className="hover:text-success">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Register;