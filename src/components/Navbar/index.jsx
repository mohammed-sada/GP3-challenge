import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import { FaSun, FaMoon } from 'react-icons/fa';
import { navbarItems } from '../../data/navbarItems';

export default function Navbar() {
  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span
        className='cursor-pointer hover:text-orange-600 transition-all ease-linear duration-200'
        onClick={handleMode}
      >
        {darkTheme ? <FaSun size='24' /> : <FaMoon size='24' />}
      </span>
    );
  };
  return (
    <div className='flex items-center justify-center w-auto h-16 py-10 px-28 bg-gray-100 dark:bg-gradient-to-t from-secondary to-primary'>
      <ul className='flex items-center justify-start w-2/3 text-primary dark:text-white'>
        <h3 className='mr-8 text-2xl font-bold'>GPT-3</h3>
        {navbarItems.map((item, idx) => {
          return (
            <li key={idx} className='p-3 ml-4 cursor-pointer'>
              {item.name}
            </li>
          );
        })}
        <li className='ml-10'>
          <ThemeIcon />
        </li>
      </ul>
      <div className='flex items-center justify-end w-1/3 dark:text-white'>
        <button className='py-3 px-8'>Sign in</button>
        <button className='py-3 px-8 m-2 text-black dark:text-white bg-gray-300 dark:bg-orange-600 rounded-md'>
          Sign Up
        </button>
      </div>
    </div>
  );
}
