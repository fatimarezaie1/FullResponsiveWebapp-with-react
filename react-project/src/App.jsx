
import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {  BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Gallery from './pages/gallery/gallery'
import Planes from './pages/plans/plans'
import Trainers from './pages/trainers/trainers'
import Notfound from './pages/not found/notFound'
import Navbar from './components/navbar'
import './style.css'
import NotFound from './pages/not found/notFound'
import Footer from './components/Footer'
export default function App(){
    return(
        <BrowserRouter> 
          <Navbar />
           <Routes>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='gallery' element={<Gallery />}/>
            <Route path='plans' element={<Planes />}/>
            <Route path='trainers' element={<Trainers />}/>
            <Route path='*' element={<NotFound />}/>
           </Routes>
           <Footer />
        </BrowserRouter>
    )
}