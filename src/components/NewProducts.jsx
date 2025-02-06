import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardProduct from "./CardProduct";

const NewProducts = () => {
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
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-end mt-1 md:mt-4">
        <Link
          to="/Todo"
          className="bg-BlueMain text-white p-3 rounded-full hover:bg-BlueLight"
        >
          Ver Todo
        </Link>
      </div>
    </div>
  );
};

export default NewProducts;
