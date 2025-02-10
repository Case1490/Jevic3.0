import { useState, useEffect, useRef } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const SearchSuggestions = ({ searchTerm, onSelect, isFocused }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const highlightText = (text, highlight) => {
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-blue-500 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    isFocused && (
      <div
        className={`absolute w-full text-black bg-white shadow-lg rounded-lg p-2 mt-2 max-h-96 overflow-y-auto ${
          searchTerm ? "block" : "hidden"
        }`}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              to={`/producto/${product.id}`}
              key={product.id}
              className="flex items-center p-2 border-b hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelect(product)}
            >
              <img
                src={product.imagen}
                alt={product.nombre}
                className="w-12 h-12 rounded-md mr-3"
              />
              <span>{highlightText(product.nombre, searchTerm)}</span>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 p-2 text-center">No hay resultados</p>
        )}
      </div>
    )
  );
};

export default SearchSuggestions;
