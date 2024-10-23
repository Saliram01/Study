import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <div className="md:flex">
      {/* Project List */}
      <div className="w-[20%] h-screen fixed hidden md:block bg-slate-50">
        <Link to={'/'}>
        <h2 className="flex justify-center items-center shadow bg-white text-xl font-bold text-center h-16 text-pink-600">
          Portfolio
        </h2>
        </Link>
        <h1 className="p-4 underline text-lg font-bold text-center">
          Project List
        </h1>
        <ul className="mx-2 px-2 h-[620px] text-center space-y-2">

          <li className="hover:text-green-600">
            <Link to={"/background"}>Bg changer</Link>
          </li>

          <li className="hover:text-green-600">
            <Link to={"/form"}>Form</Link>
          </li>

        </ul>
      </div>

      {/* Header linked navbar*/}
      <nav className="w-full md:w-[80%] md:ml-[20%] px-4 bg-white h-16 flex justify-between md:justify-center shadow-md items-center top-0 fixed">
        <h2 className="md:hidden font-bold text-xl">Portfolio</h2>
        <ul className="hidden md:flex justify-center items-center gap-12 font-bold">

          <li className="cursor-pointer hover:text-fuchsia-800">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="cursor-pointer hover:text-fuchsia-800">
            <Link to={"/about"}>About</Link>
          </li>

          <li className="cursor-pointer hover:text-fuchsia-800">
            <Link to={"/services"}>Services</Link>
          </li>

          <li className="cursor-pointer hover:text-fuchsia-800">
            <Link to={"/blog"}>Blog</Link>
          </li>

          <li className="cursor-pointer hover:text-fuchsia-800">
            <Link to={"/login"}>Login</Link>
          </li>

        </ul>
        <span
          onClick={() => setMenuShow(!menuShow)}
          className="text-3xl font-bold md:hidden cursor-pointer"
        >
          {menuShow ? <span>&times;</span> : <span>&#8801;</span>}{" "}
        </span>
      </nav>

      {/* <div className="w-full h-screen fixed bg-black opacity-50"></div> */}
      {/* header linked menu navbar */}
      <div
        className={`md:hidden w-full h-screen bg-slate-500 fixed transition-all 
        ${menuShow ? "left-[0%]" : "left-[-100%]"}`}
      >
        <div className="grid grid-col-2">
          <ul className="p-4 space-y-2 text-purple-200 font-bold">

            <li className="cursor-pointer hover:text-fuchsia-800">
              <Link to={"/"}>Home</Link>
            </li>

            <li className="cursor-pointer hover:text-fuchsia-800">
              <Link to={"/about"}>About</Link>
            </li>

            <li className="cursor-pointer hover:text-fuchsia-800">
              <Link to={"/services"}>Services</Link>
            </li>

            <li className="cursor-pointer hover:text-fuchsia-800">
              <Link to={"/blog"}>Blog</Link>
            </li>

            <li className="cursor-pointer hover:text-fuchsia-800">
              <Link to={"/login"}>Login</Link>
            </li>

          </ul>

          {/* project list menu */}
          <div className="px-4">
            <h1 className="underline text-white font-bold text-lg mb-2">
              Project List
            </h1>
            <ul className="text-purple-200">
              <li>
                <Link to={"/background"}>Bg_Changer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
