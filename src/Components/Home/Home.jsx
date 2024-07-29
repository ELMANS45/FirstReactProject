import React from 'react';
import logo from '../../assets/avataaars.svg';

export default function Home() {
  return (
    <>
      <div className="bg-[#1abc9c] flex justify-center items-center w-screen min-h-screen">
        <div className='py-10 text-center'>
          <div className="flex justify-center">
            <img className='' src={logo} width="290" alt="logo"/>
          </div>
          <div className='pt-6'>
            <h2 className='text-white pt-4 font-bold text-3xl'>START FRAMEWORK</h2>
            <div className="flex justify-center items-center pt-2">
              <span className="relative inline-flex items-center justify-center w-full before:content-[''] before:flex-grow before:h-[2px] before:bg-white before:mr-2 after:content-[''] after:flex-grow after:h-[2px] after:bg-white after:ml-2">
                <span className="text-white mx-2">&#9733;</span>
              </span>
            </div>
            <div className='text-white pt-5'>Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>
      </div>
    </>
  );
}

