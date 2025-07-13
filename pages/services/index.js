'use strict';

import FavoriteServiceCard from '../../components/favoriteServiceCard';
import ServiceCard from '../../components/serviceCard';
import ServiceTitle from '../../components/ServiceTitle';

import Image from 'next/image';

import PathImgService from '../../public/bg-service.png';
import PathBackground from '../../public/bacgroundService.jpg';

import serviceImg1 from '../../public/service-1.jpg';
import serviceImg2 from '../../public/service-2.jpg';
import serviceImg3 from '../../public/service-3.jpg';
import serviceImg4 from '../../public/service-4.jpg';

import { motion } from 'motion/react';

const images = [
  {
    src: serviceImg1,
    alt: 'Imagem do serviço 1',
  },
  {
    src: serviceImg2,
    alt: 'Imagem do serviço 2',
  },
  {
    src: serviceImg3,
    alt: 'Imagem do serviço 3',
  },
  {
    src: serviceImg4,
    alt: 'Imagem do serviço 4',
  },
];

const Services = () => {
  console.log(images);

  return (
    <section className="h-full w-full gap-4 relative overflow-x-hidden">
      <Image
        src={PathBackground}
        alt="background"
        width={1000}
        height={1000}
        className="absolute -z-20 bg-center w-screen h-screen opacity-30 object-cover"
      />
      <div className="absolute w-screen h-screen -z-20 flex justify-start">
        <Image
          src={PathImgService}
          alt="logo"
          width={700}
          height={500}
          className="brightness-50 object-cover"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-screen h-screen absolute pt-24 px-10 gap-8">
        <div className="w-full h-full">
          <ServiceTitle title="Serviços" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[40rem] lg:h-[28.8rem]">
            {images.map((item, index) => {
              // return ;
              return (
                <ServiceCard
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  number={index}
                />
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, x: 30 }}
          animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full h-full mb-10"
        >
          <FavoriteServiceCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
