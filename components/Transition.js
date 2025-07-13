'use client';

//framer motion
import { motion } from 'motion/react';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-zinc-900"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-zinc-600"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-amber-400"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;
