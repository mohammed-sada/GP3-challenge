import React from 'react';
import { requestVisits } from '../../data/requestVisits';
import AIImage from '../../assets/Illustration.png';

export default function Hero() {
  return (
    <div className='py-10 pl-28 pr-4  flex justify-center items-center bg-gray-300 dark:bg-gradient-to-b from-secondary to-primary h-max'>
      <div className='w-1/2 h-auto'>
        <h1 className='mt-20 text-6xl font-extrabold max-w-2xl text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-orange-400'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className='mt-10 max-w-lg text-black dark:text-cyan-100 text-lg'>
          Yet bed any for travelling assistance indulgence unpleasing.
          <br /> Not thoughts all exercise blessing. Indulgence way everything
          joy alteration boisterous the attachment. Party we years to order
          allow asked of.
        </p>

        <div className='mt-10 flex'>
          <input
            className='w-2/4 h-16 px-5 rounded-tl-md rounded-bl-md placeholder:text-lg bg-gray-700 dark:bg-blue-900 text-white  outline-none'
            type='text'
            placeholder='Your Email Address'
          />
          <button className='w-1/4 h-16 px-5 bg-gray-200 dark:bg-orange-600 text-black dark:text-white text-lg font-bold'>
            Get Started
          </button>
        </div>
        <div className='mt-10 flex items-center ml-3'>
          {requestVisits.map((item, idx) => {
            return <ThumbPhoto image={item.image} key={idx} />;
          })}
          <div className='flex items-center justify-center rounded-full border-2 -ml-3 h-9 w-9 bg-cyan-400 text-xxs font-extrabold'>
            1.6k+
          </div>
          <p className='ml-6 text-sm text-black dark:text-white'>
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className='w-1/2  flex justify-center items-center'>
        <img src={AIImage} alt='AI' />
      </div>
    </div>
  );
}

function ThumbPhoto({ image }) {
  return (
    <img className='rounded-full -ml-3 h-9 w-9' src={image} alt='visits' />
  );
}
