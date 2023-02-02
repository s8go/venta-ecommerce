import { Route, Routes } from "react-router-dom";
import {useEffect} from "react"
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import MobileNav from "./Components/NavBar/MobileNav";
import Products from "./Components/Products/Products";
import ViewProduct from "./Components/Products/ViewProduct";
import Cart from "./Components/Cart/Cart";
import { useDispatch } from "react-redux/es/exports";
import {productActions } from "./redux/ProductsSlice";
import NoticePage from "./Components/Others/NoticePage";



function App() {
const dispatch = useDispatch();

useEffect(()=>{
  if(window.localStorage.cart === undefined) window.localStorage.cart = JSON.stringify([]);
  else if(window.localStorage.cart.length > 0) JSON.parse(window.localStorage.cart).forEach(element => {
    dispatch(productActions.addToCart(element))
    console.log( JSON.parse(window.localStorage.cart))
  });
  
}, [])

  
  return (
    <div className="font-roboto bg-orange-100 m-0 relative text-orange-100">

      <MobileNav />
     <Routes>
    <Route path="/" element={ <Homepage />}/>
    <Route path="/products" element={ <Products />}/>
    <Route path="/products/:id" element={ <Products />}/>
    <Route path="/product/:id" element={ <ViewProduct />}/>
    <Route path="/cart" element={ <Cart />}/>
    <Route path="*" element={ <NoticePage > Page Not Found...</NoticePage>}/>
     </Routes>
      <Footer />
    </div>
  );
}

export default App;
