import { useState } from "react";
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
    <div className="block lg:hidden bg-DarkMain text-white fixed w-full z-[999] rounded-b-[50px]">
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
        <div className="absolute top-4 w-[90%] left-4 z-20">
          <input
            type="search"
            className="w-full p-2 rounded-2xl text-slate-700"
            placeholder="Buscar..."
          />
        </div>
      )}

      {searchShow && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={handleSearchResponsive}
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
          className={`fixed top-0 left-0 w-2/3 sm:w-1/2 h-screen bg-white text-black z-20 transition-transform ${
            menuActive ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="h-full flex items-start justify-end pt-10 pr-10">
            <ul className="flex flex-col gap-y-20">
              <Link className="border-b border-BlueMain flex items-center gap-x-2 pb-1">
                <HomeIcon /> Inicio
              </Link>
              <Link className="border-b border-BlueMain flex items-center gap-x-2 pb-1">
                <ProductsIcon /> Productos
              </Link>
              <Link className="border-b border-BlueMain flex items-center gap-x-2 pb-1">
                <AboutUsIcon /> Nosotros
              </Link>
              <Link className="border-b border-BlueMain flex items-center gap-x-2 pb-1">
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
                  className={` mt-2 transition-all overflow-hidden text-slate-600 ${
                    submenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <li className="py-1">
                    <Link to="/categoria1">Categoría 1</Link>
                  </li>
                  <li className="py-1">
                    <Link to="/categoria2">Categoría 2</Link>
                  </li>
                  <li className="py-1">
                    <Link to="/categoria3">Categoría 3</Link>
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
