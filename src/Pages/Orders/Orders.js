import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivet';
import auth from '../../firebase.init';

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  console.log(orders);

  useEffect(() => {
    //----- here you can use fetch --------//
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if(error.response.status === 401 || error.response.status === 403) {
          signOut(auth)
          navigate('/login')
        }
      }
    };
    getOrders();
  }, []);

  return (
    <div>
      <h2>This is my orders {orders.length} </h2>
    </div>
  );
};

export default Orders;
