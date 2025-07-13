const CardDiferentialsContainer = ({ children }) => {
  return (
    <div className="w-full h-full p-4 text-white grid grid-cols-6 gap-6 max-h-1/2">
      {children}
    </div>
  );
};

export default CardDiferentialsContainer;
