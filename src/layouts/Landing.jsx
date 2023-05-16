import React from "react";
import Navbar from "../components/Navbar";
import Movies from "../components/MovieCards";
import Carousel from "../components/Carousel";

function Landing() {
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Movies></Movies>
    </>
  );
}

export default Landing;
