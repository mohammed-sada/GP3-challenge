import React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { features } from '../../data/features';
import vrImage from '../../assets/vr2.png';

export default function Feature() {
  return (
    <div className='py-14 pt-20 px-28 bg-gray-300 dark:bg-primary'>
      <div className='flex justify-between items-start'>
        <div className='w-1/3 '>
          <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400'>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p className='mt-10 text-base text-black dark:text-orange-300 font-semibold'>
            Request Early Access to Get Started
          </p>
        </div>
        <div className='w-1/2'>
          {features.map((item, idx) => {
            return (
              <div key={idx} className='flex mt-6 first:mt-0'>
                <div className='w-1/2 text-left'>
                  <div className='h-0.5 w-9 mb-1 bg-gradient-to-r from-purple-500 to-orange-400' />
                  <h2 className='text-black dark:text-white font-extrabold w-44 text-lg'>
                    {item.name}
                  </h2>
                </div>
                <p className='w-1/2 text-gray-700 dark:text-cyan-100 text-sm'>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='mt-32 flex items-center justify-between'>
        <div className='relative w-[370px] h-[350px] bg-secondary rounded-tr-[183.655px]'>
          <img
            src={vrImage}
            alt='VR'
            className='absolute w-[474.85px]  bottom-0 left-[139px] z-10	'
          />
          <div className='absolute rounded-full bg-transparent border-2 border-secondary w-20 h-20 -top-20 right-4 order-first'>
            <div className='absolute rounded-full bg-transparent border-2 border-secondary w-32 h-32 -top-6 -left-6'>
              <div className='absolute rounded-full bg-transparent border-2 border-secondary w-44 h-44 -top-7 -left-7'>
                <div className='absolute rounded-full bg-transparent border-2 border-secondary w-56 h-56 -top-7 -left-7'></div>
              </div>
            </div>
          </div>
          <div className='absolute -top-8 -right-[100px] bg-lightOrange px-10 py-6 rounded-2xl text-white'>
            My Apps
          </div>
          <div className='absolute -top-24 left-40 text-white bg-secondary p-3 rounded-xl'>
            <BiMessageDetail size={28} />
          </div>
        </div>
        <div className='w-1/2'>
          <p className='text-gray-700 dark:text-cyan-300'>
            Request Early Access to Get Started
          </p>
          <h2 className='mt-4 mb-6 max-w-md text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400'>
            The possibilities are beyond your imagination
          </h2>
          <p className='text-gray-700 dark:text-cyan-100 max-w-md'>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className='mt-8 text-gray-700 dark:text-orange-400'>
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </div>
  );
}
