const CardDiferentialsContent = ({ props }) => {
  return (
    <div className="bg-zinc-900 w-full h-full rounded-md p-4 grid grid-rows-5 overflow-hidden">
      <div className="w-full h-full row-span-2 relative">
        <div className="w-20 h-20 rounded-full border-4 border-amber-400 absolute left-14 top-4 flex justify-center items-center">
          {props.icon}
        </div>
      </div>
      <div className="w-full h-full bg-blue-600 row-span-3 text-center">
        <span className="font-bold text-white text-xl">{props.title}</span>
        <p className="text-white">{props.description}</p>
      </div>
    </div>
  );
};

export default CardDiferentialsContent;
