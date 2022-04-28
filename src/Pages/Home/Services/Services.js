import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services..css';

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch('https://stark-coast-61614.herokuapp.com/service')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="services-title">Our Services</h1>
      <div className="services-container mt-5">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
