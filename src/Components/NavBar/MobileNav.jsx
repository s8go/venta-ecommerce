import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCartArrowDown, FaBars, FaSearch } from "react-icons/fa";
import Menu from "./Menu";
import { useSelector } from "react-redux/es/exports";
import { selectCart, getCategories } from "../../redux/ProductsSlice";
import { useDispatch } from "react-redux";

const AdVariant = {
  init: { y: 100 },
  current: { y: 0, transition: { duration: 0.5, when: "beforeChildren" } },
};
const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const cart = useSelector((state) => selectCart(state));
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  async function showProducts(cat, url) {
    await dispatch(getCategories(cat));
    await Navigate(url);
    return;
  }

  return (
    <>
      <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <motion.div
        className={`h-12 min-h-{50px} min-w-{200px} fixed w-full top-0 left-0 z-[9000] text-center bg-orange-900 text-orange-100 pt-2 lg:flex justify-center items-center`}
        variants={AdVariant}
        initial="init"
        animate="current"
      >
        <motion.p
          className="text-[0.6em] lg:pr-2"
          initial={{
            x: "0vw",
          }}
          animate={{
            x: [
              "80vw",
              "0vw",
              "0vw",
              "0vw",
              "0vw",
              "-80vw",
              "0vw",
              "0vw",
              "0vw",
              "80vw",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 3,
            duration: 20,
          }}
        >
          BUY ONLINE + PICK UP IN STORE
        </motion.p>
        <motion.p
          className="text-[0.65em]"
          initial={{
            x: "0vw",
          }}
          animate={{
            x: [
              "-80vw",
              "0vw",
              "0vw",
              "0vw",
              "0vw",
              "80vw",
              "0vw",
              "0vw",
              "0vw",
              "-80vw",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            duration: 20,
          }}
        >
          select "store pick up" at checkout + pick up same day!
        </motion.p>
      </motion.div>

      <motion.nav
        className={`bg-orange-100 shadow-md shadow-orange-200 fixed  top-12
        } w-full flex justify-between items-center p-6 h-8 z-[10000] lg:hidden`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-orange-900 text-lg cursor-pointer">
          <FaBars onClick={() => setOpenMenu(true)} />
          {/* <p onClick={()=>setOpenMenu(true)}>menu</p> */}
        </div>

        <Link to="/">
          <svg width="100" height="30" className="">
            <text x="40" y="25" fontSize={"20"} fill="rgb(124 45 18)">
              ENTA
            </text>
            <path
              d="M0 0 L5 0 L15 20 L20 0 L25 0 L45 0 L15 30 Z"
              fill="rgb(124 45 18)"
            />
          </svg>
        </Link>

        <div className="flex text-orange-900  p-1 text-lg justify-between w-14 relative">
          <FaSearch />

          <Link to="/cart">
            <FaCartArrowDown />
            {cart.length > 0 && (
              <p className="absolute left-[80%] bottom-4 bg-green-500 z-10 text-white w-4 h-5 px-1 text-sm rounded-lg">
                {cart.length}
              </p>
            )}
          </Link>
        </div>
      </motion.nav>

      <motion.nav
        className={`bg-orange-100 shadow-md shadow-orange-200 fixed  top-12
        } right-0 w-full justify-between items-center h-12 min-h-{50px} p-3 z-[10000] hidden lg:flex`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <svg width="100" height="30" className="">
            <text x="40" y="25" fontSize={"20"} fill="rgb(124 45 18)">
              ENTA
            </text>
            <path
              d="M0 0 L5 0 L15 20 L20 0 L25 0 L45 0 L15 30 Z"
              fill="rgb(124 45 18)"
            />
          </svg>
        </Link>

        <ul className="flex justify-between text-sm text-orange-900 w-full mx-32 ">
          <li className="group relative ">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Gadgets
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-24 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("smartphones", "/products/smartphones")
                }
              >
                Smartphones
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("laptops", "/products/laptops")}
              >
                Laptops
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Shoes
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-24 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("mens-shoes", "/products/mens-shoes")
                }
              >
                Men's Shoes
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-shoes", "/products/womens-shoes")
                }
              >
                Women's Shoes
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Clothing
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-28 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("mens-shirts", "/products/mens-shirts")
                }
              >
                Men's Shirts
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-dresses", "/products/womens-dresses")
                }
              >
                Women's Dresses
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("tops", "/products/tops")}
              >
                Tops
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Accessories
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-28 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("sunglasses", "/products/sunglasses")
                }
              >
                Sunglasses
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-jewellery", "/products/womens-jewellery")
                }
              >
                Women's Jewellery
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-bags", "/products/womens-bags")
                }
              >
                Women's Bags
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-watches", "/products/womens-watches")
                }
              >
                Women's Watches
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("mens-watches", "/products/mens-watches")
                }
              >
                Men's Watches
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Cosmetics
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-28 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("skincare", "/products/skincare")}
              >
                Skincare
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("fragrances", "/products/fragrances")
                }
              >
                Fragrances
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Home Decor
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-28 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("furniture", "/products/furniture")}
              >
                Furnitures
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("home-decoration", "/products/home-decoration")
                }
              >
                Appliances
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("lighting", "/products/lighting")}
              >
                Lighting
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Others
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-24 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("automotive", "/products/automotive")
                }
              >
                Automotive
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("motocycle", "/products/motocycle")}
              >
                Motocycle
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("groceries", "/products/groceries")}
              >
                Groceries
              </p>
            </div>
          </li>
        </ul>

        <div className="flex text-orange-900 text-lg justify-between w-32 h-full cursor-pointer relative">
          <div className="flex text-orange-900  p-1 text-lg justify-between  w-32 h-full">
            <FaSearch />
          </div>
          <Link to={"/cart"}>
            <FaCartArrowDown className="block w-20 h-full " />
            {cart.length > 0 && (
              <p className="absolute left-[70%] bottom-3 bg-green-500 z-10 text-white w-5 h-5 grid place-items-center  text-xs rounded-lg">
                {cart.length}
              </p>
            )}
          </Link>
        </div>
      </motion.nav>
    </>
  );
};

export default MobileNav;
