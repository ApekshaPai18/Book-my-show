import React from "react";
import { BiChevronRight, BiShareAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { launchRazorPay } from "../../pages/Movie.page";
const MovieHero = () => {
  return (
    <>
      <div className="md:hidden">
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-kerala-story-et00343918-1683025350.jpg"
          alt="poster"
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-kerala-story-et00343918-1683025350.jpg"
          alt="poster"
        />
      </div>

      <div className=" relative hidden lg:block" style={{ height: "38rem" }}>
        <div
          className="absolute h-full w-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(70deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%",
          }}
        />

        <div className="absolute z-30 w-80 h-104 left-56 top-12 flex ">
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-kerala-story-et00343918-1683025350.jpg"
            alt="poster"
            className="h-full w-full rounded-xl"
          />
        </div>

        <div
          className=" absolute z-10 w-84 h-104 left-96 top-24 flexGrow-1"
          style={{ marginLeft: "200px" }}
        >
          <h1 className="text-white font-bold text-5xl">The Kerala Story</h1>

          <div className="flex">
            <AiOutlineStar
              className="text-white text-5xl"
              style={{ marginTop: "35px" }}
            />
            <h1
              className="text-white font-bold text-4xl"
              style={{ marginLeft: "20px", marginTop: "37px" }}
            >
              8.9/10
            </h1>
            <h1
              className="text-white text-xl"
              style={{ marginLeft: "10px", marginTop: "48px" }}
            >
              182.6k votes
            </h1>
            <BiChevronRight
              className="text-white text-2xl"
              style={{ marginTop: "50px" }}
            />
          </div>

          <div
            className="  text-white bg-neutral-700 rounded-xl "
            style={{ width: "510px", height: "90px" }}
          >
            <h1
              className="text-2xl font-bold flex justify-between"
              style={{ padding: "15px", marginLeft: "15px", marginTop: "16px" }}
            >
              Add your rating & review
              <button
                className="bg-white text-black text-xl rounded-xl"
                style={{ width: "110px", height: "45px" }}
              >
                {" "}
                Rate now
              </button>
            </h1>
            <p
              style={{ marginTop: "-27px" }}
              className="px-8 text-xl text-slate-300"
            >
              Your ratings matter
            </p>
          </div>
          <div className="flex gap-4 py-6">
            <div>
              <h1
                className="bg-white text-center text-xl rounded"
                style={{ width: "50px", height: "35px" }}
              >
                2D
              </h1>
            </div>
            <div>
              <h1
                className=" bg-white text-center text-xl rounded"
                style={{ width: "300px", height: "35px" }}
              >
                Hindi,Tamil,Malayalam,Telugu
              </h1>
            </div>
          </div>
          <div className="flex  gap-3 text-white text-2xl font-bold">
            <span className=" py-3">2h 18m </span>
            <span className="text-4xl  ">.</span>
            <span className="py-3">A</span>
            <span className="text-4xl">.</span>
            <span className="py-3">5 May, 2023</span>
          </div>

          <div className="py-6">
            <button onClick={launchRazorPay}
              className="bg-red-500 text-white text-xl font-bold rounded-2xl hover:bg-red-700"
              style={{ width: "280px", height: "65px" }}
            >
              Book tickets
            </button>
          </div>
        </div>

        <img
          src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-kerala-story-et00343918-1683025350.jpg"
          alt="poster"
          className="w-full h-full"
        />
      </div>

      <div></div>
    </>
  );
};

export default MovieHero;
