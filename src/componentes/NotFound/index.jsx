import React from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirige a la página principal ("/") después de 3 segundos
      window.location.replace("/");
    }, 3000); // Cambia el tiempo según sea necesario

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, []);

  const navigate = useNavigate();

  // Realiza la redirección a la ruta "/" al renderizar el componente NotFound
  navigate("/");

  // Puedes retornar algún contenido aquí si lo necesitas, aunque la redirección ya habrá ocurrido
  return (
    <div>
      <section className="h-lvh w-full fixed z-50 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-h-screen max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div
            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
              Not Fount - 404
            </span>{" "}
            <span className="text-sm font-medium">
              Lo sentimos!! Parece que la pagina no fue encontrada
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Seras redireccionado automaticamente
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            De no ser asi, da clic 
          </p>
            <button className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <NavLink to="/"> Aqui
            </NavLink>
            </button>          
        </div>
      </section>
    </div>
  );
};

export default NotFound;
