import React from 'react';
import { uses } from '../../data/uses';

export default function GP3() {
  return (
    <div className='px-20  bg-gray-300 dark:bg-primary'>
      <div className='flex flex-col m-10 py-14 px-20 bg-gray-200 dark:bg-secondary'>
        <div className='flex'>
          <div className='w-1/4 flex flex-col'>
            <div className='h-0.5 w-9 mb-2 bg-gradient-to-br from-purple-500 to-orange-400' />
            <h2 className='text-black dark:text-white text-xl font-bold'>
              What is GPT-3
            </h2>
          </div>
          <div className='w-3/4 text-gray-700 dark:text-cyan-100'>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
        </div>
        <div className='mt-20 mb-10 py-5 flex items-start text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-orange-400'>
          <h2 className='w-1/2 text-4xl font-extrabold'>
            The possibilities are beyond your imagination
          </h2>
          <p className='w-1/2 mt-2 text-right font-extrabold'>
            Explore The Library
          </p>
        </div>
        <div className='mt-10 flex'>
          {uses.map((item, idx) => {
            return (
              <div key={idx} className='ml-6'>
                <div className='h-0.5 w-9 mb-2 bg-gradient-to-br from-purple-500 to-orange-400' />
                <h2 className='font-extrabold text-black dark:text-white text-2xl'>
                  {item.name}
                </h2>
                <p className='mt-10 text-gray-700 dark:text-cyan-100'>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
