import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (event) =>{

    }

    return (
        <div className="flex justify-center my-20">
      <div className="card w-full max-w-lg border hover:shadow-lg rounded-none">
        <p className="text-center my-5 font-bold text-3xl">Please Login</p>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="form-control">
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
            <div className="mx-auto w-full">
              <button
                type="submit"
                className="btn bg-success border-none rounded-none text-whiter w-full text-lg font-semibold hover:bg-emerald-600"
              >
                Login
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