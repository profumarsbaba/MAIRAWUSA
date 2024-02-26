import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Shop from './Pages/Shop';
import LoginSignUp from './Pages/LoginSignUp';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Component/Footer/Footer'
import biskit12 from './Component/Asset/biskit12.jpeg';
import milik2 from './Component/Asset/milik2.png';
import omo12 from './Component/Asset/omo12.jpeg';
import alawa7 from './Component/Asset/alawa7.jpeg'

function App() {

  return (
    <div className="">
      
        <Router>
        <Navbar />
          <Routes>
          
             <Route path="/" element={<Shop />} />
             <Route path="/alawa" element={<ShopCategory banner={alawa7} category='alawa'/>}/>
             <Route path="/biskit" element={<ShopCategory banner={biskit12} category='biskit'/>}/>
             <Route path="/milik" element={<ShopCategory banner={milik2}  category='milik'/>}/>
             <Route path="/omo" element={<ShopCategory banner={omo12} category='omo'/>}/>
             <Route path="/product" element={<Product />}>
                <Route path=":productId" element={<Product />}/>
             </Route>
             <Route path="/cart" element={<Cart />} />
             <Route path="/login" element={<LoginSignUp />} />
          </Routes>
          <Footer />
        </Router>
       
    </div>
  );
}

export default App;
