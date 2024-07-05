import React from 'react';
import './css/App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Interests from './pages/Interests';
import Music from './pages/Music'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/interests' element={<Interests />} />
        <Route path='/music' element={<Music />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
