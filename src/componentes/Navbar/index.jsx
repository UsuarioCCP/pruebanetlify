import { NavLink } from "react-router-dom";
import Reloj from "../Reloj";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 ">
      <div className="my-4 mx-10 flex flex-wrap items-center justify-between p-4">
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/">
              <div className="md:w-full gap-3" id="contenedor-logos">
                <img
                  src="https://i.imgur.com/k9aBoGR.png"
                  id="logo-empresa-ochenta"
                  alt="imagen-ochenta-años"
                />
                <img
                  src="https://i.imgur.com/Ta3jMHa.png"
                  id="logo-empresa"
                  alt="logo-empresa"
                />
              </div>
            </NavLink>
          </li>
        </ul>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <lu>
              <li className="list-none">
                <NavLink to='/admin'>
                <div className="w-full" id="contenedor-nombre">
                  <h2 className="text-xl font-semibold text-center md:text-4xl empresa">
                    Cámara de Comercio de Pamplona
                  </h2>
                </div>
                </NavLink>
              </li>
          </lu>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ul>
            <li className="reloj">
              <Reloj />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
