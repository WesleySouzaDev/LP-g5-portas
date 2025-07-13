'use client';

import '../styles/globals.css';
//compenents
import Layout from '../components/Layout';
import Transition from '../components/Transition';
//router
import { useRouter } from 'next/router';
//framer motion
import { AnimatePresence, motion } from 'motion/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Component {...pageProps} />
          <Transition />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
