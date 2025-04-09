import React, { useState } from 'react';
import gym_bg from '../assets/gym_bg.jpg';
import { Link } from 'react-router-dom'

const Register = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='h-screen bg-cover flex' style={{ backgroundImage: `url(${gym_bg})` }}>
      <div className="h-screen absolute top-[70px] inset-0 bg-black/50 z-0">
      <div className="relative z-10 w-full max-w-md px-6">
      <div className="flex flex-col justify-center px-6 py-8 ml-[10%] min-w-[500px] md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                {isLogin ? 'Login' : 'Create an account'}
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="email" name="email" id="email" placeholder="email@email.com" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-300 focus:outline-none focus:ring-2" required value={inputData.email} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-300 focus:outline-none focus:ring-2" required value={inputData.password} onChange={handleChange} />
                </div>
                <div>
                  {isLogin ? '' : <><label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-300 focus:outline-none focus:ring-2" required value={inputData.confirmPassword} onChange={handleChange} /></>}
                </div>
                <div className="flex items-start">

                  {isLogin ? <Link to="/forgot-password" className="text-blue-400 hover:underline text-sm">Forgot Password</Link> : <><div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required />
                  </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-blue-400 hover:underline" href="#">Terms and Conditions</a></label>
                    </div></>}
                </div>
                <button className="w-full text-white bg-blue-500 focus:ring-4 cursor-pointer focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">{isLogin ? 'SIGN IN' : 'SIGN UP'}</button>
                {isLogin ? <p className="text-sm font-light text-gray-500">
                  Don't have an account? <span
                    onClick={() => setIsLogin(false)}
                    className="font-medium text-blue-400 hover:underline cursor-pointer"
                  >
                    Register
                  </span>
                </p> : <p className="text-sm font-light text-gray-500">
                  Already have an account? <span
                    onClick={() => setIsLogin(true)}
                    className="font-medium text-blue-400 hover:underline cursor-pointer"
                  >
                    Login
                  </span>
                </p>}
              </form>
            </>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
