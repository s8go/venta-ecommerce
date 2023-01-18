import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCartArrowDown, FaBars, FaSearch } from "react-icons/fa";
import Menu from "./Menu";

const AdVariant = {
  init: { y: 100 },
  current: { y: 0, transition: { duration: 0.5, when: "beforeChildren" } },
};
const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
 <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <motion.div
        className={`h-12 min-h-{50px} min-w-{200px} fixed w-full top-0 left-0 z-[10000] text-center bg-orange-900 text-orange-100 pt-2 lg:flex justify-center items-center`}
        variants={AdVariant}
        initial="init"
        animate="current"
      >
        <motion.p
          className="text-[0.6em] lg:pr-2"
          initial={{
            x: "0vw"
          }}
          animate={{
            x: ["80vw", "0vw", "0vw", "0vw","0vw", "-80vw", "0vw", "0vw","0vw","80vw"],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 3,
            duration: 20,
          }}
        >
          BUY ONLINE + PICK UP IN STORE
        </motion.p>
        <motion.p className="text-[0.65em]"
          initial={{
            x: "0vw"
          }}
          animate={{
            x: ["-80vw", "0vw", "0vw", "0vw","0vw", "80vw", "0vw", "0vw","0vw","-80vw"],
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
        <div className="text-orange-900 text-lg">
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

        <div className="flex text-orange-900  p-1 text-lg justify-between w-14">
          <FaSearch />

          <Link to="/cart">
            <FaCartArrowDown />
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
          <li><p className="cursor-pointer">New Arrival</p></li>
          <li><p className="cursor-pointer">Men Wears</p></li>
          <li><p className="cursor-pointer">Ladies</p></li>
          <li><p className="cursor-pointer">Smartphones</p></li>
          <li><p className="cursor-pointer">Electronics</p></li>
          <li><p className="cursor-pointer">Fashion</p></li>
        </ul>

        <div className="flex text-orange-900 text-lg justify-between w-32 h-full cursor-pointer">
        <div className="flex text-orange-900  p-1 text-lg justify-between  w-32 h-full">
          <FaSearch />
        </div>
          <FaCartArrowDown className="block w-[500px] h-full " />
        </div>
      </motion.nav>
    </>
  );
};

export default MobileNav;
