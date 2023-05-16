import React from "react";
import {BsChevronRight} from "react-icons/bs";
import {BiSearch} from "react-icons/bi";
//import { Route } from "react-router-dom";

const NavSm =()=> {
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
               <h3 className="text-xl font-bold">It All Starts Here!</h3> 
               <span className="text-gray-400 text-xs flex items-center">
                Bhubaneswar <BsChevronRight/> </span>
            </div>
        </div>
        <div className="w-8 h-8">
            <BiSearch className="w-full h-full"/>
        </div>
        </>
    )
};
const NavMd =()=> {};
const NavLg =()=> {};

const Navbar  =()=> {
    return(
        <>
        <nav className="bg-navCol:900 p-4">
            <div className="md:hidden">{
                //mobile
               <NavSm/>
             
            }</div>

            <div className="hidden lg:hidden md:flex">{
                /* tablet */
                <NavMd />
          }
            </div>

            <div className="hidden lg:flex">  {
                /* desktop*/
                <NavLg/>
            }
               
            </div>

        </nav>
        </>
    )
};

export default Navbar;