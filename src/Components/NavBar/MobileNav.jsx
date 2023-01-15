import React, {useState, useRef, useEffect} from "react";
import { FaCartArrowDown, FaBars, FaSearch } from "react-icons/fa";
import Menu from "./Menu";

const MobileNav = () => {

  const [fixedNav, setFixedNav] = useState(false);
  const [openMenu, setOpenMenu] =useState(false);

  useEffect(() => {
   setInterval(()=>{
   if(window.scrollY >= 429.5) setFixedNav(true)
   else setFixedNav(false)
   },1000)
  })
  
  return (
    <>
    <Menu setOpenMenu={setOpenMenu} openMenu={openMenu}/>
<div className={`h-12 min-h-{50px} min-w-{200px} ${fixedNav ? "fixed" : "static"} w-full top-0 left-0 z-[10000] text-center bg-orange-200 text-orange-900 pt-2 lg:flex justify-center items-center`}>
  <p className="text-[0.6em] lg:pr-2">BUY ONLINE + PICK UP IN STORE</p>
  <p className="text-[0.65em]">select "store pick up" at checkout + pick up same day!</p>
</div>

      <nav className={`bg-orange-900 ${fixedNav ? "fixed" : "static"} top-12 right-0 w-full flex justify-between items-center p-6 h-8 z-[10000] lg:hidden`}>
        <div className="text-orange-100 text-lg">
          {/* <FaBars onClick={()=>setOpenMenu(true)}/> */}
          <p onClick={()=>setOpenMenu(true)}>menu</p>
        </div>

        <div>
        <svg width="200" height="50" className="text-orange-100">
        <text x="100" y="40"  fontSize={"32"} fill="rgb(255 237 213)">ENTA</text>
         <path d="M50 0 L60 0 L70 30 L80 0 L90 0 L95 5 L75 50 L65 50 L45 5 Z" fill="rgb(255 237 213)"/>
         </svg>
        </div>

        <div className="flex text-orange-100  p-1 text-lg justify-between w-14">
          <FaSearch />
          <FaCartArrowDown />
        </div>
      </nav>

      <nav className={`bg-orange-900  ${fixedNav ? "fixed" : "static"} top-12 right-0 w-full justify-between items-center h-12 min-h-{50px} p-3 z-[10000] hidden lg:flex`}>
        <div className="flex text-orange-100  p-1 text-lg justify-between  w-32 h-full">
          <FaSearch />
        </div>
        <div>
        <svg width="200" height="50" >
        <text x="100" y="40" fontSize={"32"} fill="rgb(255 237 213) ">ENTA</text>
         <path d="M50 2 L60 2 L70 30 L80 2 L90 2 L95 5 L75 45 L65 45 L45 5 Z" fill="rgb(255 237 213)"/>
         </svg>
        </div>

        <div className="flex text-orange-100 text-lg justify-between w-32 h-full">
          <FaCartArrowDown  className="block w-[500px] h-full "/>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
