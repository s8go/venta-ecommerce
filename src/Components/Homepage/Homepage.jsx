import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import LandingImage from "../../assets/products/main/vurN9fsQ-copy-1170x641.jpg";
import ProductImage from "../../assets/products/main/ALPHX-EDITS.jpg";
import { useRef } from "react";
//swiper css
import "swiper/css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const Navigate = useNavigate();

  const elem = useRef(null);

  return (
    <div className="p-2 mt-24 overflow-hidden">
      <div
        className="h-[80vh]  relative lg:h-[95vh] min-h-[200px] lg:min-h-[500px] mt-1 cursor-pointer"
        onClick={() => Navigate("/products/new-arrivals")}
      >
        <motion.img
          src={LandingImage}
          alt="New Arrivals"
          className="block h-full w-full filter brightness-90"
          initial={{
            height: 0,
          }}
          animate={{
            height: "100%",
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 120,
          }}
        />
        <h4 className="font-redRose italic font-thin text-4xl lg:text-[5vw] absolute top-[50%] right-0  p-2">
          New Arrivals
        </h4>
      </div>

      <div
        id="elem"
        className="h-12 text-center bg-orange-200 text-orange-900 pt-2 lg:flex justify-center items-center"
        ref={elem}
      >
        <p className="text-[0.8em] lg:pr-2">BUY ONLINE + PICK UP IN STORE</p>
        <p className="text-[0.7em]">
          select "store pick up" at checkout + pick up same day!
        </p>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-lg lg:text-xl text-orange-900">For The Ladies</h3>

        <div className="grid grid-cols-sm lg:grid-cols-4 mt-12 items-end lg:h-[33em]">
          <ProductCategories
            src={ProductImage}
            delay={0.2}
            onClick={() => Navigate("/products/ladies/lastest")}
          >
            SHOP NEW{" "}
          </ProductCategories>
          <ProductCategories
            src={ProductImage}
            delay={0.4}
            onClick={() => Navigate("/products/ladies/undies")}
          >
            SHOP UNDIES
          </ProductCategories>
          <ProductCategories
            src={ProductImage}
            delay={0.2}
            onClick={() => Navigate("/products/jewelry")}
          >
            SHOP JEWELRY
          </ProductCategories>
          <ProductCategories
            src={ProductImage}
            delay={0.4}
            onClick={() => Navigate("/products/ladies/bumshort")}
          >
            SHOP BUMSHORT
          </ProductCategories>
        </div>

        <div className="mt-8 lg:flex p-1 w-full">
          <motion.div
            className="h-72 relative lg:h-[30em] lg:mr-[2px] "
            initial={{
              x: "30vw",
            }}
            whileInView={{
              x: "0vw",
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
          >
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full filter brightness-90"
            />
            <div
              className="absolute w-full h-full top-0 left-0 flex justify-center items-start flex-col  p-3 cursor-pointer"
              onClick={() => Navigate("/products/latest")}
            >
              <h3 className="text-xl">NEW & BRIGHT</h3>
              <button className="text-lg border border-orange-100 p-2">
                SHOP NEW
              </button>
            </div>
          </motion.div>

          <motion.div
            className="h-72 relative mt-[1px]  lg:h-[30em] lg:ml-[2px] "
            initial={{
              x: "-20vw",
            }}
            whileInView={{
              x: "0vw",
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
          >
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full filter brightness-90"
            />
            <div
              className="absolute w-full h-full top-0 left-0 flex justify-center items-end flex-col  p-3"
              onClick={() => Navigate("products/shoes/nike-airforce")}
            >
              <h3 className="text-xl">NIKE AIRFORCE</h3>
              <button className="text-lg border border-orange-100 p-2">
                SHOP THIS STYLE
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div>
        <div className="text-center  text-orange-900 pt-2 p-5 lg:flex justify-center items-center">
          <p className="text-sm lg:pr-1">shop new collections 2-3x weekly</p>
          <p
            className="text-sm lg:pl-1 mt-2 lg:mt-0 border-orange-300 border p-2 w-1/2 mx-auto lg:w-auto lg:mx-0 cursor-pointer"
            onClick={() => Navigate("/products/latest")}
          >
            SHOP OUR LATEST RELEASE
          </p>
        </div>

        <motion.div
          className="h-72 relative mt-2 lg:h-[90vh]"
          onClick={() => Navigate("/products")}
          initial={{scale:2}}
          whileInView={{
            scale: 1
          }}

          transition={{
            duration: 1,
          }}

          viewport={{
            once: false,
            amount: 0.1
          }}
          
        >
          <img
            src={LandingImage}
            alt="Show new"
            className="block h-full w-full filter brightness-90"
          />
          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end flex-col p-3 ">
            <button className="text-lg border border-orange-100 p-2">
              SHOP NOW
            </button>
          </div>
        </motion.div>

        <div className="text-center  text-orange-900 pt-2 p-5 lg:flex justify-center items-center">
          <p className="text-sm lg:pr-1">BUY SUNGLASSES</p>
          <p
            className="text-sm lg:pl-1 mt-2 lg:mt-0 border-orange-300 border p-2 w-1/2 mx-auto lg:w-auto lg:mx-0 cursor-pointer"
            onClick={() => Navigate("/products/sunglasses")}
          >
            SHOP FOR SUNGLASSES
          </p>
        </div>

        <div className="lg:flex w-full ">
          <motion.div
            className="h-72 relative w-full lg:h-[30em] lg:mr-[2px]"
            initial={{
              x: "30vw",
            }}
            whileInView={{
              x: "0vw",
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
          >
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full filter brightness-90"
            />

            <div className="absolute w-full h-full top-0 left-0 flex justify-end items-start flex-col p-3 ">
              <p className="text-xl">TREND TO TRY:</p>
              <h3 className="text-xl">PRINTED KNITS</h3>
              <button className="text-lg border border-orange-100 p-2">
                SHOP KNITS
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              x: "-20vw",
            }}
            whileInView={{
              x: "0vw",
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="h-72 relative mt-[1px] w-full lg:h-[30em] lg:ml-[2px] cursor-pointer"
            onClick={() => Navigate("/products")}
          >
            <img
              src={LandingImage}
              alt="Show new"
              className="block h-full w-full filter brightness-90"
            />

            <div className="absolute text-xl w-full h-full top-0 left-0 flex justify-end items-end flex-col p-3">
              <p>NEW FOR 2023:</p>
              <h3>VENTA EXCLUSIVES</h3>
              <button className="text-lg border border-orange-100 p-2">
                SHOP NOW
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:px-8">
          <h3 className="text-lg m-12 text-orange-900 text-center">
            NEW ARRIVALS
          </h3>
          <motion.div
          
          initial={{
            x: "95vw"
          }}
          
          whileInView={{
            x: "0vw"
          }}
          
          viewport={{
            once:false,
          }}>

            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2.2,
                  spaceBetween: 1,
                },

                678: {
                  slidesPerView: 3.2,
                  spaceBetween: 1,
                },

                1025: {
                  slidesPerView: 4,
                  spaceBetween: 3,
                },
              }}
            >
              <SwiperSlide>
                <NewArrival
                  src={ProductImage}
                  onClick={() => Navigate("/product/")}
                >
                  <h6>Get Sweater</h6>
                  <p>$ 49.99</p>
                </NewArrival>
              </SwiperSlide>

              <SwiperSlide>
                <NewArrival
                  src={ProductImage}
                  onClick={() => Navigate("/product/")}
                >
                  <h6>Get Sweater</h6>
                  <p>$ 49.99</p>
                </NewArrival>
              </SwiperSlide>

              <SwiperSlide>
                <NewArrival
                  src={ProductImage}
                  onClick={() => Navigate("/product/")}
                >
                  <h6>Get Sweater</h6>
                  <p>$ 49.99</p>
                </NewArrival>
              </SwiperSlide>

              <SwiperSlide>
                <NewArrival
                  src={ProductImage}
                  onClick={() => Navigate("/product/")}
                >
                  <h6>Get Sweater</h6>
                  <p>$ 49.99</p>
                </NewArrival>
              </SwiperSlide>
            </Swiper>
          </motion.div>{" "}
        </div>

        <div className="mt-8 text-center text-orange-900">
          <h4 className="text-lg">
            Trendy Clothing & Accessories at Venta - An Online Fashion Store
          </h4>

          <p className="text-sm mt-2 lg:mt-2">
            Venta is a Fashion store with new trendy and affordable arrivals
            dropping 2-3 times weekly.
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductCategories = ({ src, children, onClick, delay }) => {
  return (
    <motion.div
      className="relative min-h-[250px]   mx-auto p-4 lg:w-full lg:h-full"
      onClick={onClick}
      initial={{
        y: 50,
      }}
      whileInView={{
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
      }}
    >
      <img
        src={src}
        alt="Products categories"
        className="block h-full w-full filter brightness-90"
      />
      <div className="absolute top-0 left-0 w-full h-full grid items-center justify-center">
        <button
          className=" text-2
        xl"
        >
          {children}
        </button>
      </div>
    </motion.div>
  );
};

const NewArrival = ({ src, children, onClick }) => {
  return (
    <div
      className=" m-1 w-[90%] h-[20em] lg:h-[30em] text-center cursor-pointer"
      onClick={onClick}
    >
      <img
        src={src}
        alt="Products categories"
        className="block w-full h-[80%]"
      />
      <div className="w-full h-[20%] grid items-center justify-center shadow-orange-200 shadow-md">
        <div className="mt-4 text-sm text-orange-900 ">{children}</div>
      </div>
    </div>
  );
};

export default Homepage;
