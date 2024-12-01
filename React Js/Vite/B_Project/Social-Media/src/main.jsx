import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";

const routing = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" element={<PostList/>}/>
      <Route path="create-post" element={<CreatePost/>}/>
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routing} />
  </StrictMode>
);
