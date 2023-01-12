import React from 'react'
import {FaCartArrowDown, FaBars, FaSearch} from "react-icons/fa"

const MobileNav = () => {
  return (
    <nav className='bg-orange-900 fixed top-12 right-0 w-full flex justify-between items-center p-6 h-8 z-[10000]'>
        <div className='text-orange-100 text-lg'>
        <FaBars/>
        </div>

      <div>
      <p>Brand LOGO</p>
      </div>

        <div className='flex text-orange-100  p-1 text-lg justify-between w-14'>
            <FaSearch/>
          <FaCartArrowDown/>
         
        </div>
    </nav>
  )
}

export default MobileNav