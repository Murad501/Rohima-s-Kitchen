import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServiceCard from "../../../Components/Shared/ServiceCard/ServiceCard";
import useTitle from "../../../hooks/useTitle";
import Carousel from "../Carousel/Carousel";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle("Home");

  useEffect(() => {
    fetch("https://final-server-rohimas-kitchen.vercel.app/home")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Carousel></Carousel>
      <div className="my-20">
        <h1 className="text-2xl lg:text-5xl font-bold mb-10 text-center">
          Rohima's Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/services"
            className="btn btn-success w-40 rounded-none text-lg mt-10 text-white font-semibold flex justify-center items-center gap-4 hover:bg-emerald-600"
          >
            <p>See All</p>
            <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
