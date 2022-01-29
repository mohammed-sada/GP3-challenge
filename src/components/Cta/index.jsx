import React from 'react';

export default function Cta() {
  return (
    <div className='py-20 px-28 bg-gray-300 dark:bg-primary'>
      <div className='px-10 flex items-center justify-between w-full h-44 bg-gradient-to-r from-purple-500 to-orange-400 rounded-lg'>
        <div>
          <p className='font-bold text-white dark:text-black'>
            Request Early Access to Get Started
          </p>
          <h3 className='text-2xl mt-2 text-white dark:text-black font-extrabold'>
            Register today & start exploring the endless possiblities.
          </h3>
        </div>
        <button className='py-2 px-10 fron-extrabold text-black dark:text-white bg-white dark:bg-black rounded-3xl'>
          Get Started
        </button>
      </div>
    </div>
  );
}
