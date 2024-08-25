import React, { useState, useEffect } from 'react';

export const Header = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="header">
      <video src={isMobile ? '../img/cellvid3.mp4' : '../img/homevid4.mp4'} type="video/mp4" autoPlay loop muted></video>
      <img
        src="../img/logowht.png"
        width="50%"
        position="absolute"
        top="50"
        letf="50"
        className="img-container"
        alt="Dj Avalanche Logo"
      />
    </header>
  );
};