// IMPORTANDO LOGOS DE MARCAS
import Apple from "../assets/marcas/apple.png";
import Epson from "../assets/marcas/epson.png";
import Ezviz from "../assets/marcas/ezviz.png";
import Huawei from "../assets/marcas/huawei.png";
import Jbl from "../assets/marcas/JBL.png";
import Kingston from "../assets/marcas/kingston.png";
import Samsung from "../assets/marcas/samsung.png";
import Sony from "../assets/marcas/sony.png";
import TpLink from "../assets/marcas/tp-link.png";
import Xiaomi from "../assets/marcas/xiaomi.png";

const SliderBrands = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-bold mb-10">
        Las Mejores Marcas, en un Solo Lugar
      </h1>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={Apple} alt="" />
          </div>
          <div className="slide">
            <img src={Epson} alt="" />
          </div>
          <div className="slide">
            <img src={Ezviz} alt="" />
          </div>
          <div className="slide">
            <img src={Huawei} alt="" />
          </div>
          <div className="slide">
            <img src={Jbl} alt="" />
          </div>
          <div className="slide">
            <img src={Kingston} alt="" />
          </div>
          <div className="slide">
            <img src={Samsung} alt="" />
          </div>
          <div className="slide">
            <img src={Sony} alt="" />
          </div>
          <div className="slide">
            <img src={TpLink} alt="" />
          </div>
          <div className="slide">
            <img src={Xiaomi} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBrands;
