import Subscribe from "../assets/suscribete.jpg";

const SuscribeNews = () => {
  return (
    <div className="mt-[70px]">
      <div
        className="flex flex-1 flex-col items-center justify-center text-center p-6 shadow-lg text-white bg-cover bg-center relative h-[600px] md:h-[400px]"
        style={{
          backgroundImage: `url(${Subscribe})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative w-5/6 m-auto">
          <h2 className=" text-2xl md:text-4xl font-bold mb-3">
            Entérate de nuestras últimas novedades
          </h2>
          <p className=" text-lg md:text-xl mb-4">
            Entérate de nuestras últimas novedades, descubre promociones
            exclusivas, nuevos lanzamientos y todo lo que tenemos preparado
            especialmente para ti. ¡Mantente al día y no te pierdas nada!
          </p>

          <div className="input-group">
            <input
              type="email"
              className="inputSubscribe"
              id="Email"
              name="Email"
              placeholder="ej: jevic@gmail.com"
              autoComplete="off"
            />
            <input
              className="button--submit"
              value="Suscríbete"
              type="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuscribeNews;
