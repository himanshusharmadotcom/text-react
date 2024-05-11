import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
      </Routes>
    </BrowserRouter>
  )
} 

export default App