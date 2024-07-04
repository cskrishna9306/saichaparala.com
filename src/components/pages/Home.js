import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import '../../App.css';
import './Home.css'

function Home() {
  return (
    <div className='hero-container'>
      <h1>Welcome to my website!</h1>
      <p>Use the navigation bar above to learn more about me!</p>
    </div>
  );
}

export default Home;