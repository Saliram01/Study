import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import blgos from "../data/ApiData";

function BlogDetail() {
  const uselocation = useLocation();
  let currentId = uselocation.pathname.split("/")[2];
  let currentData = blgos.filter((v) => v.id == currentId)[0];
  return (
    <>
      <div className="w-full md:w-[80%] md:ml-[20%] mt-16">
        <h2 className="text-center py-4 font-bold text-2xl">Blog_Detail</h2>
        <div className="text-2xl font-bold shadow max-w-sm">
          <div className="text-center py-4">
          <p>id : {currentData.id}</p>
          <p>Title : {currentData.title}</p>
          <p>Body : {}currentData.Body</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
