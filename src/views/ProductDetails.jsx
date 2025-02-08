import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const aumentarCantidad = () => setCantidad((prev) => prev + 1);
  const disminuirCantidad = () => {
    if (cantidad > 1) setCantidad((prev) => prev - 1);
  };

  const handleCompra = () => {
    alert(`Compraste ${cantidad} unidad(es) de ${product.nombre}`);
  };

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (!product)
    return <p className="text-center mt-10">Producto no encontrado</p>;

  return (
    <div className="pt-[170px] pb-[40px] w-5/6 m-auto">
      <h1 className="text-4xl font-bold text-center uppercase">
        {product.nombre}
      </h1>
      <div className="flex flex-col md:flex-row mt-8 gap-6">
        <div className="flex justify-center items-center">
          <img src={product.imagen} alt={product.nombre} className="w-full" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-slate-600">{product.descripcion}</p>
          <p className="text-4xl font-semibold">S/ {product.precio}</p>

          {/* Características */}
          {product.caracteristicas && product.caracteristicas.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mt-4">Características:</h3>
              <ul className="list-disc pl-5">
                {product.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="text-gray-700">
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Control de Cantidad */}
          <div className="flex items-center gap-8 mt-4">
            <button
              onClick={disminuirCantidad}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              -
            </button>
            <span className="text-xl">{cantidad}</span>
            <button
              onClick={aumentarCantidad}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              +
            </button>

            <p className=" text-CoralMain font-bold">
              ¡Más de 20 unidades disponibles!
            </p>
          </div>

          {/* Botón de Comprar */}
          <a
            href="#"
            onClick={handleCompra} // Evita que el Link se active al hacer clic aquí
            className="bg-green-500 text-white flex items-center justify-center gap-x-2 py-2 rounded-lg mt-2 uppercase hover:bg-green-600"
          >
            <WhatsAppIcon />
            Lo quiero ahora!
          </a>
        </div>
      </div>

      <h1>Nuestros clientes también buscaron</h1>
    </div>
  );
};

export default ProductDetails;
