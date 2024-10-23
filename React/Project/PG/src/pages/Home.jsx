import React from "react";
import Header from "../components/Header";
import pic from "../assets/sa.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-full md:w-[80%] md:ml-[20%] mt-16 shadow">
        <div className="grid sm:grid-cols-2 place-content-center  h-[91vh] md:p-2">
          <div className="grid place-content-center order-2 sm:order-1 mt-8">
            <h1 className="font-bold text-lg sm:text-xl lg:text-3xl">
              Hii There <br />
              <span className="text-red-500">This is Saliram Chaudhary</span>
              <p className=" sm:text-xl mt-4 px-1">I'm Software Engineer</p>
            </h1>
            <Link to={"/aboutme"}>
              <button className="bg-green-500 text-white mt-4 active:bg-green-400  py-2 px-6 rounded">
                About Me
              </button>
            </Link>
          </div>

          <div className="grid place-content-center sm:order-2 order-1">
            <img
              className="w-60 md:w-72 lg:w-80 border-8 shadow-2xl border-b-green-500"
              src={pic}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
