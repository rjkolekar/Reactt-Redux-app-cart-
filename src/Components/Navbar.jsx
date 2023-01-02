import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="h-22">
        <ul className="flex items-center justify-end bg-emerald-200 ">
          <li className="mr-16"><Link to='/'>Products</Link> </li>
          <li className="w-16 h-16 mr-16">
            <div className="flex mt-1">
              <div>
               <Link to='#'><img className="ml-8 rounded-full " src="./cart-4.jpg" alt="" /></Link> 
              </div>

              <span className="text-white">3</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
