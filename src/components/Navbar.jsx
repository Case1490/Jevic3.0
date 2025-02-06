import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo_dark-removebg-preview.png";
import Search from "../helpers/Search";
import HamburguerIcon from "../icons/HamburguerIcon";

const Navbar = () => {
  return (
    <div className="hidden lg:block bg-DarkMain text-white fixed w-full z-[999] rounded-b-[50px]">
      <div className="w-5/6 m-auto flex items-center justify-between py-3">
        <div className="w-[60px]">
          <img src={Logo} alt="JevicTecnology" className="w-full" />
        </div>

        <div>
          <Search />
        </div>

        <div className="flex items-center font-bold gap-x-1 bg-BlueMain text-white p-2 rounded-xl uppercase">
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
  );
};

export default Navbar;
