import React from "react";
import Header from "../components/Header";
import data from "../data/ApiData";
import { Link } from "react-router-dom";

function Blog() {
  const allData = data.map((v, i) => {
    return (
      <div className="w-72 md:w-60 shadow-lg m-2 p-2" key={i}>
        <h3 className="text-xl font-bold">{v.title}</h3>
        <p>{v.body}</p>
        <button className="py-2 bg-red-500 px-4 mt-4 rounded cursor-pointer text-white">
          <Link to={`/blog/${v.id}`}>Read More</Link>
        </button>
      </div>
    );
  });
  return (
    <>
      <div className="w-full md:w-[80%] md:ml-[20%] mt-16 shadow">
        <h2 className="text-center font-bold text-2xl p-4">Blog</h2>
        <div className="flex flex-wrap text-center justify-evenly">
          {allData}
        </div>
      </div>
    </>
  );
}
export default Blog;
