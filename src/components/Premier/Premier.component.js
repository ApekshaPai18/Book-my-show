import React from "react";
import Slider from "react-slick";
import settings from "../../Cards/PosterCarousal.cards";
import PremierImages from "../../Cards/TempPosters.cards";
import Poster from "../Poster/poster.component";

export const Premier=()=>{
   

    // const settingsSm={
    //     infinite:true,
    //     autoplay:false,
    //     slidesToShow:2,
    //     slidesToScroll:2,
    //     InitialSlide:0,
    //     nextArrow:<NextArrow/>,
    //     prevArrow:<PrevArrow/>
    // }


    
    return(
        <>
        <div className="flex flex-col items-start py-4">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm ">Brand new release every Friday</p>
        </div>
        <Slider { ...settings}>
        {PremierImages.map((image)=>(
        <Poster { ...image} isDark />
        ))}
        </Slider>


        {/* <div className=" Lg:hidden flex flex-col items-start py-4">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm ">Brand new release every Friday</p>
        </div>
        <Slider { ...settingsSm}>
        {PremierImages.map((image)=>(
        <Poster { ...image} isDark />
        ))}
        </Slider> */}
        </>
    );
};

export default Premier;