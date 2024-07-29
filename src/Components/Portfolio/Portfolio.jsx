import React from 'react';
import logo1 from '../../assets/poert1.png';
import logo2 from '../../assets/port2.png';
export default function Portfolio() {
  return (
    <>
      <div className="py-6 text-center">
        <div className="text-center">
          <h1 className="text-black pt-4 font-bold text-3xl">PORTFOLIO COMPONENT</h1>
          <div className="flex justify-center items-center pt-2">
            <span className="relative inline-flex items-center justify-center w-1/4 before:content-[''] before:flex-grow before:h-[2px] before:bg-black before:mr-2 after:content-[''] after:flex-grow after:h-[2px] after:bg-black after:ml-2">
              <span className="text-black mx-2">&#9733;</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-screen gap-5 pb-5">
      <div className="relative w-1/4 p-2 group">
            <img src={logo1} alt={`Portfolio Item`} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-4xl">+</span>
            </div>
          </div>
          <div className="relative w-1/4 p-2 group">
            <img src={logo2} alt={`Portfolio Item`} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-4xl">+</span>
            </div>
          </div>
          <div className="relative w-1/4 p-2 group">
            <img src={logo1} alt={`Portfolio Item`} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-4xl">+</span>
            </div>
          </div>
          <div className="relative w-1/4 p-2 group">
            <img src={logo2} alt={`Portfolio Item`} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-4xl">+</span>
            </div>
          </div>
          <div className="relative w-1/4 p-2 group">
            <img src={logo1} alt={`Portfolio Item`} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-4xl">+</span>
            </div>
          </div>
          <div className="relative w-1/4 p-2 group">
            <img src={logo2} alt={`Portfolio Item`} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <span className="text-white text-4xl">+</span>
            </div>
          </div>
      </div>
    </>
  );
}