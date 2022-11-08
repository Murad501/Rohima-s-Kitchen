import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData()

    return (
        <div>
            {
                service.title
            }
        </div>
    );
};

export default ServiceDetails;