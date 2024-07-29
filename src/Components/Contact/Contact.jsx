import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="py-6 text-center">
        <div className="text-center">
          <h1 className="text-black pt-4 font-bold text-3xl">CONTACT SECTION</h1>
          <div className="flex justify-center items-center pt-2">
            <span className="relative inline-flex items-center justify-center w-1/4 before:content-[''] before:flex-grow before:h-[2px] before:bg-black before:mr-2 after:content-[''] after:flex-grow after:h-[2px] after:bg-black after:ml-2">
              <span className="text-black mx-2">&#9733;</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <div className="mb-4 text-center">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          userName
        </label>
        <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="userName" />
      </div>
      <div className="mb-6 text-center">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userAge">
          userAge
        </label>
        <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="userPassword" />
      </div>
      <div className="mb-4 text-center">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userEmail">
          userEmail
        </label>
        <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="userEmail" />
      </div>
      <div className="mb-4 text-center">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          userPassword
        </label>
        <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="passoword" type="text" placeholder="userPassword" />
      </div>
    <div className="flex justify-center pt-4 pb-4">
    <button class="bg-blue-500 w-1/6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send message
      </button>
    </div>
      </div>
    </>
  );
}

