import React from 'react';
import '../css/Interests.css'

function Interests() {
  return (
    <div className='interests'>
        <div class="roadmap">
    <ul>
      <li><a href="#badminton">Badminton</a></li>
      <li><a href="#lol">League of Legends</a></li>
      <li><a href="#f1">Formula 1</a></li>
      <li><a href="#travel">Travel</a></li>
    </ul>
  </div>
  
  <div class="content">
    <section id="badminton">
      <h2>Badminton</h2>
      <p>Content for section 1...</p>
    </section>
    <section id="lol">
      <h2>League of Legends</h2>
      <p>Content for section 2...</p>
    </section>
    <section id="f1">
      <h2>Formula 1</h2>
      <p>Content for section 3...</p>
    </section>
    <section id="travel">
      <h2>Travel</h2>
      <p>Content for section 4...</p>
    </section>
  </div>
    </div>
  );
}

export default Interests;