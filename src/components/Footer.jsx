import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import LocationIcon from "../icons/LocationIcon";
import PhoneIcon from "../icons/PhoneIcon";
import EmailIcon from "../icons/EmailIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-DarkMain">
      <div className="w-5/6 m-auto py-5 text-white flex lg:flex-row lg:items-center lg:justify-between flex-col space-y-8 lg:space-y-0 gap-x-8 mb-8 lg:mb-0">
        {/* primera columna */}
        <div className=" flex-1 text-center">
          <h1 className="text-3xl my-4 font-bold">Acerca de</h1>
          <p>
            En JevicTecnology, estamos comprometidos con ofrecer productos
            tecnológicos de última generación que se adapten a las necesidades
            de nuestros clientes. Nuestra misión es proporcionar soluciones
            innovadoras y accesibles, desde dispositivos electrónicos hasta
            equipos especializados, asegurando calidad, confiabilidad y un
            servicio excepcional.
          </p>
        </div>
        {/* segunda columna */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center">Categorías</h1>

          <div className="flex flex-col mt-4 items-center space-y-4">
            <Link to="/productos/celulares" className="hover:text-CoralMain">
              Celulares
            </Link>
            <Link to="/productos/smartwatch" className="hover:text-CoralMain">
              SmartWatch
            </Link>
            <Link to="/productos/perifericos" className="hover:text-CoralMain">
              Periféricos
            </Link>
            <Link to="/productos/cargadores" className="hover:text-CoralMain">
              Cargadores
            </Link>
            <Link to="/productos/audifonos" className="hover:text-CoralMain">
              Audífonos
            </Link>
            <Link to="/productos/camarasip" className="hover:text-CoralMain">
              Cámaras IP
            </Link>
            <Link to="/productos/drones" className="hover:text-CoralMain">
              Drones
            </Link>
          </div>
        </div>
        {/* tercera columna */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold">
            Nuestras principales redes sociales
          </h1>
          <p className="my-4">
            ¡Conéctate con nosotros y no te pierdas ninguna novedad! Síguenos en
            nuestras principales redes sociales para estar al día con
            promociones, productos y mucho más
          </p>
          <SocialMedia />
        </div>
      </div>
      <hr />

      <div className="w-5/6 m-auto py-4 flex lg:flex-row space-y-4 lg:space-y-0 items-center lg:justify-between flex-col text-white">
        <div className="flex items-center gap-x-1">
          <LocationIcon />
          <h1>Chincha Alta, Perú</h1>
        </div>

        <div className="flex items-center gap-x-1">
          <PhoneIcon />
          <h1>+51 959 483 871</h1>
        </div>

        <div className="flex items-center gap-x-1">
          <EmailIcon />
          <h1>jevictecnology@gmail.com</h1>
        </div>
      </div>

      <hr />

      <div className="w-5/6 m-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center lg:justify-between py-4 text-gray-400">
        <h1 className="text-center md:text-left">
          &copy; {year} JevicTecnology. Todos los derechos reservados.
        </h1>
        <div className="flex justify-center items-center gap-x-10 sm:gap-x-2">
          <Link
            to="/politica-de-privacidad"
            className="hover:text-white inline-block"
          >
            Política de Privacidad
          </Link>
          <span>|</span>
          <Link
            to="/terminos-y-condiciones"
            className="hover:text-white inline-block"
          >
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
