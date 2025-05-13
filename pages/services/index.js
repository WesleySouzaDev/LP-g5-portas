import FavoriteServiceCard from '../../components/favoriteServiceCard';

const Services = () => {
  return (
    <section className="grid grid-cols-12 grid-rows-12 h-full place-items-center border">
      <span className="text-white col-span-3">Serviços</span>
      <FavoriteServiceCard />
    </section>
  );
};

export default Services;
