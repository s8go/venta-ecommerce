import React from "react";
import Image from "../../assets/products/main/ALPHX-EDITS.jpg";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="p-4 lg:px-12 mt-24">
      <h1>Cart</h1>

      <div className="flex flex-col lg:flex-row justify-center lg:h-fit text-orange-900 ">
        
<div >
    <Prod/>
    <Prod/>
    <Prod/>
    <Prod/>
    <Prod/>

</div>
        <div className=" text-black w-full lg:w-1/2 mt-4 lg:mt-0">
          {" "}
          <p className="text-center text-lg pb-4 flex justify-between">
          <span> Total:</span> <span>$54</span>
          </p>
          <p className=" border text-orange-100 mt-4 bg-orange-900 text-center text-lg p-4 cursor-pointer">
            Buy With Pay
          </p>
          <p className=" border border-orange-900  mt-4 text-center text-lg p-4 cursor-pointer">
            Buy Online - Pickup in store
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const Prod =()=> <div className="flex  w-full lg:w-2/3 mb-12 shadow-sm shadow-orange-200">
<img src={Image} alt="product" className="block w-1/5  " />

<div className="px-5 flex flex-col justify-between  w-full">
  <div>
    {" "}
    <p className="text-sm">FINAL: Balenciaga 2010 Limted Edition</p>
    <p className="mt-3 text-sm">
      <span className="font-bold">Color: </span> <span>red</span>
    </p>
    <p className=" text-sm">
      <span className="font-bold">Size: </span> <span>XL</span>
    </p>
  </div>

  <div className="text-sm flex justify-between">
    <div>
      <p className="border border-orange-900 flex justify-between p-1 cursor-pointer w-20">
        <span>
          <FaMinus />
        </span>{" "}
        7{" "}
        <span>
          <FaPlus />
        </span>
      </p>
      <p className="mt-2 py-2 text-red-500 cursor-pointer">remove</p>
    </div>

    <p>$32</p>
  </div>
</div>
</div>
