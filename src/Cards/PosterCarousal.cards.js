
import React from "react";
import { NextArrow,PrevArrow } from "../components/HeroCarousal/Arrows.component";

 const settings={
    infinite:true,
    autoplay:false,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide:0,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:3,
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
            }
        },
        {
            breakpoint:400,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
    ]
};

export const settingsEntertainment={
    infinite:true,
    autoplay:false,
    slidesToShow:5,
    slidesToScroll:1,
    InitialSlide:0,
    responsive:[
        {
            breakpoint:1024,
            settingsEntertainment:{
                slidesToShow:3,
                slidesToScroll:3,
            }
        },
        {
            breakpoint:600,
            settingsEntertainment:{
                slidesToShow:2,
                slidesToScroll:2,
            }
        },
        {
            breakpoint:400,
            settingsEntertainment:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
    ]
   

};

export const settingsHero = {
    arrows:true,
    centerMode:true,
    centerPadding:"0px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive:[
        {
            breakpoint:1024,
            settingsHero:{
                slidesToShow:3,
                slidesToScroll:3,
            }
        },
        {
            breakpoint:600,
            settingsHero:{
                slidesToShow:2,
                slidesToScroll:2,
            }
        },
        {
            breakpoint:400,
            settingsHero:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
    ]
};


export const settingsLg={
    arrows:true,
    autoplay:true,
    centerMode:true,
    slidesToShow:1,
    slidesToScroll:1,
    centerPadding:"300px",
    infinite:true,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive:[
        {
            breakpoint:1024,
            settingsLg:{
                slidesToShow:3,
                slidesToScroll:3,
            }
        },
        {
            breakpoint:600,
            settingsLg:{
                slidesToShow:2,
                slidesToScroll:2,
            }
        },
        {
            breakpoint:400,
            settingsLg:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
    ]


}

export default  settings;