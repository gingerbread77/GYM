import React from 'react'
import { Link } from 'react-router-dom'
import gym_img from '../assets/gym.jpg'

const Hero = () => {
  return (
    <section className="min-h-[720px] bg-cover bg-center bg-no-repeat relative m-6" style={{ backgroundImage: `url(${gym_img})` }}>
      <div className="text-white absolute left-[12%] top-[30%]">
        <div className="mb-8">
          <h1 className="text-5xl font-bold">Discipline</h1>
          <h1 className="text-5xl font-bold">is Power</h1>
        </div>
        <div className="text-xl font-bold mb-15">
          <p>Push Beyond Limits, Unlock your Strength.</p>
        </div>
        <Link to="/register" className="p-5 text-xl bg-orange-500 cursor-pointer rounded-full font-bold border-none hover:bg-orange-400 focus:outline-none">Get Started</Link>
      </div>
    </section>
  )
}

export default Hero