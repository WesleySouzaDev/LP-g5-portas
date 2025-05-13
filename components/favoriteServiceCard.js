import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const FavoriteServiceCard = () => {
  return (
    <div className="bg-zinc-800 px-6 pt-2 pb-14 rounded-md col-start-8 col-end-12 row-start-3 row-end-12 h-full w-full">
      <div className="flex gap-4 mb-2 text-center">
        <FaStar className="text-amber-400 text-xl" />
        <span className="text-white">Destaque da equipe.</span>
      </div>

      <div className="flex gap-4 p-4 h-full w-full relative text-center overflow-hidden justify-center items-center">
        <Image
          src="/images/service-card-1.png"
          alt="service-card-1"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default FavoriteServiceCard;
