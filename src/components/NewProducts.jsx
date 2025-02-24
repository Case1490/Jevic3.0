import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardProduct from "./CardProduct";

const NewProducts = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const q = query(
          collection(db, "productos"),
          orderBy("createdAt", "desc"), // 🔥 Ordena por fecha de creación
          limit(4)
        );
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setLatestProducts(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  if (loading) return <p className="text-center">Cargando productos...</p>;

  return (
    <div className="w-5/6 m-auto">
      <h1 className="text-2xl md:text-4xl">Últimas novedades</h1>
      <hr />

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="my-8"
      >
        {latestProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <CardProduct
              id={product.id}
              image={product.imagen}
              name={product.nombre}
              description={product.descripcion}
              price={product.precio}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-end mt-1 md:mt-4">
        <Link
          to="/productos"
          className="bg-BlueMain text-white p-3 rounded-full hover:bg-BlueLight"
        >
          Ver Todo
        </Link>
      </div>
    </div>
  );
};

export default NewProducts;
