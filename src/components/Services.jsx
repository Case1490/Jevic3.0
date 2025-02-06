import HelpIcon from "../icons/HelpIcon";
import FreeShipping from "../icons/FreeShipping";
import WarrantyIcon from "../icons/WarrantyIcon";
import SupportIcon from "../icons/SupportIcon";
import PostSaleIcon from "../icons/PostSaleIcon";
import LoyaltyIcon from "../icons/LoyaltyIcon";

const Services = () => {
  return (
    <div className="my-8">
      <h1 className="text-center my-4 text-4xl font-bold">
        Nuestros Principales Servicios
      </h1>
      <p className="text-center my-4">
        brindamos servicios innovadores para cubrir tus necesidades industriales
        con calidad y confianza
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        {/* primer servicio */}
        <div className="flex flex-col items-center justify-center bg-BlueMain p-4 rounded-lg text-white text-center space-y-2 h-full">
          <HelpIcon />
          <h1 className="text-2xl font-bold">Asesoramiento Personalizado</h1>
          <p>
            Ayuda para encontrar el producto tecnológico ideal según las
            necesidades del cliente.
          </p>
        </div>
        {/* segundo servicio */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-BlueMain text-BlueMain text-center space-y-2 h-full">
          <FreeShipping />
          <h1 className="text-2xl font-bold">Envío Rápido y Seguro</h1>
          <p>
            Entregas confiables en tiempos reducidos, con opciones de
            seguimiento en tiempo real.
          </p>
        </div>
        {/* tercer servicio */}
        <div className="flex flex-col items-center justify-center bg-BlueMain p-4 rounded-lg text-white text-center space-y-2 h-full">
          <WarrantyIcon />
          <h1 className="text-2xl font-bold">Garantía y Devoluciones</h1>
          <p>
            Políticas claras de garantía y devoluciones para asegurar la
            satisfacción del cliente.
          </p>
        </div>
        {/* cuarto servicio */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-BlueMain text-BlueMain text-center space-y-2 h-full">
          <SupportIcon />
          <h1 className="text-2xl font-bold">Servicio Técnico</h1>
          <p>Reparación y mantenimiento de dispositivos tecnológicos</p>
        </div>
        {/* quinto servicio */}
        <div className="flex flex-col items-center justify-center bg-BlueMain p-4 rounded-lg text-white text-center space-y-2 h-full">
          <PostSaleIcon />
          <h1 className="text-2xl font-bold">Soporte Postventa</h1>
          <p>
            Tutoriales, guías y consejos para aprovechar al máximo los productos
            adquiridos.
          </p>
        </div>
        {/* sexto servicio */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-BlueMain text-BlueMain text-center space-y-2 h-full">
          <LoyaltyIcon />
          <h1 className="text-2xl font-bold">Programas de Fidelización</h1>
          <p>
            Ofertas exclusivas, puntos acumulables o descuentos especiales para
            clientes frecuentes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
