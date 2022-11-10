import React from "react";
import { ToastContainer } from "react-toastify";
import { toastSuccess } from "../../Components/Shared/Toast/Toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {

    useTitle('Add Service')
    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        
        const title =form.title.value
        const picture = form.imageUrl.value
        const price = form.price.value
        const description = form.description.value

        const service = {
            picture,
            price,
            title,
            description
        }

        fetch('https://final-server-rohimas-kitchen.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
              form.reset()
                toastSuccess('Service added successfully')
            }
        })
    }

  return (
    <div>
      <h1 className="text-2xl lg:text-5xl font-bold mb-10 text-center">
        Please add a service
      </h1>
      <form onSubmit={handleAddService} className="max-w-xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            required
            type="text"
            placeholder="Service title"
            name="title"
            className="input input-bordered focus:outline-none"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            required
            type="number"
            placeholder="Service price"
            name="price"
            className="input input-bordered focus:outline-none"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            required
            type="text"
            name="imageUrl"
            placeholder="url"
            className="input input-bordered focus:outline-none"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            required
            type="text"
            name="description"
            placeholder="Service description"
            className="input input-bordered focus:outline-none h-48"
          />
        </div>
        <div className="mx-auto my-5 w-full">
          <button
            type="submit"
            className="btn bg-success border-none rounded-none text-whiter w-full text-lg font-semibold hover:bg-emerald-600"
          >
            Add
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddService;
