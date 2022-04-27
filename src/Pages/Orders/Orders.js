import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  console.log(orders);

  useEffect(() => {
    //----- here you can use fetch --------//
    const getOrders = async() => {
      const email = user?.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const {data} = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setOrders(data);
    }
    getOrders();
    
  },[])
  
  
  
  return (
    <div>
      <h2>This is my orders {orders.length} </h2>
    </div>
  );
};

export default Orders;