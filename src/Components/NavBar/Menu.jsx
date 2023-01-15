import React from 'react'
import { FaGreaterThan, FaGoogle } from 'react-icons/fa'

const Menu = ({openMenu, setOpenMenu}) => {
  return (
<div className={`fixed top-0 ${openMenu ? "left-0" : "-left-[100vw]"}  w-full h-full bg-text-show z-[10000]`}>
<ul className='w-4/5 h-full bg-orange-900 z-[10000]'>
  <li className='text-right p-4 '><p className='cursor-pointer' onClick={()=>setOpenMenu(false)}>close</p></li>
  <li className='mt-20'>
    <div> <p
            className="text-sm border-b border-orange-100 lg:text-base p-4 flex justify-between"
          >
           New Arrivals
            <span className="ml-4 inline-block rotate-90 ">
              <FaGreaterThan />
            </span>{" "}
          </p></div>
  </li>

  <li>
    <div> <p
            className="text-sm border-b border-orange-100 lg:text-base p-4 flex justify-between"
          >
         VentaXclusive
            <span className="ml-4 inline-block rotate-90 ">
              <FaGreaterThan />
            </span>{" "}
          </p></div>
  </li>

  <li>
    <div> <p
            className="text-sm border-b border-orange-100 lg:text-base p-4 flex justify-between"
          >
          Clothing
            <span className="ml-4 inline-block rotate-90 ">
              <FaGreaterThan />
            </span>{" "}
          </p></div>
  </li>

  <li>
    <div> <p
            className="text-sm border-b border-orange-100 lg:text-base p-4 flex justify-between"
          >Dresses
            <span className="ml-4 inline-block rotate-90 ">
              <FaGreaterThan />
            </span>{" "}
          </p></div>
  </li>

  <li>
    <div> <p
            className="text-sm border-b border-orange-100 lg:text-base p-4 flex justify-between"
          >Shoes
            <span className="ml-4 inline-block rotate-90 ">
              <FaGreaterThan />
            </span>{" "}
          </p></div>
  </li>

  <li>
    <div> <p
            className="text-sm border-b border-orange-100 lg:text-base p-4 flex justify-between"
          >
         Accessories
            <span className="ml-4 inline-block rotate-90 ">
              <FaGreaterThan />
            </span>{" "}
          </p></div>
  </li>

  <li>
    <div> <p
            className="text-sm border-b border-orange-100 lg:text-base p-4 flex justify-between"
          >
         Sale
            <span className="ml-4 inline-block rotate-90 ">
              <FaGreaterThan />
            </span>{" "}
          </p></div>
  </li>

  <li className='p-4'>
    <div className='flex flex-col items-center text-sm'>
      <p className='m-5'>Sign in</p>
   <p  className='text-2xl border bg-orange-100 text-orange-900 w-12 p-2 text-center cursor-pointer'> <FaGoogle/></p>
    </div>
  </li>
 </ul>
</div>
  )
}

export default Menu