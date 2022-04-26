import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  return (
    <div className='w-50 mx-auto'>
      <h2 className="text-center">Please order {service.name}</h2>
      <form>
        <input className='w-100 mb-2' type="text" name="name" id="name" required placeholder='Your Name'/>
        <br />
        <input className='w-100 mb-2' type="email" name="email" id="email" required placeholder='YOur Email'/>
        <br />
        <input className='w-100 mb-2' type="text" name="service" id="service" required placeholder='Your Service'/>
        <br />
        <input className='w-100 mb-2' type="text" name="address" id="address" required placeholder='Your Address'/>
        <br />
        <input className='w-100 mb-2' type="text" name="phone" id="phone" required placeholder='Your Phone Number'/>
        <br />
        <input className='btn btn-primary' type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Checkout;
