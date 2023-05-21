import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.components";
import {BiCameraMovie} from "react-icons/bi";

export const launchRazorPay =()=>{
    let options={
        key:"rzp_test_3q9aTGPkTyMUqF",
        amount:500,
        currency:"INR",
        name:"Book My Show Clone",
        description:"Movie Purchase on Rental",
      image:"https://tse4.mm.bing.net/th?id=OIP.o_F9HsmQB3qfTque6DTsbAFhCw&pid=Api&P=0&h=180",
        handler:()=>{
            alert("Payment Done")
        },
        theme:{color:"#c4242d"}
    };
    let rzp=new window.Razorpay(options);
    rzp.open();
}

const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="my-12 container mx-auto px-4  lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            A spine-chilling, never told before true story - revealing a
            dangerous conspiracy that has been hatched against India. The Kerala
            Story is a compilation of the true stories of three young girls from
            different parts of Kerala. <br/><br/>
            
            The truth shall set us free! Thousands of
            innocent women have been systematically converted, radicalized &
            their lives destroyed. It`s their side of the story.
          </p>
        </div>
        <hr className="my-8"/>
       
       <div>
        <h1 className="text-gray-800 font-bold text-2xl">Applicable offers</h1>
<br></br>
        <div className="flex items-start gap-2 bg-amber-100 border-yellow-400 border-dashed border-2 p-3 w-96 rounded-xl">

            <div className="w-8 h-8">
            <BiCameraMovie className="w-full h-full"/>
            </div>

       
        <div className="flex flex-col items-start">
        <h3 className="text-gray-800 text-lg">10% Off on movie munchies!</h3>
        <p className="text-gray-500 text-sm">Tap to view details</p>    
        </div>
       </div>
        </div>

        

      </div>
    </>
  );
};

export default Movie;

