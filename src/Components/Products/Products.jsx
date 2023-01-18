import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import Image from "../../assets/products/main/ALPHX-EDITS.jpg"
import { FaGreaterThan} from 'react-icons/fa'
import { useParams } from 'react-router-dom'



const Products = () => {
const [products, setProducts] = useState(undefined)
  const {id} = useParams();

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products?limit=100')
  //   .then(res=>res.json())
  //   .then(json=>console.log(json))
  // })
    

  return (
    <div className='text-orange-900  text-center p-4 mt-24'>
        <div className='mt-8'>
            <h1 className='text-2xl'>Casual Dresses</h1>

            <div className='flex flex-col lg:flex-row justify-between mt-4 lg:px-8'>
                <p>12 Products</p>
                <div className='flex justify-center lg:justify-between mt-4'>
                <p className='border border-orange-900 px-4 py-2 mx-2 w-1/2 lg:w-32 flex justify-between cursor-pointer'>Filter<span className="ml-4 inline-block rotate-90 ">
              <FaGreaterThan />
            </span></p>
                <p className='border border-orange-900 px-4 py-2 mx-2 w-1/2 lg:w-32 flex justify-between cursor-pointer'>Sort By<span className="ml-4 inline-block rotate-90 ">
              <FaGreaterThan />
            </span></p>
                </div>
            </div>
        </div>

<div className=' grid grid-cols-2 md:grid-cols-3 py-4 lg:grid-cols-4 place-items-center '>
    <Prod />
    <Prod/>
    <Prod/>
    <Prod/>
    <Prod/>
    <Prod/>
    <Prod/>
    <Prod/>
    <Prod/>
    <Prod/>

</div>

    </div>
  )
}

export default Products;

const Prod =()=><motion.div 
className=" my-8 lg:w-[80%] w-[90%] h-[20em] lg:h-[30em] text-center "
initial={{
  y: 70
}}

whileInView={{
  y: 0
}}

transition={{
  duration: 0.5
}}

viewport={
  {

  once: false,
  amount:0.2
}
}
>
    <img src={Image} alt="Products categories"  className="block w-full h-[80%]"/>
    <div className="w-full h-[20%] grid items-center justify-center shadow-orange-200 shadow-md">
     <div className="mt-4 text-sm text-orange-900 ">
       <h5>dhd</h5>
       <p>49$</p>
     </div>
     </div>
     </motion.div>
    