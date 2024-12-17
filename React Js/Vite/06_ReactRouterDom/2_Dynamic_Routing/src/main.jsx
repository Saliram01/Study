import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Context from './context/Context'

// import CardDetail from './components/CardDetail.jsx'
// import Container from './components/Container'
// import About from './components/About'
// import Blogs from './components/Blogs'

const About = lazy(() => import('./components/About'));
const Blogs = lazy(() => import('./components/Blogs'));
const Container = lazy(() => import('./components/Container'));
const CardDetail = lazy(() => import('./components/CardDetail'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='products' element={<Container/>}/>
      <Route path='card/:id' element={<CardDetail/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}/>
    </Context>
  </StrictMode>,
)
