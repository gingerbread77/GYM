// RegisterForm.js
import React from 'react';

const RegisterForm = ({ inputData, handleChange, handleSubmit, title }) => {
  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        {title}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@email.com"
            className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-300 focus:outline-none focus:ring-2"
            required
            value={inputData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-300 focus:outline-none focus:ring-2"
            required
            value={inputData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-300 focus:outline-none focus:ring-2"
            required
            value={inputData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-light text-gray-500">
              I accept the <a className="font-medium text-blue-400 hover:underline" href="#">Terms and Conditions</a>
            </label>
          </div>
        </div>
        <button className="w-full text-white bg-blue-500 focus:ring-4 cursor-pointer focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          SIGN UP
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
