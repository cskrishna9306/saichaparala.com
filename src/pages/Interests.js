import React, { useState, useRef, useEffect } from 'react';
import '../css/Interests.css'

function Interests() {
  const [activeInterest, setActiveInterest] = useState('badminton');

  const interests = [
    {
      id: 'badminton',
      title: 'Badminton',
      icon: '🏸',
      details: 'I started playing badminton in high school and fell in love with the fast-paced nature of the sport. The combination of strategy, agility, and precision makes every game exciting. Played competitively during college and continue to play recreationally, always looking for new challenges and opponents to improve my game.'
    },
    {
      id: 'lol',
      title: 'League of Legends',
      icon: '🎮',
      details: 'League of Legends has taught me valuable lessons about teamwork, strategy, and quick decision-making. I enjoy both playing and watching professional esports, analyzing different strategies and champion combinations. The game has helped me develop better communication skills and strategic thinking that I apply in my professional life.'
    },
    {
      id: 'f1',
      title: 'Formula 1',
      icon: '🏎️',
      details: 'F1 combines my love for technology, strategy, and competition. I follow multiple teams and drivers, and enjoy analyzing race strategies and technical innovations. The engineering marvels and data-driven approach to racing fascinates me, and I often find parallels between F1 strategy and software development methodologies.'
    },
    {
      id: 'books',
      title: 'Books',
      icon: '📚',
      details: 'Reading is one of my favorite ways to learn and expand my perspective. I enjoy a wide range of genres from technical books on software engineering and cloud computing to biographies of successful entrepreneurs and thought leaders. Books have been instrumental in shaping my thinking and providing insights that I apply both personally and professionally.'
    },
    {
      id: 'travel',
      title: 'Travel',
      icon: '✈️',
      details: 'Traveling has broadened my perspective and taught me adaptability. I enjoy both planned adventures and spontaneous trips, always seeking new experiences. From exploring ancient temples in Asia to hiking through national parks in the US, each journey teaches me something new about different cultures, cuisines, and ways of life.'
    }
  ];

  const sectionRefs = useRef({});

  const scrollToSection = (interestId) => {
    setActiveInterest(interestId);
    const element = sectionRefs.current[interestId];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll detection to update active interest
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find which section is currently in view
      let currentSection = 'badminton';
      
      interests.forEach(interest => {
        const element = sectionRefs.current[interest.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSection = interest.id;
          }
        }
      });
      
      setActiveInterest(currentSection);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [interests]);

  return (
    <div className='interests'>
      <h1>My Interests</h1>
      
      <div className="interests-layout">
        <div className="timeline-sidebar">
          <div className="timeline-line"></div>
          
          {interests.map((interest, index) => (
            <div 
              key={interest.id}
              className={`timeline-item ${activeInterest === interest.id ? 'active' : ''}`}
              onClick={() => scrollToSection(interest.id)}
              title={interest.title}
            >
              <div className="timeline-dot">
                {typeof interest.icon === 'string' ? (
                  <span className="interest-icon">{interest.icon}</span>
                ) : (
                  <img src={interest.icon} alt={interest.title} className="interest-logo" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="interests-content">
          {interests.map(interest => (
            <section 
              key={interest.id}
              id={interest.id}
              ref={el => sectionRefs.current[interest.id] = el}
              className="interest-section"
            >
              <h2>{interest.icon} {interest.title}</h2>
              <p>{interest.details}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interests;