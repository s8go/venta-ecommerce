import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { FaGreaterThan, FaGoogle } from 'react-icons/fa'

const menuVariants = {
 init:{
    x: "-100vw"
  },
  
 current:{
    x: "0",
    transition:{
      duration:0.3,
      ease: "easeOut"
    }
  },
  

  
}

const Menu = ({openMenu, setOpenMenu}) => {
  return (
<>
{
  openMenu &&   <AnimatePresence>
  <motion.div className={`fixed top-0  left-0  w-full h-full bg-text-show z-[10001]`}
  initial={{
    opacity:0
  }}
  animate={{
    opacity: 1
  }}
  
  transition={{
    duration:0.2,
    when: "beforeChildren"
  }}
  
 
  >
  <motion.ul className='w-4/5 h-full bg-orange-900'
  variants={menuVariants}
  initial="init"
  
  animate="current"
  
  exit="init"
  
  transition={{
    duration:0.3,
    ease: "easeOut"
  }}
  
  
  >
    <li className='text-right p-4 '><p className='cursor-pointer flex justify-end' onClick={()=>setOpenMenu(false)}>
    <svg width="15" height="15">
  <line stroke="rgb(255 237 213)" strokeWidth="2" x1="0" x2="15" y1="0" y2="15"/>
  <line stroke="rgb(255 237 213)" strokeWidth="2" x1="15" x2="0" y1="0" y2="15"/>

      </svg>
      </p></li>
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
   </motion.ul>
  </motion.div>
  </AnimatePresence>
}
</>

  
  )
}

export default Menu