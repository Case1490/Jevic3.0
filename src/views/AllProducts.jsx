import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import CardProduct from "../components/CardProduct";
import Loading from "../helpers/Loading";

// Función para normalizar texto
const normalizeText = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const AllProducts = () => {
  const { categoria } = useParams(); // Obtiene la categoría desde la URL
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Actualiza la categoría seleccionada si cambia la URL
  useEffect(() => {
    setSelectedCategory(categoria ? normalizeText(categoria) : "todo");
  }, [categoria]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const productsRef = collection(db, "productos");
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
      <h1 className="text-center my-8 text-4xl font-bold">Lo Que Ofrecemos</h1>

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
          <a
            key={category}
            href={`/productos/${category}`}
            className={`navbarLinkProduct ${
              normalizeText(selectedCategory) === normalizeText(category)
                ? "activeProduct"
                : ""
            }`}
          >
            {category}
          </a>
        ))}
      </div>

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
                description={product.descripcion || "No hay descripción."}
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
