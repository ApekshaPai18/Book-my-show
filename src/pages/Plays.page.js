import React from "react";
import Poster from "../components/Poster/poster.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import MyDisclosure from "../components/PlaysFilter/PlaysFilter.component";
const Plays = () => {
  return (
    <>
    <div className="bg-gray-200">
      <HeroCarousal />
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
         <div className="lg:w-8/12">
         <h2 className="text-2xl font-bold mb-4 ">Plays in Bangalore</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00357114-jdhresyyfj-portrait.jpg"
                title="Kaifi aur Main"
                subtitle="₹ 1000 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00317017-kdybbpyvyd-portrait.jpg"
                title="Kanta Mattu Kanta"
                subtitle="₹ 1000 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00359664-emrcmteemw-portrait.jpg"
                title="Chhapra Ke Deewaney-Theatrenama"
                subtitle="₹ 1000 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00359133-tlnnhlcmnp-portrait.jpg"
                title="Kaakana Kote"
                subtitle="₹ 1000 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00358725-chzpxusnsn-portrait.jpg"
                title="The Mahabharata Project"
                subtitle="₹ 1000 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00359253-ptafpladjf-portrait.jpg"
                title="Mareta Daari"
                subtitle="₹ 1000 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00359364-agpmcflgvx-portrait.jpg"
                title="Miss Sevanthi"
                subtitle="₹ 1000 onwards"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00358725-chzpxusnsn-portrait.jpg"
                title="The Mahabharata Project"
                subtitle="₹ 1000 onwards"
              />
            </div>
            
          </div> 
         </div>
          <div className="lg:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
        <div className="bg-slate-50 rounded h-12 w-72">
        <MyDisclosure title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
       </div><br></br>
       <div className="bg-slate-50 rounded h-12 w-72 ">
        <MyDisclosure title="Language" tags={["Kannada","English","Hindi","Tamil","Sanskrit"]}/>
        </div><br></br>
        <div className="bg-slate-50 rounded w-72 h-12 ">
        <MyDisclosure title="Categories" tags={["Theatre","Stortelling","Experimental"]}/>
        </div><br></br>
        <div className="bg-slate-50 rounded w-72 h-12">
        <MyDisclosure title="Genres" tags={["Drama","Comedy","Classic","Contemporary"]}/>
        </div><br></br>
        <div className="bg-slate-50 rounded  w-72 h-12">
        <MyDisclosure title="More Filters" tags={["Outdoor Events","Fast Filling","Kids Allowed"]}/>
        </div><br></br>
        <div className="bg-slate-50 rounded w-72 h-12">
        <MyDisclosure title="Price" tags={["Free","0-500","501-2000" ,"Above 2000"]}/>
        </div>
            </div>

          </div>
        </div>

        
      </div>
      </div>
    </>
  );
};

export default Plays;
