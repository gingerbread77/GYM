import React from 'react'
import { Link } from 'react-router-dom'
import yoga_img from '../assets/yoga.jpeg'
import HIIT_img from '../assets/HIIT.webp'
import running_img from '../assets/running.avif'

const CourseOverview = () => {
  return (
    <section className='flex flex-col items-center justify-center p-6 bg-gray-200'>
      <div className='flex flex-col max-w-[700px] items-center'>
        <h1 className='text-3xl font-bold mb-5 p-4'>Premium Classes</h1>
        <p className='text-xl mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corrupti fugiat, repellat quos autem sapiente sunt quidem ipsam in tempore rem, libero inventore mollitia deleniti sit, sint consequuntur ratione aperiam?</p>
      </div>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 lg:w-[90%] sm:w-[90%] gap-5 justify-center items-center width-full max-w-7xl mb-10'>
        <img className='max-h-60 w-full object-cover' src={running_img} alt="treadmill running" />
        <img className='max-h-60 w-full object-cover' src={yoga_img} alt="yoga" />
        <img className='max-h-60 w-full object-cover' src={HIIT_img} alt="HIIT" />
      </div>
      <Link
        to="/classes"
        className='bg-orange-400 px-5 py-2.5 text-xl text-white mb-4'>Explore All Classes</Link>
    </section>
  )
}

export default CourseOverview