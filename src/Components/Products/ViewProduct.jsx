import React from 'react'
import { motion } from 'framer-motion'
import Image from "../../assets/products/main/ALPHX-EDITS.jpg"

const ViewProduct = () => {
  return (
    <div className='my-4 mt-24 p-4 lg:px-12  flex flex-col lg:flex-row justify-center items-center text-orange-900 lg:h-[90vh] lg:min-h-[500px]'>
       <motion.div 
       initial={{
        scaleX: 0.5
       }}

       animate={{
        scaleX: 1
       }}

       transition={{
        duration: 0.5
       }}
       className=' lg:w-1/2 h-full w-full'>
       <img src={Image} alt="item" className='block w-full lg:w-4/5 h-[30em] lg:h-full' />
       </motion.div>
        <div className='lg:w-1/2  h-full text-center lg:text-left w-full'>
          <motion.h1
          initial={{
            letterSpacing: '2em'
          }}

          animate={{
            letterSpacing: "0"
          }}

          transition={{
            duration: 0.5
          }}
          
          className='text-2xl'>FINAL SALE: Balenciaga 2020 edition</motion.h1>
          <p className='text-lg mt-4'>
            <span className='inline-block text-red-500 line-through'>$32.00</span> <span className='inline-block ml-8 text-green-500'>$19.99</span> <span className='inline-block ml-8'>Save $12.01</span>
          </p>

          <div >
            <p className='text-xl mt-4'>Colors</p>

            <p className='text-lg mt-3'><span className='rounded-full cursor-pointer shadow-lg shadow-orange-900 bg-red-400 inline-block w-8 h-8'></span> <span className='rounded-full cursor-pointer shadow-lg shadow-orange-900 bg-blue-400 inline-block w-8 h-8 ml-4'></span> <span className='rounded-full cursor-pointer shadow-lg shadow-orange-900 bg-yellow-400 inline-block w-8 h-8 ml-4'></span> <span className='rounded-full cursor-pointer shadow-lg shadow-orange-900 bg-white inline-block w-8 h-8 ml-4'></span></p>
          </div>

          <div>
            <p className='text-xl mt-4'>Sizes</p>

            <p className='text-lg mt-3'><span className='inline-block p-5 cursor-pointer shadow-md shadow-orange-900'>S</span> <span className='inline-block p-5 ml-4 cursor-pointer shadow-md shadow-orange-900'>M</span> <span className='inline-block p-5 ml-4 cursor-pointer shadow-md shadow-orange-900'>L</span> <span className='inline-block p-5 ml-4 cursor-pointer shadow-md shadow-orange-900'>XL</span></p>

            <p className='text-sm mt-6'><span className='inline-block mr-2 w-3 h-3 bg-green-500 rounded-full shadow-md shadow-green-500'></span> In Stock</p>
          </div>

          <div  className='text-sm mt-6'>
          <p className=' border border-orange-900 text-center text-lg p-4 cursor-pointer'>ADD TO CART</p>
            <p className=' border text-orange-100 mt-4 bg-orange-900 text-center text-lg p-4 cursor-pointer'>Buy With Pay</p>
            <p className=' border border-orange-900  mt-4 text-center text-lg p-4 cursor-pointer'>Buy Online - Pickup in store</p>
          </div>
        </div>
    </div>
  )
}

export default ViewProduct