import React from 'react'

export default function About() {
  return (
    <>
    <div className="bg-[#1abc9c] flex justify-center items-center w-screen min-h-screen">
      <div className="py-6 text-center">
        <div className="text-center">
        <h1 className='text-white pt-4 font-bold text-3xl'>ABOUT COMPONENT</h1>
        <div className="flex justify-center items-center pt-2">
              <span className="relative inline-flex items-center justify-center w-1/4 before:content-[''] before:flex-grow before:h-[2px] before:bg-white before:mr-2 after:content-[''] after:flex-grow after:h-[2px] after:bg-white after:ml-2">
                <span className="text-white mx-2">&#9733;</span>
              </span>
            </div>
        </div>
        <div className="flex flex-wrap justify-center text-white">
          <p className=' w-full  md:w-1/3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className=' w-full mt-3 md:w-1/3 mt-0'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
    </>
  )
}
