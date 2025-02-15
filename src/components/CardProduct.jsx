import { Link } from "react-router-dom";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const CardProduct = ({ id, image, name, description, price }) => {
  return (
    <div className="text-center border-r border-b rounded-lg p-3">
      {/* Link envuelve todo excepto el botón de compra */}
      <Link to={`/producto/${id}`} className="block">
        <div className="h-40 flex justify-center items-center">
          <img src={image} alt={name} className="h-full object-contain" />
        </div>
        <h1 className="text-xl text-BlueMain capitalize font-bold">{name}</h1>
        <p className="text-sm my-2 line-clamp-2 overflow-hidden">
          {description}
        </p>
        <p className="font-bold text-2xl">S/ {price}</p>
      </Link>

      {/* Botón de compra con preventDefault para evitar conflictos */}
      <a
        href={`https://wa.me/${
          import.meta.env.VITE_NUMBERWHATSAPP
        }?text=${encodeURIComponent(
          `Hola, estoy interesado en el producto: ${name}. ¿Podrían darme más información?`
        )}`}
        target="_blank"
        onClick={(e) => e.stopPropagation()} // Evita que el Link se active al hacer clic aquí
        className="bg-green-500 text-white flex items-center justify-center gap-x-2 py-2 rounded-lg mt-2 uppercase hover:bg-green-600"
      >
        <WhatsAppIcon />
        Comprar
      </a>
    </div>
  );
};

export default CardProduct;
