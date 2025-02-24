import { useEffect } from "react";
import AboutUsImage from "../assets/aboutUs.jpg";
import MissionAndVision from "../components/MissionAndVision";
import Services from "../components/Services";
import Values from "../components/Values";

const AboutUs = () => {
  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  return (
    <div className="pt-[140px]">
      <div className="w-5/6 m-auto">
        <h1 className="text-center my-8 text-4xl font-bold">
          Sobre JevicTecnology
        </h1>

        <div className="flex lg:flex-row flex-col gap-y-3 lg:gap-x-2 my-8">
          <div className="flex-1 bg-BlueMain text-white rounded-xl flex flex-col items-center justify-center text-center p-4 md:p-2">
            <h1 className="text-4xl font-bold text-center mb-4">
              ¿Cómo nació Jevic?
            </h1>
            <p>
              Jevic nació con la misión de ser una empresa tecnológica líder en
              la venta de productos innovadores. Desde el inicio, ha priorizado
              la calidad, eficiencia e innovación para ofrecer soluciones
              avanzadas a sus clientes. Con un enfoque en la experiencia del
              usuario, Jevic busca mejorar la vida de las personas mediante
              tecnología de vanguardia, adaptándose a las tendencias del mercado
              y garantizando confianza en cada producto.
            </p>
          </div>
          <div className="flex-1">
            <img src={AboutUsImage} alt="" />
          </div>
        </div>

        <Values />
        <MissionAndVision />
        <Services />
      </div>
    </div>
  );
};

export default AboutUs;
