import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, Route, RouterProvider ,createBrowserRouter} from 'react-router-dom'

// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Blogs from './components/Blogs.jsx'
// import Contact from './components/Contact.jsx'

const Home = lazy(() => wait(1000).then(() => import('./components/Home')));
const About = lazy(() => wait(1000).then(() => import('./components/About')));
const Blogs = lazy(() => wait(1000).then(() => import('./components/Blogs')));
const Contact = lazy(() => wait(1000).then(() => import('./components/Contact')));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<App />}>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'about'} element={<About/>}/>
        <Route path={'blogs'} element={<Blogs/>}/>
        <Route path={'contact'} element={<Contact/>}/>
    </Route>
  )
) 

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
