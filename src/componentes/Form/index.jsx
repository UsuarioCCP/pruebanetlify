import React, { useState } from 'react';
import './styles.css';
import FormAdminVideoVisor from '../FormAdminVideoVisor';
import FormCarousel from '../FormCarousel';

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [primerClic, setPrimerClic] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleOptionClick = (option, buttonId) => {
    if (selectedOption === option) {
      setSelectedOption(null);
      setActiveButton(null);
    } else {
      setSelectedOption(option);
      setPrimerClic(true);
      setActiveButton(buttonId);
    }
  };

  const buttonClass = (buttonId) => {
    return `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group ${activeButton === buttonId ? 'shadow-lg bg-red-100'  : ''}`;
  };
  return (
    <div className="grid fixed top-28">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside className="fixed mt-35 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-8 border-gray-200 border-solid rounded-lg dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <button>
                <span className="ms-3">Modulos</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick('reproductor', 'reproductor')} className={buttonClass('reproductor')}>
                <span className="flex-1 ms-3 whitespace-nowrap">Reproductor de video</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick('carousel', 'carousel')} className={buttonClass('carousel')}>
                <span className="flex-1 ms-3 whitespace-nowrap">Carousel</span>
              </button>
            </li>
            {/* Aquí pueden añadirse más opciones de la barra lateral */}
          </ul>
        </div>
      </aside>

      <div className="container h-full fixed top-28 overflow-x-auto bg-white border-8 border-gray-200 border-solid rounded-lg dark:border-gray-700" id="contenido-tabla">
        <div className="">
          <div className="gap-4 bg-white">
            <form className="bg-white w-fulls m-2">

              {selectedOption === 'reproductor' && <FormAdminVideoVisor />}
              {selectedOption === 'carousel' && <FormCarousel />}
              {/* Aquí pueden agregarse más componentes según las opciones */}

              {/* Mostrar mensaje inicial si no se ha hecho clic en ninguna opción */}
              {!primerClic && selectedOption === null && (
                <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                  Selecciona el componente que deseas modificar
                </h1>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
