import React from "react";
import { BiChevronRight,BiChevronDown,BiSearch,BiMenu } from "react-icons/bi";

//import { Route } from "react-router-dom";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-grey-400 text-xs flex items-center">
            Bangalore<BiChevronRight />
          </span>
        </div>

        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full focus:outline-none"
        placeholder="Search for movies,events,plays,sports and activities"
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
    <div className="container mx-auto p-4 flex items-center justify-between">
      <div className="flex items-center w-1/2">
        <div className="w-12 h-12">
          <img src="https://tse1.mm.bing.net/th?id=OIP.eKIEPveuQkuSHZm3K0_CbAHaEJ&pid=Api&P=0&h=180" alt="logo" className="h-10 w-12 my-1 " />
        </div>

        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full focus:outline-none"
            placeholder="Search for movies,events,plays,sports and activities"
          />
        </div>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-gray-400 text-xs flex items-center cursor-pointer  hover:text-white">
            Bangalore <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign in</button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-ful h-full"/>
          </div>
      </div>
    </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navCol-800 px-4 py-6">
        <div className="md:hidden">
          {
            //mobile
            <NavSm />
          }
        </div>

        <div className="hidden lg:hidden md:flex">
          {
            /* tablet */
            <NavMd />
          }
        </div>

        <div className="hidden lg:flex">
         
          {
            /* desktop*/
            <NavLg />
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;