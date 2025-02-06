const CategorieCard = ({ imagen, nombre }) => {
  return (
    <div className="text-center border rounded-full m-auto shadow-xl w-36 h-36 flex flex-col items-center justify-center space-y-2 bg-white transition-all delay-100 ease-out hover:scale-110 md:m-2 my-6">
      <div className="w-[80px] h-[80px]">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h1 className="text-sm font-semibold">{nombre}</h1>
    </div>
  );
};

export default CategorieCard;
