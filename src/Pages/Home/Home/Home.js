import React, { useEffect, useState } from 'react';
import ServiceCard from '../../../Components/Shared/ServiceCard/ServiceCard';
import Carousel from '../Carousel/Carousel';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/home')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <Carousel></Carousel>
            <div>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;