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
            <h1 className="text-3xl font-bold text-center mb-4">
              Cómo nació Jevic
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              assumenda officia repellat unde illum ad harum, iure inventore
              perferendis sed perspiciatis praesentium accusamus autem adipisci
              alias voluptates impedit? Neque, maxime. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Deleniti assumenda officia
              repellat unde illum ad harum,
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
