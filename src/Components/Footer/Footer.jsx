import React from 'react'
export default function Footer() {
  return (
    <>
    <div className="bg-[#2c3e50] text-white py-10 w-screen">
        <div className="flex flex-wrap">
        <div className="text-center gap-3 mb-4  w-full md:w-1/3">
          <h1 className="text-xl pt-3 font-bold">LOCATION</h1>
          <p className='pt-3'>2215 John Daniel Drive</p>
          <p className='pt-3'>Clark, MO 65243</p>
        </div>
        <div className="text-center mb-4 w-full md:w-1/3">
            <h1 className="text-xl pt-3 font-bold">AROUND THE WEB</h1>
            <div className="flex flex-wrap justify-center items-center gap-x-8 mt-5">
                <i className="fab fa-facebook-f border-solid rounded-full border-2 p-3"></i>
                <i className="fab fa-twitter border-solid rounded-full border-2 p-3"></i>
                <i className="fab fa-linkedin border-solid rounded-full border-2 p-3"></i>
                <i className="fab fa-x-twitter border-solid rounded-full border-2 p-3"></i>
                </div>      
            </div>
        <div className="text-center mb-4  w-full md:w-1/3">
        <h1 className="text-xl pt-3 font-bold">AROUND THE FREELANCER</h1>
        <div className='text-center'>Freelance is a free to use, licensed Bootstrap theme created</div>
        <div>by Route</div>
        </div>
        </div>
    </div>
    <div className="bg-[#212529] text-white w-screen">
        <div className='text-center pt-7 pb-7'>Copyright © Your Website 2021</div>
    </div>
    </>
  )
}
