import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const Login = () => {
  const { signInUserByEmail, googleLogIn } = useContext(authContext);
  const googleProvider = new GoogleAuthProvider()

  const handleGoogleLogIn = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        console.log(result.user)
      })
      .catch((err) => console.error(err));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUserByEmail(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center my-20">
      <div className="card w-full max-w-lg border hover:shadow-lg rounded-none">
        <p className="text-center my-5 font-bold text-3xl">Please Login</p>
        <div className="card-body">
          <form onSubmit={handleLogin}>
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
              <label className="label">
                <Link to="" className="ml-auto my-2 hover:text-success">
                  Forgot password?
                </Link>
              </label>
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
            New here? 
            <Link to="/register" className="hover:text-success">
              Register
            </Link>
          </p>
          <button
            onClick={handleGoogleLogIn}
            className="btn border-none rounded-none flex justify-center items-center gap-3 bg-success text-lg font-semibold hover:bg-emerald-600"
          >
            <FaGoogle></FaGoogle> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
