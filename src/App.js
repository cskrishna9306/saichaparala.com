import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Interests from './components/pages/Interests';
import Music from './components/pages/Music'
import Projects from './components/pages/Projects'

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutMe' element={<AboutMe />} />
          <Route path='/interests' element={<Interests />} />
          <Route path='/music' element={<Music />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        {/* <Introduction></Introduction> */}
        {/* // Either add footer here or under every page */}
      </Router>
    </>
  );
}

export default App;
