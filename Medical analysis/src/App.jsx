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
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <>
      <NavBar />

      {/* Optional: Show auth buttons globally at top */}
      {/* Clerk auth buttons moved to NavBar */}
      {/* <div className="p-4">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div> */}

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
