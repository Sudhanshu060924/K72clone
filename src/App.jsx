import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Project from './Pages/Project.jsx'
import Agence from './Pages/Agence.jsx'
import Stair from './components/common/Stair.jsx'


const App = () => {
  return (
    <div className=' text-white'>

      <Stair />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/agency" element={<Agence />} />
      </Routes>
    </div>
  );
}

export default App
