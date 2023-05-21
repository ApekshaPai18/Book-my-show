import React,{useState,useEffect} from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
//import Premier  from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/poster.component";
import PremierImages from "../Cards/TempPosters.cards";


const HomePage =()=>{

 const [popularMovies,setPopularMovies]=useState([]);

 useEffect(()=>
 {
    const requestPopularMovies=async()=>{
        const getPopularMovies=await axios.get("/movie/popular");
        setPopularMovies(getPopularMovies.data.results);
};

requestPopularMovies();
 },[]);

 console.log({popularMovies});

 const [topRated,setTopRated]=useState([]);

 useEffect(()=>
 {
    const requestTopRated=async()=>{
    const getTopRated =await axios.get("/movie/top_rated");
    setTopRated(getTopRated.data.results);
 };
 requestTopRated();
 
},[]);
 
console.log({topRated});



    return (
        <>
       <div className="flex flex-col gap-10">
       <div className="container mx-auto px-4 py-5">
            <h1 className="text-2xl font-bold text-gray-800">The best of Entertainment</h1>
        <EntertainmentCardSlider/>
        
        </div>
      <div className="bg-navCol-800 py-15">
        <div className="flex">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="Rupay"
            className="w-full h-full"></img>
            
        </div>

            <div className="container mx-auto px-4">
            <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New Releases Every Friday" isDark />
            </div>
             </div>
    
             </div>

       <div className="container mx-auto px-4">
        <PosterSlider
        images={popularMovies}
        title="Online Streaming Events"
        isDark={false}
        
        
        
        />
       
       </div>
        <br></br>
        <div className=" bg-slate-100 h-100 ">
            
         <div className="container mx-auto px-4">
        <PosterSlider
        images={topRated}
        title="Outdoor Events"
        isDark={false}
        />
       </div>
       </div>
      
      
        </> 
    )
}

export default HomePage;