import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import CardProduct from "../components/CardProduct";
import Loading from "../helpers/Loading";

// Función para eliminar tildes y convertir a minúsculas
const normalizeText = (text) => {
  return text
    .normalize("NFD") // Descompone caracteres con tilde
    .replace(/[\u0300-\u036f]/g, "") // Elimina diacríticos
    .toLowerCase(); // Convierte a minúsculas
};

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const [products, setProducts] = useState([]); // Estado para los productos
  const [loading, setLoading] = useState(false); // Estado para manejar la carga

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  // Función para cargar productos según la categoría seleccionada
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const productsRef = collection(db, "productos"); // Referencia a la colección "productos"
        let queryRef;

        if (normalizeText(selectedCategory) === "todo") {
          queryRef = query(productsRef);
        } else {
          queryRef = query(
            productsRef,
            where("categoria", "==", normalizeText(selectedCategory))
          );
        }

        const querySnapshot = await getDocs(queryRef);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [selectedCategory]);

  return (
    <div className="pt-[140px] w-5/6 m-auto">
      {/* Título principal */}
      <h1 className="text-center my-8 text-4xl font-bold">Lo Que Ofrecemos</h1>

      {/* Contenedor fijo para los NavLink */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {[
          "Todo",
          "Celulares",
          "SmartWatch",
          "Periféricos",
          "Cargadores",
          "Audífonos",
          "CámarasIP",
          "Drones",
        ].map((category) => (
          <button
            key={category}
            className={`navbarLinkProduct ${
              selectedCategory === normalizeText(category)
                ? "activeProduct"
                : ""
            }`}
            onClick={() => setSelectedCategory(normalizeText(category))}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="my-8">
        {loading ? (
          <div className="w-full flex justify-center h-[40vh] items-center">
            <Loading />
          </div>
        ) : products.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
            {products.map((product) => (
              <CardProduct
                key={product.id}
                id={product.id}
                name={product.nombre}
                price={product.precio}
                image={product.imagen}
                description={product.descripcion || "asjdsajdjasjds"}
              />
            ))}
          </div>
        ) : (
          <p className="text-center mt-4">
            No hay productos disponibles en esta categoría.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
