import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App;