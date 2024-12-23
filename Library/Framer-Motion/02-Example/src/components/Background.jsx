import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen"></div>
      <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-400">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[200px] font-bold text-gray-800">Docs.</h1>
    </>
  );
}

export default Background;
