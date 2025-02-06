import Prueba from "../assets/relojPrueba.png";

const CarouselProducts = () => {
  return (
    <div className="pt-[140px] bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="w-5/6 m-auto flex flex-col md:flex-row items-center justify-center">
        <div className=" space-y-4 text-center">
          <h1 className="cursiva text-blue-500 text-6xl">Samsung</h1>
          <h2 className="font-bold text-5xl">Smartwatch series 9</h2>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            assumenda
          </h2>

          <div className="flex gap-x-2 justify-center">
            <a
              href=""
              className=" px-4 py-2 bg-BlueMain text-white hover:bg-blue-900"
            >
              comprar
            </a>
            <a
              href=""
              className="border border-BlueMain text-BlueMain px-4 py-2 hover:bg-slate-200"
            >
              ver más
            </a>
          </div>
        </div>

        <div className="w-[300px] md:w-auto">
          <img src={Prueba} alt="Img" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default CarouselProducts;
