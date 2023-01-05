import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/pages/Products";
import Cart from "./Components/pages/Cart";


const App = ()=> {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}>
          Products
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;


