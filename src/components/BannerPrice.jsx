import Banner from "../assets/preciosjustos.jpg";

const BannerPrice = () => {
  return (
    <div className="mt-[70px] mb-[40px]">
      <div
        className="flex flex-1 flex-col items-center justify-center text-center p-6 shadow-lg text-white bg-cover bg-center relative h-[500px]"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative w-[80%] m-auto">
          <h2 className=" text-3xl sm:text-4xl font-bold mb-3">
            Precios Justos, Tecnología al Alcance de Todos
          </h2>
          <p className=" text-md sm:text-xl mb-4">
            En JevicTechnology, nos comprometemos a ofrecerte lo mejor en
            tecnología con precios que cuidan tu bolsillo. Innovación y calidad,
            siempre a un precio justo
          </p>

          <a className="btn btn-1 hover-filled-slide-left">
            <span>Contáctenos</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerPrice;
