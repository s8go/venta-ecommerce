import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { getCategories, selectCategories } from "../../redux/ProductsSlice";
import { useSelector } from "react-redux/es/exports";
import Pagination from "./Pagination";
import Prod from "./Items";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Products = () => {
  // const [products, setProducts] = useState(undefined)
  //   const {id} = useParams();
  const dispatch = useDispatch();
  const {id} = useParams()
  
  const products = useSelector((state) => selectCategories(state));
  const [page, setPage] = useState({
    pageView: 2,
    posts: [0, 12],
  });

  useEffect(()=>{
if(!id.includes("search")) dispatch(getCategories(id))
  }, [])
  
  const [smartPhones, setSmart] = useState(null)

  // console.log(products)
  const [length, setLength] = useState([]);

  useEffect(() => {
    let arr = [];
    if (products) {
      setSmart(products.filter((prod)=>{
        if(prod.category === "smartphones") return prod
      }));
      
      let prods = new Array(Math.ceil(products.length / 12));
      for (let i = 0; i < prods.length; i++) {
        arr.push(i + 1);
      }
    }
    setLength(arr);
  }, [products]);

  function changePage(x) {
    let top = 12 * (x - 1);
    setPage((curr) => {
      if (x !== 1) {
        return { posts: [top, 12 * x], pageView: x };
      }
      return { pageView: 2, posts: [0, 12] };
    });

  }

  return (
    <>
      {products !== undefined && (
        <div className="text-orange-900  text-center p-4 mt-24">
          <div className="mt-8 mb-16">
            <h1 className="text-2xl">{(id[0].toLocaleUpperCase() + id.slice(1).toLocaleLowerCase()) || "All Products"}</h1>

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

          <Pagination length={length} page={page} changePage={changePage}/>

          <div className=" grid grid-cols-2 md:grid-cols-3 py-4 lg:grid-cols-4 place-items-center ">
            {products.slice(page.posts[0], page.posts[1]).map((item, index) => {
              return (
                <div key={item.id}>
                  <Prod
                    image={item.thumbnail}
                    price={item.price}
                    title={item.title}
                    id={item.id}
                  />
                </div>
              );
            })}
          </div>

            <Pagination length={length} page={page} changePage={changePage}/>
       
        </div>
      )}
    </>
  );
};

export default Products;

