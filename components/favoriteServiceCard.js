import ServiceSlider from './ServiceSlider';
import { FaStar } from 'react-icons/fa';

const FavoriteServiceCard = () => {
  return (
    <div className="bg-zinc-900 px-6 pt-4 border border-zinc-600 pb-14 rounded-md col-start-8 col-end-12 row-start-3 h-[36.9rem] w-full">
      <div className="flex gap-4 mb-6 ml-2 text-center">
        <FaStar className="text-amber-400 text-xl" />
        <span className="text-white">Destaque da equipe.</span>
      </div>

      <div className="flex h-full w-full justify-center items-center">
        <ServiceSlider />
      </div>
    </div>
  );
};

export default FavoriteServiceCard;
