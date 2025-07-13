'use client';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';
import { motion } from 'motion/react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(() => {}, []);

  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="absolute w-full h-full translate-z-0 -z-10"
    >
      <Particles
        className=" w-full h-full translate-z-0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: '',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              rezise: true,
            },
            modes: {
              push: {
                quantity: 100,
              },
              repulse: {
                distance: 100,
                duration: 0.3,
              },
            },
          },
          particles: {
            color: {
              value: '#e68e2e',
            },
            links: {
              color: '#f5d393',
              distance: 180,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: { default: 'bounce' },
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
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </motion.div>
  );
};

export default ParticlesContainer;
