//import React, {useState} from "react";
//import { BrowserRouter,Route,Routes } from "react-router-dom";

//HOC
import React from 'react';
//import {  Routes  } from 'react-router-dom';
//import DefaultHOC from './HOC/Default.HOC';
//import DefaultLayout from './layouts/Default.layout';

//component
import Temp from './components/temp';
import DefaultHOC from './HOC/Default.HOC';
// import DefaultLayout from './layouts/Default.layout';
//import Navbar from './components/Navbar/navbar.component';

//import NavSm from './components/Navbar/navbar.component';
//import DefaultLayout from './layouts/Default.layout';
//import DefaultLayout from './layouts/Default.layout';



function App() {
  
  return (
    
   <>

   <DefaultHOC path="#" exact Component={Temp}/>
   
   </>
       
     
  );
}

export default App;
