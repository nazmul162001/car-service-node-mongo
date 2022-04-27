// import { async } from '@firebase/util';
import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  if (user) {
    // navigate(from, { replace: true });
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger">Error: {error.message}</p>;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // console.log(email, password);
   await signInWithEmailAndPassword(email, password);
   const {data} = await axios.post('http://localhost:5000/login', {email});
   localStorage.setItem('accessToken', data.accessToken);
   console.log(email);
   navigate(from, { replace: true });

  };

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigateRegister = (e) => {
    navigate('/register');
  };

  // reset
  const resetPassword = async() => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    if(email){
      alert('Sent email');
    }
    else{
      alert('please input email first');
    }
  };

  return (
    <div className="container w-50 mx-auto">
      <PageTitle title= 'login' />
      <h2 className="text-primary text-center mt-3">Plelasee login here </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorMessage}
        <Button
          className="w-50 mb-3 d-block mx-auto"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p>
        {' '}
        Forget password ?{' '}
        <button className="text-primary btn btn-link" onClick={resetPassword}>
          reset password
        </button>{' '}
      </p>
      <p>
        {' '}
        New to here? please{' '}
        <Link to="/register" className="text-primary" onClick={navigateRegister}>
          register here
        </Link>{' '}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
