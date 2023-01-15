import { Swiper, SwiperSlide } from "swiper/react"
import LandingImage from "../../assets/products/main/vurN9fsQ-copy-1170x641.jpg";
import ProductImage from "../../assets/products/main/ALPHX-EDITS.jpg";
import { useRef } from "react";
//swiper css
import "swiper/css"

const Homepage = () => {

  const elem = useRef(null)
 
  return (
    <div className="p-2">
    

      <div className="h-[50vh]  relative lg:h-[80vh] min-h-[200px] lg:min-h-[500px] mt-1">
        <img
          src={LandingImage}
          alt="New Arrivals"
          className="block h-full w-full filter brightness-90"
        />
        <h4 className="font-redRose italic font-thin text-4xl absolute top-[50%] right-0  p-2">
          New Arrivals
        </h4>
        

      </div>

      <div id="elem" className="h-12 text-center bg-orange-200 text-orange-900 pt-2 lg:flex justify-center items-center" ref={elem}>
  <p className="text-[0.8em] lg:pr-2">BUY ONLINE + PICK UP IN STORE</p>
  <p className="text-[0.7em]">select "store pick up" at checkout + pick up same day!</p>
</div>

      <div className="text-center mt-12">
        <h3 className="text-lg lg:text-xl text-orange-900">Men's Underwear</h3>

        <div className="grid grid-cols-sm lg:grid-cols-4 mt-12 items-end lg:h-[33em]">
          <ProductCategories src={ProductImage}>SHOP </ProductCategories>
          <ProductCategories src={ProductImage}>SHOP </ProductCategories>
          <ProductCategories src={ProductImage}>SHOP </ProductCategories>
          <ProductCategories src={ProductImage}>SHOP </ProductCategories>
        </div>

        <div className="mt-8 lg:flex p-1 w-full">
          <div className="h-72 relative lg:h-[30em] lg:mr-[2px] ">
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full filter brightness-90"
            />
            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-start flex-col  p-3">
              <h3 className="text-base">NEW & BRIGHT</h3>
              <button className="text-xs border border-orange-100 p-2">SHOP NEW</button>
            </div>
          </div>

          <div className="h-72 relative mt-[1px]  lg:h-[30em] lg:ml-[2px] ">
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full filter brightness-90"
            />
           <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end flex-col  p-3">
              <h3 className="text-base">FP DUPE TOPS</h3>
              <button className="text-xs border border-orange-100 p-2">SHOP THIS STYLE</button>
            
            </div>
          </div>
        </div>
      </div>

      <div>

<div className="text-center  text-orange-900 pt-2 p-5 lg:flex justify-center items-center">
  <p className="text-xs lg:pr-1">shop new collections 2-3x weekly</p>
  <p className="text-xs lg:pl-1 mt-2 lg:mt-0 border-orange-300 border p-2 w-1/2 mx-auto lg:w-auto lg:mx-0 cursor-pointer">SHOP OUR LATEST RELEASE</p>
</div>

        <div className="h-72 relative mt-2 lg:h-[25em]">
          <img
            src={LandingImage}
            alt="Show new"
            className="block h-full w-full"
          />
          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end flex-col p-3 bg-text-show">
          <button className="text-xs border border-orange-100 p-2">SHOP NOW</button>
            
          </div>
        </div>

        <div className="text-center  text-orange-900 pt-2 p-5 lg:flex justify-center items-center">
  <p className="text-xs lg:pr-1">BUY HER GIFT CARDS</p>
  <p className="text-xs lg:pl-1 mt-2 lg:mt-0 border-orange-300 border p-2 w-1/2 mx-auto lg:w-auto lg:mx-0 cursor-pointer">SHOP FOR GIFT CARDS</p>
</div>

        <div className="lg:flex w-full ">

          <div className="h-72 relative w-full lg:h-[30em] lg:mr-[2px]">
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

          <div className="h-72 relative mt-[1px] w-full lg:h-[30em] lg:ml-[2px]">
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

        <div className="lg:px-8">
            <h3>NEW ARRIVALS</h3>

            <Swiper 
            breakpoints={{
              0: {
                slidesPerView: 2.2,
                spaceBetween: 1
              },

              678: {
                slidesPerView: 3.2,
                spaceBetween: 1
              },

              1025: {
                slidesPerView: 4,
                spaceBetween: 3
              }
            }}
            >
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
  
            <p className="text-sm mt-8 lg:mt-2">
                Venta is a Fashion store with new trendy and affordable arrivals dropping 2-3 times weekly.
            </p>
        </div>
      </div>
    </div>
  );
};

const ProductCategories = ({ src, children }) => {
  return (
    <div className="relative min-h-[280px]   mx-auto p-4 lg:w-full lg:h-full">
      <img src={src} alt="Products categories" className="block h-full w-full filter brightness-90"/>
      <div className="absolute top-0 left-0 w-full h-full grid items-center justify-center">
        <button className=" text-xl">{children}</button>
      </div>
    </div>
  );
};

const NewArrival = ({ src, children }) => {
    return (
      <div className=" m-1 w-[90%] h-[20em] lg:h-[30em] text-center ">
        <img src={src} alt="Products categories"  className="block w-full h-[80%]"/>
        <div className="w-full h-[20%] grid items-center justify-center shadow-orange-200 shadow-md">
         <div className="mt-4 text-sm text-orange-900 ">
            {children}
         </div>
        </div>
      </div>
    );
  };

export default Homepage;
