// import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const ServiceDetail = () => {
  const {serviceId} = useParams()
  const [service]= useServiceDetails(serviceId);
  return (
    <div className='text-center'>
      <h2 className='text-secondary'>You Are About to book {service.name} </h2>
      <Link to={`/checkout/${serviceId}`}>
        <button className='btn btn-success'>Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;