import { Route, Routes } from "react-router-dom";
import {useEffect} from "react"
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import Menu from "./Components/NavBar/Menu";
import MobileNav from "./Components/NavBar/MobileNav";
import Products from "./Components/Products/Products";
import ViewProduct from "./Components/Products/ViewProduct";
import Cart from "./Components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getProducts, productActions, selectProducts  } from "./redux/ProductsSlice";
import { useProducts } from "./redux/selectors";



function App() {
const dispatch = useDispatch();
const products = useSelector((state) => {return selectProducts(state)})

dispatch(getProducts())
  useEffect(()=>{
  },[])

//  console.log(products)
  
  return (
    <div className="font-roboto bg-orange-100 relative text-orange-100">
    
      <MobileNav />
     <Routes>
    <Route path="/" element={ <Homepage />}/>
    <Route path="/products" element={ <Products />}/>
    <Route path="/products/:id" element={ <Products />}/>
    <Route path="/product" element={ <ViewProduct />}/>
    <Route path="/cart" element={ <Cart />}/>
    <Route path="*" element={ <Homepage />}/>
     </Routes>
      <Footer />
    </div>
  );
}

export default App;
