import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./components/Jobs";
import JobsDetails from "./components/JobsDetails";
import { jobDetailLoader } from "./components/JobsDetails";
import Error from './components/Error'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Products />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />} errorElement={<Error/>}>
          <Route index element={<Jobs />} loader={jobsLoader}/>
          <Route path=":id" element={<JobsDetails/>} loader={jobDetailLoader}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
