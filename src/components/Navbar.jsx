import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  console.log("cart", cart);
  return (
    <div className="bg-black flex justify-center ">
      <div className="flex flex-row justify-between w-[70%] items-center p-4">
        <NavLink to={"/"}>
          <img
            className=""
            src="https://res.cloudinary.com/codehelp/image/upload/v1667493133/codehelpFinalAssets/ort4cxqmugzj9an4sbae.png"
            alt=""
            width={40}
            height={40}
          />
        </NavLink>
        <div className="text-white flex gap-10">
          <NavLink to={"/"} className="font-bold">Home</NavLink>
          <NavLink to={"/cart"} className="flex relative items-center justify-center">
            <FaShoppingCart className="w-6 h-6" />
            <p className="absolute -right-2 -top-2 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
