// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import ImageProcessing from './pages/ImageProcessing'
import MultiImageProcessing from './pages/MultiImageProcessing'
import Exports from './pages/Exports'
import PageNotFound from './pages/PageNotFound'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/imageProcessing" element={<ImageProcessing />} />
        <Route path="/multiimageProcessing" element={<MultiImageProcessing />} />
        <Route path="/export" element={<Exports />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
  
    </>
  )
}

export default App
