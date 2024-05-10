import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const ImagenesContext = createContext();

// Proveedor del contexto
export const ImagenesProvider = ({ children }) => {
  // Estado para almacenar las imágenes, inicializado con imágenes predeterminadas
  const [imagenes, setImagenes] = useState([
    { url: "imagen1.jpg", titulo: "Imagen 1", descripcion: "Descripción 1" },
    { url: "imagen2.jpg", titulo: "Imagen 2", descripcion: "Descripción 2" },
    { url: "imagen3.jpg", titulo: "Imagen 3", descripcion: "Descripción 3" },
  ]);

  // Cargar imágenes desde localStorage al iniciar
  useEffect(() => {
    const storedImages = localStorage.getItem("carouselImages");
    if (storedImages) {
      try {
        const parsedImages = JSON.parse(storedImages);
        setImagenes(parsedImages);
      } catch (error) {
        console.error("Error parsing stored images:", error);
      }
    }
  }, []);

  // Función para actualizar las imágenes en el contexto y en localStorage
  const actualizarImagenes = (nuevasImagenes) => {
    try {
      setImagenes(nuevasImagenes);
      localStorage.setItem("carouselImages", JSON.stringify(nuevasImagenes));
    } catch (error) {
      console.error("Error updating images:", error);
    }
  };

  // Objeto de contexto que contiene imágenes y función para actualizarlas
  const contextValue = {
    imagenes,
    actualizarImagenes,
  };

  // Proporcionar el contexto a los componentes hijos
  return (
    <ImagenesContext.Provider value={contextValue}>
      {children}
    </ImagenesContext.Provider>
  );
};
