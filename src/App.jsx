import { Route, Routes } from "react-router-dom";
import {useEffect} from "react"
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import MobileNav from "./Components/NavBar/MobileNav";
import Products from "./Components/Products/Products";
import ViewProduct from "./Components/Products/ViewProduct";
import Cart from "./Components/Cart/Cart";
import { useDispatch } from "react-redux/es/exports";
import { getProducts  } from "./redux/ProductsSlice";



function App() {
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getProducts())
  },[])

  
  return (
    <div className="font-roboto bg-orange-100 relative text-orange-100">

      <MobileNav />
     <Routes>
    <Route path="/" element={ <Homepage />}/>
    <Route path="/products" element={ <Products />}/>
    <Route path="/products/:id" element={ <Products />}/>
    <Route path="/product/:id" element={ <ViewProduct />}/>
    <Route path="/cart" element={ <Cart />}/>
    <Route path="*" element={ <Homepage />}/>
     </Routes>
      <Footer />
    </div>
  );
}

export default App;
