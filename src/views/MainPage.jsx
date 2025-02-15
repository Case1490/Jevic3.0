import { useEffect } from "react";
import AnyProducts from "../components/AnyProducts";
import BannerPrice from "../components/BannerPrice";
import Benefits from "../components/Benefits";
import CarouselProducts from "../components/CarouselProducts";
import CategoriesCards from "../components/CategoriesCards";
import DetailsShop from "../components/DetailsShop";
import NewProducts from "../components/NewProducts";
import SliderBrands from "../components/SliderBrands";
import Testimonials from "../components/Testimonials";

const MainPage = () => {
  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  return (
    <>
      <CarouselProducts />
      <DetailsShop />
      <CategoriesCards />
      <Benefits />
      <AnyProducts />
      <BannerPrice />
      <NewProducts />
      <SliderBrands />
      <Testimonials />
    </>
  );
};

export default MainPage;
