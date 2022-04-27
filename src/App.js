import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';
import { ToastContainer } from 'react-toastify';
import Orders from './Pages/Orders/Orders';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>
        <Route
        path='/orders' element={<Orders></Orders>}
        ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
