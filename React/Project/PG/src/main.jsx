import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import BlogDetail from "./pages/BlogDetail";
import Error404 from "./pages/Error404";
import Login from "./pages/Login"; 
import Background_Changer from "./list_p/Background_Changer";
import AboutMe from './pages/AboutMe';
import UserForm from "./list_p/UserForm";
import App from "./App";

let router = createBrowserRouter(
    [
      {
        path : '/',
        element : <App/>,
        children : [
          {
            path : '/',
            element : <Home/>
          },
          {
            path : 'about',
            element : <About/>
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "blog",
            element: <Blog />,
          },
          {
            path: "blog/:id", 
            element: <BlogDetail />,
          },
          {
            path : '*',
            element : <Error404/>
          },
          {
            path : 'login',
            element : <Login/>
          },
          {
            path : 'background',
            element : <Background_Changer/> 
          },
          {
            path : 'form',
            element : <UserForm/>
          },
          {
            path : 'aboutme',
            element : <AboutMe/>
          }
        ]
      }
    ]
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
