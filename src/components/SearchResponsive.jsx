import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const SearchResponsive = ({ searchShow, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);

      // Guardar algunos productos como sugerencias
      setSuggestedProducts(productList.slice(0, 5)); // Muestra los primeros 5 como sugeridos
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts(suggestedProducts); // Mostrar sugerencias si el input está vacío
      return;
    }

    const filtered = products.filter((product) =>
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products, suggestedProducts]);

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="text-blue-500 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    searchShow && (
      <>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={onClose}
        />
        <div className="absolute top-4 w-[95%] left-2 sm:left-4 z-30 text-black">
          <input
            type="search"
            className="w-full p-2 rounded-2xl text-slate-700"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute w-full bg-white shadow-lg rounded-lg p-2 mt-1 max-h-96 overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  to={`/producto/${product.id}`}
                  key={product.id}
                  className="flex items-center p-2 border-b hover:bg-gray-100 cursor-pointer"
                  onClick={onClose}
                >
                  <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="w-12 h-12 rounded-md mr-3"
                  />
                  <span>{highlightMatch(product.nombre, searchTerm)}</span>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 p-2 text-center">No hay resultados</p>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default SearchResponsive;
