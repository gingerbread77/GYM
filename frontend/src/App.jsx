import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import About from './pages/About'
import ForgotPassword from './pages/ForgotPassword'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
      <Footer/>
      <ToastContainer
      position="top-right"
      style={{ top: '80px' }}
       />
    </div>
  )
}

export default App