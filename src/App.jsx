import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Auth from './pages/Auth'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Carlisting from './pages/Carlisting'
import Booking from './pages/Booking'
import Checkout from './pages/Checkout'
import Footer from './components/Footer';
import Dashboard from '../src/admin/Dashboard'
import ManageCars from './admin/ManageCars';
import ManageBooking from './pages/ManageBooking';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminProtectedRoute from './components/AdminProtectedRoute ';
import UpdateListCars from './admin/UpdateListCars';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/carlisting/:bookingId?' element={<Carlisting/>}/>
      <Route path='/booking/:bookingId?' element={<Booking/>}/>
      <Route path='/managebooking' element={<ManageBooking/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister={true}/>}/>
      <Route element={<AdminProtectedRoute/>}>
      <Route path='/admin/dashboard' element={<Dashboard/>}/>
      <Route path='/admin/managecars' element={<ManageCars/>}/>
      <Route path='/admin/updatelistcars' element={<UpdateListCars/>}/>
      </Route>
      
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
