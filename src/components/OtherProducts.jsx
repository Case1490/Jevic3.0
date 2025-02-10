import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardProduct from "./CardProduct";

const OtherProducts = ({ currentProductId, category }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const q = query(
          collection(db, "productos"),
          where("categoria", "==", category)
        );
        const querySnapshot = await getDocs(q);
        let products = [];

        querySnapshot.forEach((doc) => {
          if (doc.id !== currentProductId) {
            products.push({ id: doc.id, ...doc.data() });
          }
        });

        // Seleccionar 4 productos aleatorios
        if (products.length > 4) {
          products = products.sort(() => 0.5 - Math.random()).slice(0, 4);
        }

        setRelatedProducts(products);
      } catch (error) {
        console.error("Error al obtener productos relacionados:", error);
      }
    };

    if (category) {
      fetchRelatedProducts();
    }
  }, [currentProductId, category]);

  return (
    <div className="bg-slate-200 py-5 text-center rounded-tl-[70px] rounded-tr-[70px]">
      <div className="w-5/6 m-auto">
        <h1 className="text-4xl font-bold my-6">
          Lo que nuestros clientes también buscaron
        </h1>

        {relatedProducts.length > 0 && (
          <div className="p-6">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              navigation
              pagination={{ clickable: true }}
              className="swiper-other-products"
            >
              {relatedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="bg-white rounded-xl">
                    <CardProduct
                      id={product.id}
                      name={product.nombre}
                      price={product.precio}
                      image={product.imagen}
                      description={product.descripcion || "No hay descripción."}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherProducts;
