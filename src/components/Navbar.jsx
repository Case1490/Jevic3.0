import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo_dark-removebg-preview.png";
import Search from "../helpers/Search";
import HamburguerIcon from "../icons/HamburguerIcon";
import { useState } from "react";

// IMPORTANDO ICONOS
import { X } from "lucide-react"; // Ícono de cerrar
import { Smartphone } from "lucide-react";
import { Watch } from "lucide-react";
import { Laptop } from "lucide-react";
import { PlugZap } from "lucide-react";
import { Headset } from "lucide-react";
import { Cctv } from "lucide-react";
import { Rocket } from "lucide-react";

const Navbar = () => {
  const [categorieActive, setCategorieActive] = useState(false);

  const handleShowCategories = () => {
    setCategorieActive(true);
  };

  const handleCloseCategories = () => {
    setCategorieActive(false);
  };

  return (
    <>
      <div className="hidden lg:block bg-DarkMain text-white fixed w-full z-[90] rounded-b-[50px]">
        <div className="w-5/6 m-auto flex items-center justify-between py-3">
          <Link to="/" className="w-[60px]">
            <img src={Logo} alt="JevicTecnology" className="w-full" />
          </Link>

          <div>
            <Search />
          </div>

          <div
            className="flex items-center font-bold gap-x-1 bg-BlueMain text-white p-2 rounded-xl uppercase cursor-pointer"
            onClick={handleShowCategories}
          >
            <HamburguerIcon />
            categorías
          </div>
        </div>
        <div className="bg-BlueMain rounded-b-full">
          <div className="w-5/6 m-auto flex justify-center py-3">
            <nav>
              <ul className="flex gap-x-24 font-bold text-lg">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-CoralMain" : "hover:text-CoralMain"
                    }
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/productos"
                    className={({ isActive }) =>
                      isActive ? "text-CoralMain" : "hover:text-CoralMain"
                    }
                  >
                    Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/nosotros"
                    className={({ isActive }) =>
                      isActive ? "text-CoralMain" : "hover:text-CoralMain"
                    }
                  >
                    Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                      isActive ? "text-CoralMain" : "hover:text-CoralMain"
                    }
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Menú lateral */}
      <div
        className={`fixed z-[91] top-0 right-0 h-full w-full bg-black bg-opacity-50 transition-opacity duration-300 
        ${categorieActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={handleCloseCategories}
      ></div>

      <div
        className={`fixed z-[92] top-0 right-0 h-full w-1/3 bg-white shadow-lg p-6 transition-transform duration-300 
        ${categorieActive ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={handleCloseCategories}
        >
          <X size={28} />
        </button>
        <h2 className="text-2xl font-bold text-center mb-10">Categorías</h2>
        <ul className="text-lg  space-y-8 text-center">
          <li className="hover:text-BlueMain cursor-pointer flex items-center justify-center gap-x-2">
            <Smartphone size={20} /> Celulares
          </li>
          <li className="hover:text-BlueMain cursor-pointer flex items-center justify-center gap-x-2">
            <Watch size={20} /> SmartWatch
          </li>
          <li className="hover:text-BlueMain cursor-pointer flex items-center justify-center gap-x-2">
            <Laptop size={20} /> Periféricos
          </li>
          <li className="hover:text-BlueMain cursor-pointer flex items-center justify-center gap-x-2">
            <PlugZap size={20} /> Cargadores
          </li>
          <li className="hover:text-BlueMain cursor-pointer flex items-center justify-center gap-x-2">
            <Headset size={20} /> Audífonos
          </li>
          <li className="hover:text-BlueMain cursor-pointer flex items-center justify-center gap-x-2">
            <Cctv size={20} /> Cámaras IP
          </li>
          <li className="hover:text-BlueMain cursor-pointer flex items-center justify-center gap-x-2">
            <Rocket size={20} /> Drones
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
