'use client';

import { TbBrandWhatsapp } from 'react-icons/tb';
import { useState, useEffect } from 'react';

export default function WhatsButton() {
  const [string, setString] = useState('Contate-me');

  useEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.offsetWidth;
      if (width < 980) {
        setString('');
      } else {
        setString('Contate-nos');
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
    <button className="bg-transparent text-emerald-600 border-2 border-emerald-600 rounded-lg py-3 px-4 cursor-pointer flex items-center justify-center duration-100 hover:bg-emerald-600 hover:text-white hover:border-zinc-200 group font-semibold">
      <TbBrandWhatsapp className="text-emerald-600 mr-1 text-2xl duration-100 group-hover:text-white stroke-2" />
      {string}
    </button>
  );
}
