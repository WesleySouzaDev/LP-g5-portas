'use client';

import Image from 'next/image';
import PathImgHome from '../public/logo.webp';
import BgRight from '../public/bg-bottom-right.png';
import BgLeft from '../public/bg-bottom-left.png';
import ParticlesContainer from '../components/ParticlesContainer';
import TitleHome from '../components/titleHome';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <>
      <ParticlesContainer />
      <section className="grid grid-cols-12 grid-rows-12 h-full overflow-hidden">
        <div className="col-span-6 col-start-1 col-end-13 md:col-end-7 row-span-6 row-start-2 row-end-8 md:row-end-13">
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <TitleHome />
          </motion.div>
        </div>
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="col-span-6 col-start-1 md:col-start-7 col-end-13 row-span-6 row-start-8 md:row-start-2 row-end-13 md:row-end-13 flex justify-center items-center"
        >
          <Image
            src={PathImgHome}
            alt="home"
            width={800}
            height={800}
            priority
          />
        </motion.div>

        <div className="col-span-6 col-start-7 col-end-13 row-span-6 row-start-2 md:row-start-2 row-end-13 md:row-end-13 flex justify-end items-end brightness-50 -z-20 blur-md">
          <Image src={BgRight} alt="home" width={640} height={400} />
        </div>

        <div className="col-span-3 col-start-1 col-end-4 row-span-3 row-start-8 row-end-13 flex justify-start items-end brightness-50 -z-20 blur-sm">
          <Image src={BgLeft} alt="home" width={300} height={300} />
        </div>
      </section>
    </>
  );
};

export default Home;
