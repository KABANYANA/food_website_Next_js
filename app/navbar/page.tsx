import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-center gap-4 bg-orange-100 py-5">
      <h1 id="foodle" className="mr-80 text-6xl font-medium">
        Foodle
      </h1>
      <h3 className="hover:underline cursor-pointer transition duration-400 gap-20 pr-10 text-3xl">
        Home
      </h3>
      <h3 className="hover:underline cursor-pointer transition duration-400 gap-20 pr-10 text-3xl">
        Offer
      </h3>
      <h3 className="hover:underline cursor-pointer transition duration-400 gap-20 pr-10 text-3xl">
        Services
      </h3>
      <h3 className="hover:underline cursor-pointer transition duration-400 gap-20 pr-10 text-3xl">
        Menu
      </h3>
      <h3 className="hover:underline cursor-pointer transition duration-400 pr-5 text-3xl" >
        About us
      </h3>
      <div className="btns flex gap-5 -mr-5">
        <button className="px-3 py-1 text-xl rounded-2xl border border-red-500 bg-transparent text-red-500 hover:border-red-700 hover:cursor-pointer hover:transition ">
          Login
        </button>
        <button className="px-3 py-2 text-xl rounded-2xl border border-red-500 bg-transparent text-red-500 hover:border-red-700 hover:cursor-pointer hover:transition ">
          Sign_Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
