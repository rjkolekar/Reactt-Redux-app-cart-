import React from "react";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state)=>state.cart)
  
  return (
    <>
      <div className="h-22">
        <ul className="flex items-center justify-end bg-gray-200">
          <li className="mr-16"><Link to='/'>Products</Link> </li>
          <li><Link to='/cart'>Your-Cart</Link></li>
          <li className="w-16 h-16 mr-16">

            <div className="flex mt-1 ">
              <div>
               <Link to='/cart'><img className="ml-8 rounded-full h-14 object-cover" src="./cart-4.jpg" alt="" /></Link> 
              </div>

              <span className="text-white">{cartItems.length}</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
