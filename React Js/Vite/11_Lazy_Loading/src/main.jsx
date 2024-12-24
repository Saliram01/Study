import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('./page/Home'));
const About = lazy(() => import('./page/About'));
const Blogs = lazy(() => import('./page/Blogs'));
const Contact = lazy(() => import('./page/Contact'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
