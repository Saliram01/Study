import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Products from "./pages/Products.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "products",
//     element: <Products />,
//     loader: async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       return res.json();
//     },
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App/>}/>
      <Route path="products" element={<Products/>}
      loader={async () => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          return res.json();
        }
        catch(err) {
          console.log(err)
        }
      }}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
