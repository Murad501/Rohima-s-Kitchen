import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center text-center my-20">
      <div>
      <h1 className="text-2xl lg:text-5xl font-bold">Subscribe</h1>
      <p className="text-lg my-5">Subscribe newsletter to stay updated every moment</p>
      </div>
      <form className="form-control text-center">
        <div className="flex justify-start items-center gap-5">
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="input input-bordered focus:outline-none rounded-none lg:w-96"
          />
          <button className="btn bg-success border-none rounded-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
