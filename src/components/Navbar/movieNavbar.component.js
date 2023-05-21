import React from "react";
import { BiChevronRight,BiChevronDown,BiSearch,BiMenu,BiShareAlt,BiChevronLeft } from "react-icons/bi";

//import { Route } from "react-router-dom";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
        
        </div>

        <div className="w-8 h-8">
          <BiShareAlt  className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
    <div className="  container mx-auto p-4 flex items-center justify-between">
      <div className="flex items-center w-1/2">
        <div className="w-12 h-12">
          <img src="" alt="logo" className="h-10 w-10 " />
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
            Bhubaneswar <BiChevronDown />
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

const MovieNavbar = () => {
  return (
    <>
      <nav className="  bg-navCol-800  absolute inset-x-0 z-30 bg-opacity-10 backdrop:blur-lg lg:relative px-4 py-6">
        <div className="md:hidden">
          {
            //mobile
            <NavSm />
          }
        </div>

        <div className="hidden lg:hidden md:block">
          {
            /* tablet */
            <NavSm />
          }
        </div>

        <div className=" hidden lg:flex ">
          {" "}
          {
            /* desktop*/
            <NavLg />
          }
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
