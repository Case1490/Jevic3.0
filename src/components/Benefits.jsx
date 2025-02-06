import ProductosOriginales from "../assets/productos_originales.jpg";
import TecnologiaVanguardia from "../assets/tecnologia_vanguardia.jpg";

const Benefits = () => {
  return (
    <div className="w-[90%] md:w-5/6 m-auto flex flex-col md:flex-row md:justify-between gap-6 p-6 my-6">
      {/* Card 1 */}
      <div
        className="flex flex-1 flex-col items-center text-center rounded-lg p-6 shadow-lg text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${ProductosOriginales})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative">
          <h2 className="text-2xl font-bold mb-3">Productos 100% Originales</h2>
          <p className="text-sm mb-4">
            Nuestros productos 100% originales garantizan calidad y
            autenticidad, ofreciendo lo mejor en durabilidad, rendimiento y
            diseño exclusivo
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="flex flex-1 flex-col items-center text-center rounded-lg p-6 shadow-lg text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${TecnologiaVanguardia})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative">
          <h2 className="text-2xl font-bold mb-3">Tecnología de vanguardia</h2>
          <p className="text-sm mb-4">
            Con tecnología de vanguardia, estos artículos ofrecen lo último en
            innovación, rendimiento y eficiencia para satisfacer tus necesidades
            más exigentes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
