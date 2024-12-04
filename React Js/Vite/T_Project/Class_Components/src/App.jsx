import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Suspense } from "react";

function App() {

  return (
    <>
      <Header/>
      <div className="px-8 py-4">
        <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default App;
