import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import LandingImage from "../../assets/products/main/vurN9fsQ-copy-1170x641.jpg";
import ProductImage from "../../assets/products/main/ALPHX-EDITS.jpg";

//swiper css
import "swiper/css"

const Homepage = () => {
  return (
    <div className="pt-0">
<div className="h-12 text-center bg-orange-200 text-orange-900 pt-2">
  <p className="text-[0.6em]">BUY ONLINE + PICK UP IN STORE</p>
  <p className="text-[0.65em]">select "store pick up" at checkout + pick up same day!</p>
</div>

      <div className="h-[50vh]  relative mt-12">
        <img
          src={LandingImage}
          alt="New Arrivals"
          className="block h-full w-full"
        />
        <h4 className="font-redRose italic font-thin text-white absolute top-[50%] right-0 bg-black opacity-40 p-2">
          New Arrivals
        </h4>

      </div>

      <div className="h-12 text-center bg-orange-200 text-orange-900 pt-2">
  <p className="text-[0.6em]">BUY ONLINE + PICK UP IN STORE</p>
  <p className="text-[0.65em]">select "store pick up" at checkout + pick up same day!</p>
</div>

      <div className="text-center mt-8">
        <h3 className="text-base text-orange-900">Men's Underwear</h3>

        <div className="grid grid-cols-sm md:grid-cols-4 mt-2">
          <ProductCategories src={ProductImage}>SHOP </ProductCategories>
          <ProductCategories src={ProductImage}>SHOP </ProductCategories>
          <ProductCategories src={ProductImage}>SHOP </ProductCategories>
          <ProductCategories src={ProductImage}>SHOP </ProductCategories>
        </div>

        <div>
          <div className="h-72 relative ">
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full"
            />
            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-start flex-col bg-text-show p-3">
              <h3 className="text-base">NEW & BRIGHT</h3>
              <button className="text-xs border border-orange-100 p-2">SHOP NEW</button>
            </div>
          </div>

          <div className="h-72 relative mt-[1px]">
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full"
            />
           <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end flex-col bg-text-show p-3">
              <h3 className="text-base">FP DUPE TOPS</h3>
              <button className="text-xs border border-orange-100 p-2">SHOP THIS STYLE</button>
            
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center py-3">
          <h5 className="text-orange-900 text-xs">shop new collections 2-3x weekly</h5>
          <p className="text-orange-900 text-xs border border-orange-300 w-1/2 p-1 mt-3 mx-auto">SHOP OUR LATEST RELEASE</p>
        </div>

        <div className="h-72 relative mt-[1px]">
          <img
            src={LandingImage}
            alt="Show new"
            className="block h-full w-full"
          />
          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end flex-col p-3 bg-text-show">
          <button className="text-xs border border-orange-100 p-2">SHOP NOW</button>
            
          </div>
        </div>

        <div>
        <div className="text-center py-3">
          <h5 className="text-orange-900 text-xs">BUY HER A GIFT CARD</h5>
          <p className="text-orange-900 text-xs border border-orange-300 w-1/2 p-1 mt-3 mx-auto">SHOP FOR GIFT CARDS</p>
        </div>

          <div className="h-48 relative">
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full"
            />

            <div className="absolute w-full h-full top-0 left-0 flex justify-end items-start flex-col p-3 bg-text-show">
              <p>TREND TO TRY:</p>
              <h3>PRINTED KNITS</h3>
              <button className="text-xs border border-orange-100 p-2">SHOP KNITS</button>
            
            </div>
          </div>

          <div className="h-48 relative mt-[1px]">
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full"
            />

            <div className="absolute w-full h-full top-0 left-0 flex justify-end items-end flex-col p-3 bg-text-show">
              <p>NEW FOR 2023:</p>
              <h3>VENTA EXCLUSIVES</h3>
              <button className="text-xs border border-orange-100 p-2">SHOP NOW</button>
            
            </div>
          </div>
        </div>

        <div className="">
            <h3>NEW ARRIVALS</h3>

            <Swiper spaceBetween={0} slidesPerView={3}>
                <SwiperSlide>
                    <NewArrival src={ProductImage}>
                <h6>Get Sweater</h6>
                <p>$ 49.99</p>
                </NewArrival>
                </SwiperSlide>

                <SwiperSlide>
                    <NewArrival src={ProductImage}>
                <h6>Get Sweater</h6>
                <p>$ 49.99</p>
                </NewArrival>
                </SwiperSlide>


                <SwiperSlide>
                    <NewArrival src={ProductImage}>
                <h6>Get Sweater</h6>
                <p>$ 49.99</p>
                </NewArrival>
                </SwiperSlide>

             <SwiperSlide>
                    <NewArrival src={ProductImage}>
                <h6>Get Sweater</h6>
                <p>$ 49.99</p>
                </NewArrival>
                </SwiperSlide>


            </Swiper>
        </div>

        <div className="mt-8 text-center text-orange-900">
            <h4 className="text-lg">Trendy Clothing & Accessories at Venta - An Online Fashion Store</h4>
  
            <p className="text-sm mt-8">
                Venta is a Fashion store with new trendy and affordable arrivals dropping 2-3 times weekly.
            </p>
        </div>
      </div>
    </div>
  );
};

const ProductCategories = ({ src, children }) => {
  return (
    <div className=" m-2 relative  h-48 w-4/5 mx-auto">
      <img src={src} alt="Products categories" className="block h-full w-full"/>
      <div className="absolute top-0 left-0 w-full h-full grid items-center justify-center bg-text-show">
        <h5 className=" text-base">{children}</h5>
      </div>
    </div>
  );
};

const NewArrival = ({ src, children }) => {
    return (
      <div className=" m-1 w-32 text-center border-orange-900 border-2">
        <img src={src} alt="Products categories"  className="block w-full h-full"/>
        <div className="w-full h-full grid items-center justify-center">
         <div className="mt-4 text-sm text-orange-900">
            {children}
         </div>
        </div>
      </div>
    );
  };

export default Homepage;
