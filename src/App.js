import React from 'react';
import './css/App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, AboutMe, Interests, Skills, Projects } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/interests' element={<Interests />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
