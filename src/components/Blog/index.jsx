import React from 'react';
import { blogs } from '../../data/blogs';

export default function Blog() {
  return (
    <div className='px-28 py-20 pb-32 bg-gray-300 dark:bg-primary'>
      <h1 className='text-6xl max-w-2xl p-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-400'>
        A lot is happening, We are blogging about it.
      </h1>
      <div className='mt-20 grid grid-cols-3 gap-10 '>
        {blogs.map((item, idx) => {
          return (
            <div
              key={idx}
              className='first:row-span-2 h-[323px] first:h-[700px]'
            >
              <img
                className='object-cover w-full h-1/3'
                src={item.image}
                alt={item.title}
              />
              <div className='p-4 text-white bg-gray-200 dark:bg-secondary h-2/3'>
                <div className='h-1/6'>
                  <p className='text-xs mb-2 text-black dark:text-white'>
                    {item.date}
                  </p>
                  <h2 className='text-black dark:text-white'>{item.title}</h2>
                </div>
                <p className='text-xs h-5/6 flex items-end text-black dark:text-white cursor-pointer'>
                  Read Full Article
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
