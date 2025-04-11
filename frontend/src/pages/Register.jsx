import React, { useState } from 'react';
import gym_bg from '../assets/gym_bg.jpg';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

const Register = () => {
  const navigate = useNavigate();
  /* 
  minimum 8 characters
  at least one uppercase letter + at least one lowercase letter
  at least one special letter
  */
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
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

  // register form validation
  const handleFormValidation = () => {
    // // validate password against the regex pattern
    if (!passwordRegex.test(inputData.password)) {
      toast.error("Password must have at least 8 characters and contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character.");
      return false;
    }
    // check to see if passwords match
    if (inputData.password !== inputData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    if (!handleFormValidation()) return;
    try {
      const result = await axios.post('http://localhost:8000/register', inputData);
      console.log(result);

      if (result.data.success) {
        toast.success("Account created successfully!");
        // show the login form
        setIsLogin(true);
        // clear inputData 
        setInputData({
          email: '',
          password: '',
          confirmPassword: ''
        })
      } else {
        toast.error(result.data.msg)
      }
    } catch (err) {
      if (err.response.status === 400) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.")
      }
    }
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:8000/login', inputData);
      console.log(result);

      if (result.data.success) {
        toast.success("Login successfully!");
        // clear inputData 
        setInputData({
          email: '',
          password: '',
          confirmPassword: ''
        })
        // navigate to home page
        navigate('/');
      } else {
        toast.error(result.data.msg)
      }
    } catch (err) {
      if (err.response.status === 400) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.")
      }
    }
  }

  return (
    <section className='h-screen bg-cover flex' style={{ backgroundImage: `url(${gym_bg})` }}>
      <div className="h-screen absolute top-[70px] inset-0 bg-black/50 z-0">
        <div className="relative z-10 w-full max-w-md px-6">
          <div className="flex flex-col justify-center px-6 py-8 ml-[10%] min-w-[500px] md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {isLogin ? (
                  <LoginForm
                    inputData={inputData}
                    handleChange={handleChange}
                    handleSubmit={handleLoginSubmit}
                    title="Sign in"
                  />
                ) : (
                  <RegisterForm
                    inputData={inputData}
                    handleChange={handleChange}
                    handleSubmit={handleRegistrationSubmit}
                    title="Create an account"
                  />
                )}
                <p className="text-sm font-light text-gray-500">
                  {isLogin ? (
                    <>Don't have an account? <span onClick={() => setIsLogin(false)} className="font-medium text-blue-400 hover:underline cursor-pointer">Register</span></>
                  ) : (
                    <>Already have an account? <span onClick={() => setIsLogin(true)} className="font-medium text-blue-400 hover:underline cursor-pointer">Login</span></>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
