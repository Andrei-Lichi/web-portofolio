"use client"

import React, { useEffect, useState } from 'react';

const createParticles = () => {
  const duration = `${Math.random() * 5 + 20}s`; 
  const startLeft = Math.random() < 0.5
    ? Math.random() * -60 
    : Math.random() * 100;
  const rotation = Math.random() * 720;

  return {
    id: Math.random(),
    top: `-${Math.random() * 10}vh`,
    left: `${startLeft}%`,
    animationDuration: duration,  
    rotation,
    translateX: `${Math.random() * 50 + 50}vw`,
    translateY: `100vh`,
  };
};


const getParticle = (particle) => (
  <img
    key = {particle.id}
    src = "/images/leaf1.png"
    alt = "particle"
    className = "particle"
    style={{
      top: particle.top,
      left: particle.left,
      animationDuration: particle.animationDuration,
      '--translate-x': particle.translateX,
      '--translate-y': particle.translateY,
      '--rotate': `${particle.rotation}deg`,
    }}
  />
);

const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const addRandomParticles = () => {
      const newParticle = createParticles();
      setParticles(currentParticles => [
        ...currentParticles.slice(-10),
        newParticle
      ]);
    };

    const interval = setInterval(addRandomParticles, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {particles.map(getParticle)}
    </div>
  );
};

export default ParticlesBackground;
