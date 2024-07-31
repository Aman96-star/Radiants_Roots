import React from "react";

function Navbar() {
  return (
    <>
      <div className="h-[230px] w-full">
       
          <div className="h-1/5 w-full  text-[#425934] bg-[#CFE03F] font-allerta  flex gap-11 items-center justify-center">
          <a href="#">
            <div className="div">
              {" "}
              <p className=" font-semibold">
                Up to 30% off plants, bundles, and more!
              </p>
              <p className="font-light text-[10px]">
                🌱 Enjoy Garden Club perks before you join 🌱
              </p>
            </div>
            </a>
    
         <div className="div">  <button className="text-white text-[20px] bg-[#425934]">Shop the deals!</button></div> 
          </div>
       
        <div className="h-2/5 w-full ">
        <ul className="flex gap-52 items-center justify-center">
          <li>Home </li>
          <li>About us</li>
          <li>Wishlist</li>
          <li>Add to cart</li>
        </ul>
        
        </div>
        <div className="h-2/5 w-full bg-[#F2F2F2] flex items-center justify-center">
          <div className="w-3/4 h-3/4  flex items-center justify-center">
            <input className="h-full w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
