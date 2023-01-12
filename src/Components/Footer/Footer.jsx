import React, { useState } from "react";
import {FaGreaterThan} from "react-icons/fa"

const Footer = () => {
const [reveal, setReveal] = useState(false);

const openTab = (prev, curr) =>{
  if(prev !== curr) setReveal(curr)
  else setReveal(false)
}

  return (
    <footer>
      <div>LOGO</div>

    <div className="bg-orange-900 text-center cursor-pointer group">
          
          <div className="border-b border-b-black p-3">
          <p onClick={()=>openTab(reveal, "quick") } className="text-sm flex justify-between px-24">QUICK LINKS <span className="ml-4 inline-block rotate-90 "><FaGreaterThan/></span> </p>
          <ul className={`duration-300 ${reveal === 'quick' ? 'h-28' : 'h-0'}`}>
            <li  className={`${reveal === 'quick' ? 'block' : 'hidden'} text-xs my-2`}><p>FAQs</p></li>
            <li  className={`${reveal === 'quick' ? 'block' : 'hidden'} text-xs my-2`}><p>Contact Us</p></li>
            <li  className={`${reveal === 'quick' ? 'block' : 'hidden'} text-xs my-2`}><p>Privacy Policy</p></li>
            <li  className={`${reveal === 'quick' ? 'block' : 'hidden'} text-xs my-2`}><p>Terms of Service</p></li>
            <li  className={`${reveal === 'quick' ? 'block' : 'hidden'} text-xs my-2`}><p>Refund Policy</p></li>
          </ul>
          </div>

          <div className="border-b border-b-black p-3">
          <p onClick={()=>openTab(reveal, "about") } className="text-sm flex justify-between px-24">ABOUT US <span className="ml-4 inline-block rotate-90 "><FaGreaterThan/></span></p>
          <ul className={`duration-300 ${reveal === 'about' ? 'h-28' : 'h-0'}`}>
            <li  className={`${reveal === 'about' ? 'block' : 'hidden'} text-xs my-2`}><p>Locations</p></li>
            <li  className={`${reveal === 'about' ? 'block' : 'hidden'} text-xs my-2`}><p>Careers</p></li>
            <li  className={`${reveal === 'about' ? 'block' : 'hidden'} text-xs my-2`}><p>Interns</p></li>
            <li  className={`${reveal === 'about' ? 'block' : 'hidden'} text-xs my-2`}><p>Blog</p></li>
          </ul>
          </div>

          <div className="border-b border-b-black p-3">
          <p onClick={()=>openTab(reveal, "sign") } className="text-sm flex justify-between px-24">SIGN UP <span className="ml-4 inline-block rotate-90 "><FaGreaterThan/></span></p>
          <div className={`duration-300 ${reveal === 'sign' ? 'h-28' : 'h-0'}`}>
            <p  className={`${reveal === 'sign' ? 'block' : 'hidden'} text-xs my-2`}>Subscribe to get special offers, free giveaways, and amazing deals.</p>
            <input className={`${reveal === 'sign' ? 'block' : 'hidden'} block w-full  text-center p-2 border rounded-lg text-xs my-2`} placeholder="Enter your email"/>
          
          </div>
          </div>
     </div>

     
    </footer>
  );
};

export default Footer;
