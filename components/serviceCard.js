import Image from 'next/image';

import { FaArrowRight } from 'react-icons/fa6';

import { motion } from 'motion/react';

const ServiceCard = ({ src, alt, number }) => {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, x: -60 }}
      animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4 * number }}
      className="bg-transparent backdrop-blur-sm border border-zinc-600 rounded-md w-full flex justify-center items-center overflow-hidden"
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          className="w-full"
        />
      )}
      <button className="absolute text-white text-3xl w-20 duration-150 right-0 bg-zinc-950  h-full flex justify-center items-center hover:bg-transparent hover:text-6xl hover:text-amber-400">
        <FaArrowRight />
      </button>
    </motion.div>
  );
};

export default ServiceCard;
