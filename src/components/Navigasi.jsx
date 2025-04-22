import React from 'react'

import { useState } from 'react'

const Navigasi = () => {

  const { pageActive, setPageActive } = useState("home");
  
  return (
    <div className='fixed z-100 w-full top-0 border-b-1 border-dashed border-white/25 bg-black'>
      <nav className='flex px-2 lg:px-0 justify-between items-center container mx-auto h-12 lg:h-17'>
          <div>
              <h1 className='text-white font-extrabold text-sm lg:text-xl'>Twizz<span>.</span></h1>
          </div>
          <div className='flex gap-3 lg:gap-7'>
              <a href="" className={`text-white relative text-[12px] lg:text-xl`} >Home</a>
              <a href="" className={`text-white relative text-[12px] lg:text-xl`} >About</a>
              <a href="" className={`text-white relative text-[12px] lg:text-xl`} >Project</a>
              <a href="" className={`text-white relative text-[12px] lg:text-xl`} >Contact</a>
          </div>
          <div className='flex text-sm lg:text-xl'>
              <h1 className='text-white'>jkk</h1>
          </div>
      </nav>
    </div>
  )
}

export default Navigasi