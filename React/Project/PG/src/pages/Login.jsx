import React, { useState } from "react";
import Header from "../components/Header";

function Form() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [showPass ,setShowPass] = useState(false);

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(uname);
    console.log(password);
  };

  return (
    <>
      <div className="w-full md:w-[80%] md:ml-[20%] mt-16 ">
        <div className="w-full flex flex-col justify-center items-center h-[80vh]">
          <h2 className="text-2xl font-bold py-4 text-fuchsia-700">Login Form</h2>
          <form
            action="#"
            className="sm:w-80 rounded-lg border p-6 shadow-2xl"
          >
            <div className="mb-4">
              <input
                onChange={(e) => setUname(e.target.value)}
                className="border w-full py-2 px-2 outline-slate-400 rounded-md"
                type="text"
                placeholder="Username"
                value={uname}
              />
            </div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="border w-full py-2 px-2 outline-slate-400 rounded-md"
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                value={password}
              />
            </div>
            <div>
              <input onClick={() => setShowPass(!showPass)}
                className="w-8 h-[15px] mt-4"
                type="checkbox"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="py-2 active:bg-slate-400 border w-20 mt-4 rounded-md font-bold"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
