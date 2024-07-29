import React from 'react'

export default function NotFound() {
  return (
    <div className="bg-[#1abc9c] flex justify-center items-center w-screen min-h-screen">
        <div className='py-10 text-center'>
          <div className='pt-6'>
            <h2 className='text-white pt-4 font-bold text-3xl'>Sorry,This Page is Not Found please try again</h2>
            <div className="flex justify-center items-center pt-2">
              <span className="relative inline-flex items-center justify-center w-full before:content-[''] before:flex-grow before:h-[2px] before:bg-white before:mr-2 after:content-[''] after:flex-grow after:h-[2px] after:bg-white after:ml-2">
                <span className="text-white mx-2">&#9733;</span>
              </span>
            </div>
            
          </div>
        </div>
      </div>
  )
}
