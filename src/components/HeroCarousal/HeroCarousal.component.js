

import React,{useState,useEffect} from "react";
import HeroSlider from "react-slick";
//css
import axios from "axios";
//import settings, { settingsHero } from "../../Cards/PosterCarousal.cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingsHero,settingsLg } from "../../Cards/PosterCarousal.cards";



const HeroCarousal =()=>{

  const [images,setImages]=useState([]);

  useEffect(()=>{
   const requestNowPlayingMovies=async()=>{
    const getImages=await axios.get("/movie/now_playing");
    setImages(getImages.data.results);
   };
   requestNowPlayingMovies();
  },[]);

    // const settingsLg={
    //     arrows:true,
    //     autoplay:true,
    //     centerMode:true,
    //     slidesToShow:1,
    //     slidesToScroll:1,
    //     centerPadding:"300px",
    //     infinite:true,
    //     nextArrow:<NextArrow/>,
    //     prevArrow:<PrevArrow/>


    // }

    // const settings = {
    //     arrows:true,
    //     centerMode:true,
    //     centerPadding:"0px",
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     nextArrow:<NextArrow/>,
    //     prevArrow:<PrevArrow/>
    // };

      // const images=[
      //   "https://assets-in.bmscdn.com/promotions/cms/creatives/1683094950747_web.jpg",
      //   "https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg",
      //   "https://assets-in.bmscdn.com/promotions/cms/creatives/1683113336476_harshgujralorioledesktop.jpg",
      //   "https://assets-in.bmscdn.com/promotions/cms/creatives/1684215802082_doggiepremierleague21stdesktop.jpg",
        
      // ]
      return(
        <>
        <div className="lg:hidden">
        <HeroSlider {...settingsHero}>
            {
                images.map((image)=>(
                    <div className="w-full h-64 md:h-80 py-3">
                      <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} 
                      alt="testing" className="w-full h-full rounded-md"/>

                    </div>
                )
                )
            }

        </HeroSlider>
        </div>

        <div className="hidden lg:block" >
        <HeroSlider {...settingsLg}>
            {
                images.map((image)=>(
                    <div className="w-full h-96 px-2 py-3">
                      <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} 
                       alt="testing" className="w-full h-full rounded-md"/>

                    </div>
                )
                )
            }

        </HeroSlider>

        </div>



       
            
            </>
      );
};

export default HeroCarousal;