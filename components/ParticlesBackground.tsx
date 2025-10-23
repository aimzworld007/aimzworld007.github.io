import React, { useEffect } from 'react';

// Fix: Declare tsParticles on the window object to resolve TypeScript errors.
declare global {
  interface Window {
    tsParticles: any;
  }
}

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    if (window.tsParticles) {
      window.tsParticles.load("particles-js", {
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#3B82F6",
          },
          links: {
            color: "#3B82F6",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      });
    }
  }, []);

  return null; // The div is already in index.html
};

export default ParticlesBackground;