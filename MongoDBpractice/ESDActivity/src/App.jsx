import React, { useState } from 'react';
import Switch from 'react-switch';
import { useEffect } from 'react';

const App = () => {
  const [Dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.theme = `${Dark}`;
    if (
      localStorage.theme === 'true' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [Dark]);

  return (
    <div className='flex items-center justify-center min-h-screen dark:bg-slate-700 bg-slate-200'>
      <div className='absolute top-3 right-3 p-6'>
        <Switch checked={Dark} onChange={() => setDark(!Dark)} />
      </div>
      <div className='flex items-center justify-center m-4 flex-col'>
        <a className='text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-900'>
          REGISTRATION PORTAL
        </a>
        <div className='flex flex-col items-center justify-center m-4 border border-gray-400 p-8 rounded-2xl'>
          <form className='form flex flex-col'>
            <input
              className='p-3 rounded-2xl m-2 dark:bg-slate-500'
              type='text'
              placeholder='Name'
            ></input>
            <input
              className='p-3 rounded-2xl m-2 dark:bg-slate-500'
              type='email'
              placeholder='Email'
            ></input>
            <input
              className='p-3 rounded-2xl m-2 dark:bg-slate-500'
              type='Password'
              placeholder='Password'
            ></input>
            <button
              type='submit'
              className='dark:bg-slate-800 dark:hover:bg-slate-600 bg-slate-500 rounded-3xl p-2 text-zinc-50 hover:bg-slate-300 dark:text-zinc-500'
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
