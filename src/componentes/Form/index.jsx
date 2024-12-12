import React, { useState } from "react";
import "./styles.css";
import FormAdminVideoVisor from "../FormAdminVideoVisor";
import FormCarousel from "../FormCarousel";
import FormBaner from "../FormBaner";

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
    return `flex items-center justify-start w-full py-2 px-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group ${
      activeButton === buttonId
        ? "shadow-lg text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        : ""
    }`;
  };

  const iconClass = (buttonId) => {
    return activeButton === buttonId
      ? "w-6 h-6 text-white"
      : "w-6 h-6 text-gray-800 dark:text-white";
  };

  return (
    <>
      <div className="grid fixed h-lvh top-30">
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

        <aside
          className="fixed mt-35 left-0 z-40 w-64 h-5/6 transition-transform -translate-x-full sm:translate-x-0 border-4 border-red-700 border-solid rounded-lg dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <button>
                  <span className="ms-3">Modulos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleOptionClick("reproductor", "reproductor")
                  }
                  className={buttonClass("reproductor")}
                >
                  <svg
                    className={iconClass("reproductor")}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z"
                    />
                  </svg>
                  <span className="ms-2 whitespace-nowrap">
                    Reproductor de video
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOptionClick("carousel", "carousel")}
                  className={buttonClass("carousel")}
                >
                  <svg
                    className={iconClass("carousel")}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                    />
                  </svg>
                  <span className="ms-2 whitespace-nowrap">Carousel</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOptionClick("baner", "baner")}
                  className={buttonClass("baner")}
                >
                  <svg
                    className={iconClass("baner")}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                    />
                  </svg>
                  <span className="ms-2 whitespace-nowrap">Baner</span>
                </button>
              </li>
              {/* Aquí pueden añadirse más opciones de la barra lateral */}
            </ul>
          </div>
        </aside>

        <div
          className="container h-5/6 fixed top-30 overflow-x-auto bg-white border-4 border-red-700 border-solid rounded-lg dark:border-gray-700"
          id="contenido-tabla"
        >
          <div className="">
            <div className="gap-4 bg-white">
              <form className="justify-center bg-white w-full m-2">
                {selectedOption === "reproductor" && <FormAdminVideoVisor />}
                {selectedOption === "carousel" && <FormCarousel />}
                {selectedOption === "baner" && <FormBaner />}

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
    </>
  );
};

export default Form;
