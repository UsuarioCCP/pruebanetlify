import React, { useState, useEffect, useContext } from "react";
import { ImagenesContext } from "../Context";
import "./styles.css";

function Carousel() {
  const { imagenes } = useContext(ImagenesContext);
  const [activeIndex, setActiveIndex] = useState(0);

  // Actualizar el índice activo cuando cambian las imágenes
  useEffect(() => {
    if (imagenes.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
      }, 20000);

      return () => clearInterval(interval);
    }
  }, [imagenes]);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative max-w-md h-auto max-h-[32rem] shadow dark:bg-gray-800 dark:border-gray-700"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* Mostrar las imágenes desde el contexto */}
        {imagenes.map((imagen, index) => (
          <div
          key={index}
          className={`relative float-left w-full h-[32rem] transition-transform duration-600ms ease-in-out motion-reduce:transition-none flex flex-col justify-between`}
          data-te-carousel-active
          data-te-carousel-item
          id="slide-carousel"
          style={{ display: index === activeIndex ? "block" : "none" }}
        >
          <img
            src={imagen.url}
            className="w-full h-auto max-h-[22rem] object-contain"
            id="imagen-carousel"
            alt={`Slide ${index}`}
          />
          <div className="p-2 h-1/3 flex flex-col justify-center">
            <div className="flex-grow-[0.3]">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                {imagen.titulo}
              </h5>
            </div>
            <p className="mb-3 text-center font-medium text-black dark:text-gray-400 line-clamp-3">
              {imagen.descripcion}
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
