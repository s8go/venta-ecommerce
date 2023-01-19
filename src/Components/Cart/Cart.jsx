import React from "react";
import Image from "../../assets/products/main/ALPHX-EDITS.jpg";
import { FaPlus, FaMinus } from "react-icons/fa";
import { selectProducts } from "../../redux/ProductsSlice";
import { useSelector } from "react-redux/es/exports";

const Cart = () => {
  const products = useSelector((state) => selectProducts(state));
  const product = products && products[47];

  return (
  <>
  {product &&
      <div className="p-4 lg:px-12 mt-24">
      <h1>Cart</h1>

      <div className="flex flex-col lg:flex-row justify-between lg:h-fit text-orange-900 ">
        <div>
          <Prod product={product}/>
          <Prod product={product}/>
          <Prod product={product}/>
          <Prod product={product}/>
          <Prod product={product}/>
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
  }
  </>
  );
};

export default Cart;

const Prod = ({product}) => (
 <>
 {
   <div className="flex  w-full lg:w-[30em]  mb-12 shadow-sm shadow-orange-200">
    <img src={Image} alt="product" className="block w-24 h-1/2  " />

    <div className="px-5 flex flex-col justify-between  w-full">
      <div>
        {" "}
        <p className="text-sm">{product.title}</p>
     
        <p className=" text-sm mt-2">
          <span className="font-bold">Size: </span> <span>{"XL"}</span>
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
 }
 </>
);
