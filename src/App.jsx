import { useEffect, useRef, useState } from 'react'
import './App.css'
import NavigationBar from './Components/Navigationbar/NavigationBar'
import HomeSection from './Components/HomeSection/HomeSection'
import Aboutme from './Components/aboutme/Aboutme'
import Projects from './Components/projects/Projects'
import Contacts from './Components/contact/Contacts'
import { BrowserRouter, Routes, Route, Link, HashRouter, } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div className='max-w-[1400px] h-[100vh] mx-auto px-10'>
        <div className='flex flex-col text-[10px] sm:text-[12px] md:text-[15px] h-full font-serif relative'>
          <NavigationBar />
          <div
            id='background'
            className='w-full h-[100vh] relative rounded-[3em] overflow-hidden bg-[url("./images/homepage_full.png")] bg-cover bg-right-bottom'
          >
            <div className='animate-blink w-full h-full relative rounded-[3em] overflow-hidden bg-[url("./images/arrowtome.png")] bg-cover bg-right-bottom'></div>
            <Routes>
              <Route path="/" exact element={<HomeSection />} />
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contacts />} />
            </Routes>

          </div>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App


