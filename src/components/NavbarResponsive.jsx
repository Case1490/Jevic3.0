import { useState } from "react";
import SearchResponsive from "./SearchResponsive";
import Logo from "../assets/Logo_dark-removebg-preview.png";
import HamburguerIcon from "../icons/HamburguerIcon";
import { Link } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import ProductsIcon from "../icons/ProductsIcon";
import AboutUsIcon from "../icons/AboutUsIcon";
import ContactIcon from "../icons/ContactIcon";
import CategoryIcon from "../icons/CategoryIcon";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import SearchIcon from "../icons/SearchIcon";

const NavbarResponsive = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [searchShow, setSearchShow] = useState(false);

  const handleMenuClick = () => {
    setMenuActive((prev) => !prev);
  };

  const handleSubmenuClick = () => {
    setSubmenuOpen((prev) => !prev);
  };

  const handleSearchResponsive = () => {
    setSearchShow((prev) => !prev);
  };

  return (
    <div className="block lg:hidden bg-DarkMain text-white fixed w-full z-[99] rounded-b-[50px]">
      {/* Barra superior */}
      <div className="w-5/6 m-auto flex items-center justify-between py-3">
        <div className="w-[50px]">
          <img src={Logo} alt="JevicTecnology" className="w-full" />
        </div>
        <div onClick={handleSearchResponsive} className=" cursor-pointer">
          <SearchIcon />
        </div>
      </div>

      {searchShow && (
        <SearchResponsive
          searchShow={searchShow}
          onClose={handleSearchResponsive}
        />
      )}

      {/* Icono de menú */}
      <div className="bg-BlueMain rounded-b-full">
        <div className="w-5/6 m-auto flex justify-start py-3">
          <div onClick={handleMenuClick} className="cursor-pointer ml-3">
            <HamburguerIcon />
          </div>
        </div>

        {/* Fondo oscuro con opacidad (solo visible si el menú está activo) */}
        {menuActive && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={handleMenuClick}
          />
        )}

        {/* Menú lateral */}
        <div
          className={`fixed overflow-y-auto top-0 left-0 w-2/3 sm:w-1/2 h-screen bg-white text-black z-20 transition-transform ${
            menuActive ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="h-full flex items-start justify-end pt-10 pr-10">
            <ul className="flex flex-col gap-y-10">
              <Link
                to="/"
                className="border-b border-BlueMain flex items-center gap-x-2 pb-1"
                onClick={() => setMenuActive(false)}
              >
                <HomeIcon /> Inicio
              </Link>
              <Link
                to="/productos"
                className="border-b border-BlueMain flex items-center gap-x-2 pb-1"
                onClick={() => setMenuActive(false)}
              >
                <ProductsIcon /> Productos
              </Link>
              <Link
                to="/nosotros"
                className="border-b border-BlueMain flex items-center gap-x-2 pb-1"
                onClick={() => setMenuActive(false)}
              >
                <AboutUsIcon /> Nosotros
              </Link>
              <Link
                to="/contacto"
                className="border-b border-BlueMain flex items-center gap-x-2 pb-1"
                onClick={() => setMenuActive(false)}
              >
                <ContactIcon /> Contacto
              </Link>

              {/* Submenú de Categorías */}
              <div>
                <div
                  className="border-b border-BlueMain flex items-center gap-x-2 pb-1 cursor-pointer"
                  onClick={handleSubmenuClick}
                >
                  <CategoryIcon /> Categorías{" "}
                  {submenuOpen ? <ArrowUp /> : <ArrowDown />}
                </div>
                <ul
                  className={`transition-all mb-3 space-y-4 mt-4  overflow-hidden text-slate-600 ${
                    submenuOpen ? " max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <li className="py-1">
                    <Link
                      to="/productos/celulares"
                      onClick={() => setMenuActive(false)}
                    >
                      Celulares
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/productos/smartwatch"
                      onClick={() => setMenuActive(false)}
                    >
                      SmartWatch
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/productos/perifericos"
                      onClick={() => setMenuActive(false)}
                    >
                      Periféricos
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/productos/cargadores"
                      onClick={() => setMenuActive(false)}
                    >
                      Cargadores
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/productos/audifonos"
                      onClick={() => setMenuActive(false)}
                    >
                      Audífonos
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/productos/camarasip"
                      onClick={() => setMenuActive(false)}
                    >
                      Cámaras IP
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/productos/drones"
                      onClick={() => setMenuActive(false)}
                    >
                      Drones
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarResponsive;
