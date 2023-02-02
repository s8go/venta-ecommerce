import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux/es/exports";
import { getCategories } from "../../redux/ProductsSlice";
import { useNavigate } from "react-router-dom";
const menuVariants = {
  init: {
    x: "-100vw",
  },

  current: {
    x: "0",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Menu = ({ openMenu, setOpenMenu }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [showDrop, setShowDrop] = useState(null);

  async function showProducts(cat, url) {
    await dispatch(getCategories(cat));
    await Navigate(url);
    return;
  }



  // const shoes = useSelector(state => state.products.data.allProducts);
  // ?.filter(prod => prod.category.includes("shoes"))
  // console.log(shoes.map(i => i.category))

  return (
    <>
      {openMenu && (
        <AnimatePresence>
          <motion.div
            className={`fixed top-0  left-0  w-full h-full bg-text-show z-[10001]`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
              when: "beforeChildren",
            }}
          >
            <motion.ul
              className="w-4/5 h-full bg-orange-900"
              variants={menuVariants}
              initial="init"
              animate="current"
              exit="init"
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <li className="text-right p-4 ">
                <p
                  className="cursor-pointer flex justify-end"
                  onClick={() => setOpenMenu(false)}
                >
                  <svg width="15" height="15">
                    <line
                      stroke="rgb(255 237 213)"
                      strokeWidth="2"
                      x1="0"
                      x2="15"
                      y1="0"
                      y2="15"
                    />
                    <line
                      stroke="rgb(255 237 213)"
                      strokeWidth="2"
                      x1="15"
                      x2="0"
                      y1="0"
                      y2="15"
                    />
                  </svg>
                </p>
              </li>
              <li className="mt-2">
                <div className={`border-b border-orange-100 px-4 pb-2 ${showDrop === "gadgets" ? "h-24" : "h-8"} duration-500`}>
                  {" "}
                  <p
                    onClick={() =>
                     setShowDrop((curr) =>{
                      if (curr !== "gadgets") return "gadgets";
                      else return null;
                     })
                    }
                    className="cursor-pointer hover:text-base hover:text-white duration-300 text-sm  lg:text-base flex items-center justify-between"
                  >
                    Gadgets

                    <svg width={"8"} height="6">
                      <line x1="0" y1="0" x2="4" y2="6" fill="red" stroke="white"/>
                      <line x1="4" y1="6" x2="8" y2="0" fill="red" stroke="white"/>

                     </svg>
                  </p>
                  {
showDrop === "gadgets" &&
                    <motion.div
                    initial = {{
                      y: '1em'
                    }}

                    animate = {{
                      y: 0
                    }}
                    transition = {{
                      stiffness: 10,
                    }}
                    >
                    <p className="text-[0.65em] mt-2 cursor-pointer"  onClick={() => showProducts("smartphones", "/products/smartphones") }>
                      Smartphones
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer "  onClick={() => showProducts("laptops", "/products/laptops") }>
                     Laptops

                    
          
                    </p>
                    </motion.div>
                  }

                  
                </div>
              </li>

             

              <li>
              <div className={`border-b mt-3 border-orange-100 px-4 ${showDrop === "Shoes" ? "h-24" : "h-8"} duration-500`}>
                  {" "}
                  <p
                    onClick={() =>
                     setShowDrop((curr) =>{
                      if (curr !== "Shoes") return "Shoes";
                      else return null;
                     })
                    }
                    className="cursor-pointer hover:text-base hover:text-white duration-300 text-sm  lg:text-base flex items-center justify-between"
                  >
                    Shoes

                    <svg width={"8"} height="6">
                      <line x1="0" y1="0" x2="4" y2="6" fill="red" stroke="white"/>
                      <line x1="4" y1="6" x2="8" y2="0" fill="red" stroke="white"/>

                     </svg>
                  </p>
                  {
showDrop === "Shoes" &&
                    <motion.div
                    initial = {{
                      y: '1em'
                    }}

                    animate = {{
                      y: 0
                    }}
                    transition = {{
                      stiffness: 10,
                    }}
                    >
                    <p className="text-[0.65em] mt-2 cursor-pointer"   onClick={() => showProducts("mens-shoes", "/products/mens-shoes") }>
                     Men's Shoes
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("womens-shoes", "/products/womens-shoes") }>
                    Women's Shoes

                    
          
                    </p>
                    </motion.div>
                  }

                  
                </div>
              </li>

              <li>
              <div className={`border-b mt-3 border-orange-100 px-4 ${showDrop === "clothing" ? "h-28" : "h-8"} duration-500`}>
                  {" "}
                  <p
                    onClick={() =>
                     setShowDrop((curr) =>{
                      if (curr !== "clothing") return "clothing";
                      else return null;
                     })
                    }
                    className="cursor-pointer hover:text-base hover:text-white duration-300 text-sm  lg:text-base flex items-center justify-between"
                  >
                    clothing

                    <svg width={"8"} height="6">
                      <line x1="0" y1="0" x2="4" y2="6" fill="red" stroke="white"/>
                      <line x1="4" y1="6" x2="8" y2="0" fill="red" stroke="white"/>

                     </svg>
                  </p>
                  {
showDrop === "clothing" &&
                    <motion.div
                    initial = {{
                      y: '1em'
                    }}

                    animate = {{
                      y: 0
                    }}
                    transition = {{
                      stiffness: 10,
                    }}
                    >
                    <p className="text-[0.65em] mt-2 cursor-pointer"   onClick={() => showProducts("mens-shirts", "/products/mens-shirts") }>
                     Men Shirts
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("womens-dresses", "/products/womens-dresses") }>
                    Women Dresses

                    
          
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("tops", "/products/tops") }>
                   Tops
                    </p>

                    </motion.div>
                  }

                  
                </div>
              </li>

              <li>
              <div className={`border-b mt-3 border-orange-100 px-4 ${showDrop === "Accessories" ? "h-40" : "h-8"} duration-500`}>
                  {" "}
                  <p
                    onClick={() =>
                     setShowDrop((curr) =>{
                      if (curr !== "Accessories") return "Accessories";
                      else return null;
                     })
                    }
                    className="cursor-pointer hover:text-base hover:text-white duration-300 text-sm  lg:text-base flex items-center justify-between"
                  >
                    Accessories

                    <svg width={"8"} height="6">
                      <line x1="0" y1="0" x2="4" y2="6" fill="red" stroke="white"/>
                      <line x1="4" y1="6" x2="8" y2="0" fill="red" stroke="white"/>

                     </svg>
                  </p>
                  {
showDrop === "Accessories" &&
                    <motion.div
                    initial = {{
                      y: '1em'
                    }}

                    animate = {{
                      y: 0
                    }}
                    transition = {{
                      stiffness: 10,
                    }}
                    >
                    <p className="text-[0.65em] mt-2 cursor-pointer"   onClick={() => showProducts("sunglasses", "/products/sunglasses") }>
                    Sunglasses
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("womens-jewellery", "/products/womens-jewellery") }>
                    Women's Jewellery
                    </p>

        

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("womens-bags", "/products/womens-bags") }>
                    Women's Bags
                    </p>

                   

                    <p className="text-[0.65em] mt-2  cursor-pointer"  onClick={() => showProducts("womens-watches", "/products/womens-watches") }>
                    Women's Watches

                    
          
                    </p>
                    <p className="text-[0.65em] mt-2 cursor-pointer"  onClick={() => showProducts("mens-watches", "/products/mens-watches") }>
                     Men's Watches
                    </p>
                    </motion.div>
                  }

                  
                </div>
              </li>
              

              <li>
              <div className={`border-b mt-3 border-orange-100 px-4 ${showDrop === "cosmetics" ? "h-24" : "h-8"} duration-500`}>
                  {" "}
                  <p
                    onClick={() =>
                     setShowDrop((curr) =>{
                      if (curr !== "cosmetics") return "cosmetics";
                      else return null;
                     })
                    }
                    className="cursor-pointer hover:text-base hover:text-white duration-300 text-sm  lg:text-base flex items-center justify-between"
                  >
                    cosmetics

                    <svg width={"8"} height="6">
                      <line x1="0" y1="0" x2="4" y2="6" fill="red" stroke="white"/>
                      <line x1="4" y1="6" x2="8" y2="0" fill="red" stroke="white"/>

                     </svg>
                  </p>
                  {
showDrop === "cosmetics" &&
                    <motion.div
                    initial = {{
                      y: '1em'
                    }}

                    animate = {{
                      y: 0
                    }}
                    transition = {{
                      stiffness: 10,
                    }}
                    >
                    <p className="text-[0.65em] mt-2 cursor-pointer"   onClick={() => showProducts("skincare", "/products/skincare") }>
                     Skincare
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("fragrances", "/products/fragrances") }>
                    Fragrances
                    
          
                    </p>

                    </motion.div>
                  }

                  
                </div>
              </li>

            
              

              <li>
              <div className={`border-b mt-3 border-orange-100 px-4 ${showDrop === "Home Decor" ? "h-28" : "h-8"} duration-500`}>
                  {" "}
                  <p
                    onClick={() =>
                     setShowDrop((curr) =>{
                      if (curr !== "Home Decor") return "Home Decor";
                      else return null;
                     })
                    }
                    className="cursor-pointer hover:text-base hover:text-white duration-300 text-sm  lg:text-base flex items-center justify-between"
                  >
                    Home Decor

                    <svg width={"8"} height="6">
                      <line x1="0" y1="0" x2="4" y2="6" fill="red" stroke="white"/>
                      <line x1="4" y1="6" x2="8" y2="0" fill="red" stroke="white"/>

                     </svg>
                  </p>
                  {
showDrop === "Home Decor" &&
                    <motion.div
                    initial = {{
                      y: '1em'
                    }}

                    animate = {{
                      y: 0
                    }}
                    transition = {{
                      stiffness: 10,
                    }}
                    >
                    <p className="text-[0.65em] mt-2 cursor-pointer"   onClick={() => showProducts("furniture", "/products/furniture") }>
                   Furnitures
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("home-decoration", "/products/home-decoration") }>
                   Appliances
                    
          
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("lighting", "/products/lighting") }>
               Lighting
          
                    </p>

                    </motion.div>
                  }

                  
                </div>
              </li>

              <li>
              <div className={`border-b mt-3 border-orange-100 px-4 ${showDrop === "others" ? "h-28" : "h-8"} duration-500`}>
                  {" "}
                  <p
                    onClick={() =>
                     setShowDrop((curr) =>{
                      if (curr !== "others") return "others";
                      else return null;
                     })
                    }
                    className="cursor-pointer hover:text-base hover:text-white duration-300 text-sm  lg:text-base flex items-center justify-between"
                  >
                    others

                    <svg width={"8"} height="6">
                      <line x1="0" y1="0" x2="4" y2="6" fill="red" stroke="white"/>
                      <line x1="4" y1="6" x2="8" y2="0" fill="red" stroke="white"/>

                     </svg>
                  </p>
                  {
showDrop === "others" &&
                    <motion.div
                    initial = {{
                      y: '1em'
                    }}

                    animate = {{
                      y: 0
                    }}
                    transition = {{
                      stiffness: 10,
                    }}
                    >
                    <p className="text-[0.65em] mt-2 cursor-pointer"   onClick={() => showProducts("automotive", "/products/automotive") }>
                   Automotive
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("motocycle", "/products/motocycle") }>
Motocycle
                    
          
                    </p>

                    <p className="text-[0.65em] mt-2  cursor-pointer"   onClick={() => showProducts("groceries", "/products/groceries") }>
               Groceries
          
                    </p>

                    </motion.div>
                  }

                  
                </div>
              </li>

              

              <li className="p-2">
                <div className="flex flex-col items-center text-sm">
                  <p className="m-3">Sign in</p>
                  <p className="text-xl border bg-orange-100 text-orange-900 w-10 hover:bg-orange-300 duration-300 p-2 text-center cursor-pointer">
                    {" "}
                    <FaGoogle />
                  </p>
                </div>
              </li>
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Menu;
