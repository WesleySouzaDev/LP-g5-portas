const TitleHome = () => {
  const title = 'G5 Portas, entregando com qualidade e eficiência.';
  const headline = title.split(' ');

  return (
    <div className="px-4 md:px-12 pt-16 md:pt-28 md:px-18 h-full text-start">
      {headline.map((word, index) => (
        <div
          key={index}
          className="text-2xl md:text-3xl lg:text-5xl inline-block mr-2 font-semibold duration-100 text-white hover:text-amber-400 cursor-default"
        >
          {word}
        </div>
      ))}
      <div>
        <p className="text-sm md:text-lg text-zinc-400 mt-8 pb-12 border-b">
          Empresa especializada em montagem de portas de aço industriais e
          automatizadas.
          <br />
          Garantimos segurança, qualidade e rapidez em nossos projetos.
        </p>
      </div>
    </div>
  );
};

export default TitleHome;
