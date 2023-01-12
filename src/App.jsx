import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import MobileNav from "./Components/NavBar/MobileNav";

function App() {
  

  return (
    <div className="font-roboto bg-orange-100 relative text-orange-100">
    <MobileNav/>
    <Homepage/>
    <Footer/>
    </div>
  );
}

export default App;
