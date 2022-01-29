import React from 'react';
import { footerLinks } from '../../data/footerLinks';

export default function Footer() {
  return (
    <div className='p-20 pb-5 bg-gray-300 dark:bg-darkBlue'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-6xl font-extrabold max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-center'>
          Do you want to step in to the future before others
        </h1>
        <button className='mt-10 p-4 text-black dark:text-white border-[1px] border-black dark:border-white'>
          Request Early Access
        </button>
      </div>
      <div className='mt-40 flex justify-around text-black dark:text-white'>
        <div className='w-1/4'>
          <h1 className='font-extrabold text-4xl'>GPT-3</h1>
          <p className='text-xs mt-4 w-40'>
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className='w-2/4 flex justify-between '>
          {footerLinks.map((item, idx) => {
            return (
              <div key={idx}>
                <p className='font-bold mb-8'>{item.category}</p>
                {item.links.map((link, idx) => {
                  return (
                    <p key={idx} className='text-sm  font-light w-32 mb-6'>
                      {link}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <p className='mt-20 text-sm text-center text-black dark:text-white'>
        © 2021 GPT-3. All rights reserved.
      </p>
    </div>
  );
}
