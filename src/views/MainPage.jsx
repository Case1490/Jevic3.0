import AnyProducts from "../components/AnyProducts";
import BannerPrice from "../components/BannerPrice";
import Benefits from "../components/Benefits";
import CarouselProducts from "../components/CarouselProducts";
import CategoriesCards from "../components/CategoriesCards";
import DetailsShop from "../components/DetailsShop";
import NewProducts from "../components/NewProducts";
import SuscribeNews from "../components/SuscribeNews";
import Testimonials from "../components/Testimonials";

const MainPage = () => {
  return (
    <>
      <CarouselProducts />
      <DetailsShop />
      <CategoriesCards />
      <Benefits />
      <AnyProducts />
      <BannerPrice />
      <NewProducts />
      <Testimonials />
      <SuscribeNews />
    </>
  );
};

export default MainPage;
