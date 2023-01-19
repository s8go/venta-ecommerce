import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "../../assets/products/main/ALPHX-EDITS.jpg";
import { FaGreaterThan } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../redux/ProductsSlice";
import { useSelector } from "react-redux/es/exports";

const Products = () => {
  // const [products, setProducts] = useState(undefined)
  //   const {id} = useParams();

  const products = useSelector((state) => selectProducts(state));
  const [posts, setPosts] = useState([0, 12])
  const [paginStart, setPaginStart] = useState()
  const length = products && new Array(Math.ceil(products.length/12)).fill(0).slice(paginStart);
  console.log()


  return (
    <>
      {products !== undefined && (
        <div className="text-orange-900  text-center p-4 mt-24">
          <div className="mt-8 mb-16">
            <h1 className="text-2xl">Casual Dresses</h1>

            <div className="flex flex-col lg:flex-row justify-between mt-4 lg:px-8">
              <p>{products.length} Products</p>
              <div className="flex justify-center lg:justify-between mt-4">
                <p className="border border-orange-900 px-4 py-2 mx-2 w-1/2 lg:w-32 flex justify-between cursor-pointer">
                  Filter
                  <span className="ml-4 inline-block rotate-90 ">
                    <FaGreaterThan />
                  </span>
                </p>
                <p className="border border-orange-900 px-4 py-2 mx-2 w-1/2 lg:w-32 flex justify-between cursor-pointer">
                  Sort By
                  <span className="ml-4 inline-block rotate-90 ">
                    <FaGreaterThan />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-3 py-4 lg:grid-cols-4 place-items-center ">
            {products.slice(posts[0], posts[1]).map((item, index) => {
                return (
                  <div key={item.id}>
                    <Prod
                      image={item.thumbnail}
                      price={item.price}
                      title={item.title}
                    />
                  </div>
                );
            })}
          </div>

          <div className="grid grid-cols-11 items-center">
            {
          length.map((pag, index)=>{
            
           if(index >= paginStart)  return <p className="bg-red-500 mx-1 text-sm p-1 cursor-pointer" key={products[index].id}>{posts[0] + 1 + index}</p>;
          })
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Products;

const Prod = ({ title, price, image }) => (
  <motion.div
    className=" w-[40vw] md:w-60 xl:w-72 h-[15em] lg:h-[25em] mt-4 lg:mt-12 text-center"
    initial={{
      y: 70,
    }}
    whileInView={{
      y: 0,
    }}
    transition={{
      duration: 0.5,
    }}
    viewport={{
      once: false,
      amount: 0.2,
    }}
  >
    <img src={image} alt="Products" className="block w-full h-3/5" />
    <div className="h-2/5 w-full grid items-center justify-center shadow-orange-200 shadow-md">
      <div className="text-base lg:text-lg">
        <h5>{title}</h5>
        <p>${price}</p>
      </div>
    </div>
  </motion.div>
);