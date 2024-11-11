import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import BlogDetail from "./components/pages/BlogDetail";
import BgChanger from "./components/p_list/BgChanger";
import EnqueryForm from "./components/p_list/EnqueryForm";
import Error404 from "./components/pages/Error404";
import SignUpForm from "./components/p_list/SignUpForm";
import Project from "./components/pages/Project";
import UseState from "./components/hooks/UseState";
import UseEffect from "./components/hooks/UseEffect";
import Context from "./components/hooks/Context";
import UseRef from "./components/hooks/UseRef";
import UseMemo from "./components/hooks/UseMemo";
import UseCallback from "./components/hooks/useCallback/UseCallback";
import UseReducer from "./components/hooks/UseReducer";
import { Meme } from "./components/p_list/Meme";
import UseLayoutEffect from "./components/hooks/UseLayoutEffect";
import UseLocalStorage from "./components/hooks/cHook/UseLocalStorage";

// Plain Obj Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "useState",
        element: <UseState />,
      },
      {
        path: "useEffect",
        element: <UseEffect />,
      },
      {
        path: "useContext",
        element: <Context />,
      },
      {
        path: "useRef",
        element: <UseRef />,
      },
      {
        path: "useMemo",
        element: <UseMemo />,
      },
      {
        path: "useCallback",
        element: <UseCallback />,
      },
      {
        path: "useReducer",
        element: <UseReducer />,
      },
      {
        path: "useLayoutEffect",
        element: <UseLayoutEffect />,
      },
      {
        path: "customHook",
        element: <UseLocalStorage />,
      },
      {
        path: "bgchanger",
        element: <BgChanger />,
      },
      {
        path: "enquery",
        element: <EnqueryForm />,
      },
      {
        path: "sign-up",
        element: <SignUpForm />,
      },
      {
        path: "meme",
        element: <Meme />,
      },
    ],
  },
]);

// Nested routes with jsx
// const routing = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/blog" element={<Blog/>}/>
//       <Route path="/project" element={<Project/>}/>
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
