import React from 'react'
import interior_img from '../assets/interior.jpg'
import powerlifting_img from '../assets/powerlifting.jpg'

const About = () => {
  return (
    <section className='flex flex-col gap-4 p-4 mx-4'>
      <h1 className='text-3xl font-bold py-4'>ABOUT US</h1>
      <div className='flex flex-col sm:flex-row items-center justify-between mb-8'>
        <img className='max-h-[500px] w-[80%] sm:w-[60%] object-cover' src={interior_img} alt="interior" />
        <div className='w-[80%] sm:w-[40%] pl-0 sm:pl-5 text-center sm:text-left'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente tenetur praesentium laboriosam aliquid ducimus corporis dolore. Praesentium ad quos eos unde illo fugit, dolore placeat, animi laboriosam a doloribus provident.</p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <div className='w-[80%] sm:w-[40%] pr-0 sm:pr-5 text-center sm:text-left'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente tenetur praesentium laboriosam aliquid ducimus corporis dolore. Praesentium ad quos eos unde illo fugit, dolore placeat, animi laboriosam a doloribus provident.</p>
        </div>
        <img className='max-h-[500px] w-[80%] sm:w-[60%] object-cover' src={powerlifting_img} alt="powerlifting" />
      </div>
    </section>
  )
}

export default About
