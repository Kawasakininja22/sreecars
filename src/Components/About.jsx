
import React from 'react';
import ferr from '../assets/brand.mp4';

export default function About() {
  return (
    <div className='z-[-1] relative'>
    <div className=" lg:flex-1 p-2 mt-10">
    <video
      className="w-full  h-1/2 md:h-3/4 object-cover rounded-lg"
      src={ferr}
      loop autoPlay muted
    >
    </video>
    <div class="  inset-0 flex  flex-wrap items-center justify-center">
    <h1 class="text-black bg-white "> Our mission is to provide a trustworthy and efficient marketplace where users can browse, compare, and purchase pre-owned vehicles with confidence. We offer a wide range of cars from various brands, ensuring that our customers have access to high-quality options that fit their budget and preferences. With a user-friendly interface, detailed vehicle information, and secure transaction processes, SGCars simplifies the car buying experience, making it easier and more convenient to find the perfect car</h1>
  </div>
  </div>
  </div>
  )
}

