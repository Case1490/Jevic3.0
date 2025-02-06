import Mision from "../assets/mision.jpg";
import Vision from "../assets/vision.jpg";

const MissionAndVision = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify-between gap-2 my-6">
      {/* Card 1 */}
      <div
        className="flex flex-1 flex-col items-center text-center rounded-lg p-6 shadow-lg text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${Mision})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative">
          <h2 className="text-2xl font-bold mb-3">Misión</h2>
          <p className="text-sm mb-4">
            Nuestra misión es proporcionar productos tecnológicos de alta
            calidad que impulsen la innovación y faciliten la vida cotidiana de
            nuestros clientes. Nos esforzamos por ofrecer una experiencia de
            compra confiable, accesible y personalizada, conectando a las
            personas con la tecnología más avanzada para satisfacer sus
            necesidades y superar sus expectativas.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="flex flex-1 flex-col items-center text-center rounded-lg p-6 shadow-lg text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${Vision})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative">
          <h2 className="text-2xl font-bold mb-3">Visión</h2>
          <p className="text-sm mb-4">
            Ser reconocidos como la tienda líder en tecnología, destacándonos
            por nuestra capacidad de anticiparnos a las tendencias del mercado y
            ofrecer soluciones innovadoras. Aspiramos a construir una comunidad
            tecnológica donde la calidad, el servicio al cliente y la
            sostenibilidad sean los pilares que definan nuestra marca y nos
            permitan ser un referente en el sector a nivel global.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
