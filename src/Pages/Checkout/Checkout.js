import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user]= useAuthState(auth)



  // handle place order
  const handlePlaceOrder = e => {
    e.preventDefault();
    const order = {
      name: user.name,
      email: user.email,
      service: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value
    }
    axios.post('http://localhost:5000/order', order)
    .then(response =>{
      const {data} = response;
      if(data.insertedId){
        toast.success('Your order is booked!!!')
        e.target.reset();
      }
    })


  }


  return (
    <div className='w-50 mx-auto'>
      <h2 className="text-center">Please order {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input className='w-100 mb-2' type="text" name="name" id="name" value={user?.displayName} required placeholder='Your Name'/>
        <br />
        <input className='w-100 mb-2' type="email" name="email" id="email" value={user?.email} required placeholder='YOur Email'/>
        <br />
        <input className='w-100 mb-2' type="text" name="service" id="service" value={service.name} required placeholder='Your Service'/>
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
