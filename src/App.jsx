import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Loader from './components/animations/Loader'

const Homepage = lazy(() => import('./pages/Homepage'))
const Project = lazy(() => import('./pages/Project'))
const Header = lazy(() => import('./components/Header'))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="font-barlow">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </Router>
      </div>
    </Suspense>
  )
}

export default App
