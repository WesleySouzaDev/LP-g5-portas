'use client';

import Image from 'next/image';
import Destaque1 from '../public/destaque-1.jpg';
import Destaque2 from '../public/destaque-2.jpg';
import Destaque3 from '../public/destaque-3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

const serviceData = [
  {
    src: Destaque1,
    alt: 'Imagem destaque 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: Destaque2,
    alt: 'Imagem destaque 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: Destaque3,
    alt: 'Imagem destaque 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
      }}
      className="h-full"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="rounded-md mb-4 object-cover"
              />
              <div className="text-white">{item.description}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
