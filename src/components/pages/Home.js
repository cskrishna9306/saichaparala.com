import React from 'react';
import '../../App.css';
import Footer from '../Footer';
// import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import AboutMe from './AboutMe';
// import Footer from '../Footer';
// import AboutMe from '../AboutMe'
// import Interests from './Interests'
// import Footer from '../Footer';

function Home() {
  return (
    <>
        {/* <Navbar /> */}
        <HeroSection />
        <AboutMe />
        {/* <Interests />  */}
        {/* <Music />
        <Projects /> */}
        <Footer />
    </>
  );
}

export default Home;