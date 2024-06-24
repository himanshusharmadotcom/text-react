import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Project from './pages/Project'
import NotFound from './pages/NotFound'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
} 

export default App