'use client';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function ExitAnimation({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const buttonClass = isVisible
    ? 'border-amber-400'
    : 'text-zinc-400 border-zinc-400 duration-100';

  return (
    <div className="w-full h-full flex flex-col">
      <motion.button
        className={`bg-transparent grid place-items-center py-3 px-4 border-2 cursor-pointer rounded-lg duration-all text-amber-400 ${buttonClass}`}
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: -1 }}
      >
        {isVisible ? (
          <IoMdClose className="text-2xl" />
        ) : (
          <GiHamburgerMenu className="text-2xl" />
        )}
      </motion.button>

      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            key="box"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={`w-full bg-transparent h-64 rounded-lg mt-4 p-2 min-w-12 max-h-40 border-2 backdrop-blur-sm brackdrop-brightness-50 text-white ${buttonClass}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
