import React from 'react';
import { logos } from '../../data/logos';

export default function Companies() {
  return (
    <div className='py-16 px-72 flex justify-between bg-gray-300 dark:bg-primary'>
      {logos.map((item, idx) => {
        return (
          <img key={idx} src={item.logo} alt='logo' className='w-20 h-auto' />
        );
      })}
    </div>
  );
}
