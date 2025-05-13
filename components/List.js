import NavResize from './navResize';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { path } from 'motion/react-client';

export default function List() {
  const [display1, setDisplay1] = useState('flex');
  const [display2, setDisplay2] = useState('hidden');
  const [isVisible, setIsVisible] = useState(false);

  const navData = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/services' },
    { name: 'Diferenciais', path: '/differences' },
    { name: 'Avaliações', path: '/reviews' },
    { name: 'Faq', path: '/faq' },
  ];

  const ListClass = isVisible ? 'flex-col h-full gap-4 items-center' : '';

  const List = () => {
    return (
      <ul
        className={`flex gap-4 w-full justify-center text-white ${ListClass}`}
      >
        {navData.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`${
              Link.path === path && 'text-amber-400'
            } cursor-pointer duration-100 hover:text-amber-400`}
          >
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.offsetWidth;
      if (width < 980) {
        setIsVisible(true);
        setDisplay1('hidden');
        setDisplay2('flex');
      } else {
        setIsVisible(false);
        setDisplay1('flex');
        setDisplay2('hidden');
      }
    };

    // Chama uma vez para garantir o estado inicial correto
    handleResize();

    window.addEventListener('resize', handleResize);

    // Remove o listener quando o componente desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <nav
        className={`col-span-6 h-16 ${display1} justify-center items-center`}
      >
        <List />
      </nav>

      <nav
        className={`${display2} col-span-6 h-16 grid place-items-center pt-1.5`}
      >
        <NavResize>
          <List />
        </NavResize>
      </nav>
    </>
  );
}
