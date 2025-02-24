import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "swiper/css";
import "swiper/css/navigation";

import CategorieCard from "./CategorieCard";
import Celular from "../assets/categorias/celular.jpg";
import SmartWatch from "../assets/categorias/smartwatch.png";
import Perifericos from "../assets/categorias/perifericos.jpg";
import Cargadores from "../assets/categorias/cargadores.jpg";
import Audifonos from "../assets/categorias/audifonos.jpg";
import CamarasIP from "../assets/categorias/camarasip.jpg";
import Drones from "../assets/categorias/drones.png";

const CategoriesCards = () => {
  const navigate = useNavigate(); // Hook para redirigir

  const categories = [
    { name: "Celulares", image: Celular },
    { name: "SmartWatch", image: SmartWatch },
    { name: "Periféricos", image: Perifericos },
    { name: "Cargadores", image: Cargadores },
    { name: "Audífonos", image: Audifonos },
    { name: "CámarasIP", image: CamarasIP },
    { name: "Drones", image: Drones },
  ];

  return (
    <div className="w-[90%] m-auto my-4">
      <h1 className="text-center text-2xl sm:text-4xl mb-2">
        Categorías Populares
      </h1>
      <hr />
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true,
            centerInsufficientSlides: true,
          },
          450: { slidesPerView: 2, centeredSlides: false },
          608: { slidesPerView: 3 },
          850: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="my-6"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <div
              onClick={() => navigate(`/productos/${category.name}`)}
              className="cursor-pointer"
            >
              <CategorieCard imagen={category.image} nombre={category.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesCards;
