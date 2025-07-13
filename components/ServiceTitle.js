'use client';

import { motion } from 'motion/react';

const ServiceTitle = () => {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, x: -30 }}
      animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="h-28 w-full grid border place-items-center rounded-md bg-zinc-950 bg-opacity-30 backdrop-blur-sm border-zinc-600 mb-4"
    >
      <h1 className="text-white text-center text-4xl font-semibold">
        Serviços
      </h1>
    </motion.div>
  );
};

export default ServiceTitle;
