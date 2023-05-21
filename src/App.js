//import React, {useState} from "react";
//import { BrowserRouter,Route,Routes } from "react-router-dom";

//HOC
//import {  Routes  } from 'react-router-dom';
//import DefaultHOC from './HOC/Default.HOC';
//import DefaultLayout from './layouts/Default.layout';

//component
//import Temp from './components/temp';
//import DefaultHOC from './HOC/Default.HOC';
// import DefaultLayout from './layouts/Default.layout';
//import Navbar from './components/Navbar/navbar.component';

//import NavSm from './components/Navbar/navbar.component';
//import DefaultLayout from './layouts/Default.layout';
//import DefaultLayout from './layouts/Default.layout';

import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/navbar.component';
import MovieNavbar from './components/Navbar/movieNavbar.component';
import HeroCarousal from './components/HeroCarousal/HeroCarousal.component';

//Axios 
import axios from 'axios';


//import MovieHOC from './HOC/Movie.HOC';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/Home.page';
import Movie from './pages/Movie.page';
import Plays from './pages/Plays.page';


//axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App() {
  
  return (
    
  
<Routes>
   <Route path="/"  element={[<Navbar/>,<HeroCarousal/>,<HomePage/>]}/>
   <Route path="/movie/:id" element={[<MovieNavbar/>,<Movie/>]}/>
   <Route path="/plays" element={[<Plays/>]}/>
   </Routes>
     
     
     
  );
}

export default App;
