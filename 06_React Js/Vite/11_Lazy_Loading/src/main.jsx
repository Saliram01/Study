import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Home from './page/Home'

const About = lazy(() => import('./page/About'));
const Blogs = lazy(() => import('./page/Blogs'));
const Contact = lazy(() => import('./page/Contact'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/>
          <Route path='about' element={(
            <Suspense fallback={<div>Loading...</div>}>
              <About/>
            </Suspense>
          )}/>
          <Route path='blogs' element={(
            <Suspense fallback={<div>Loading...</div>}>
              <Blogs/>
            </Suspense>
          )}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
