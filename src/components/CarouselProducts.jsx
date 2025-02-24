import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Loading from "../helpers/Loading";

const CarouselProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🚀 Obtener productos desde Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(
          collection(db, "productos"),
          orderBy("createdAt", "desc"),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        const productList = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const [marca, ...nombreRestante] = data.nombre.split(" "); // Separa la primera palabra del resto
          return {
            id: doc.id,
            ...data,
            marca: data.marca || marca, // Usa el campo marca si existe, sino toma la primera palabra del nombre
            nombre: nombreRestante.join(" "), // Reconstruye el nombre sin la marca
          };
        });

        setProducts(productList);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  // ⏳ Cambio automático cada 4 segundos
  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products]);

  // ✨ Animaciones con Framer Motion
  const fadeVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.8 } },
  };

  if (products.length === 0) {
    return (
      <div className="pt-[140px] min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const currentProduct = products[currentIndex];

  return (
    <div className="pt-[140px] min-h-screen flex items-center justify-center">
      <div className="w-5/6 m-auto flex flex-col md:flex-row items-center justify-center gap-x-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.id}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4 text-center w-1/2 capitalize"
          >
            <h1 className="cursiva text-blue-500 text-6xl">
              {currentProduct.marca || "Producto"}
            </h1>
            <h2 className="font-bold text-5xl">{currentProduct.nombre}</h2>
            <h2 className="text-gray-600">{currentProduct.descripcion}</h2>

            <div className="flex gap-x-2 justify-center">
              <a
                href={`https://wa.me/${
                  import.meta.env.VITE_NUMBERWHATSAPP
                }?text=${encodeURIComponent(
                  `Hola, estoy interesado en el producto: ${currentProduct.nombre}. ¿Podrían darme más información?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-BlueMain text-white hover:bg-blue-900"
              >
                Comprar
              </a>
              <Link
                to={`/producto/${currentProduct.id}`}
                className="border border-BlueMain text-BlueMain px-4 py-2 hover:bg-slate-200"
              >
                Ver más
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`img-${currentProduct.id}`}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-[300px] md:w-auto"
          >
            <img
              src={currentProduct.imagen}
              alt={currentProduct.nombre}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselProducts;
