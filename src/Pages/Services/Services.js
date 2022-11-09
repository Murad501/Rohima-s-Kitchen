import React, { useEffect, useState } from "react";
import ServiceCard from "../../Components/Shared/ServiceCard/ServiceCard";
import useTitle from "../../hooks/useTitle";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("Services");

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-10">
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen -mt-32">
            <progress className="progress w-56"></progress>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl lg:text-5xl font-bold mb-10 text-center">
            Rohima's Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
