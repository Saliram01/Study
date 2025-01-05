import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import { Auth0Provider } from "@auth0/auth0-react";
import Authenticate from "./contex_auth/Authenticate.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const routing = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="blogs" element={<Blogs/>} />
      <Route path="contact" element={<Contact/>} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain=""
      clientId=""
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Authenticate>
        <RouterProvider router={routing}/>
      </Authenticate>
    </Auth0Provider>
  </StrictMode>
);
