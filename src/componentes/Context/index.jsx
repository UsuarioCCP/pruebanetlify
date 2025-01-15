import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const ImagenesContext = createContext();

// Proveedor del contexto
export const ImagenesProvider = ({ children }) => {
  // Estado para almacenar las imágenes, inicializado con imágenes predeterminadas
  const [imagenes, setImagenes] = useState([
    { 
      url: "https://i.postimg.cc/kgBDFXGD/441533923-462431496158834-9023948063994655330-n.jpg", 
      titulo: "#todoenlaVUE", 
      descripcion: "Haz tu vida más fácil y regístrate en El Guro Emprendedor, el portal gratuito para emprendedores y microempresarios." 
    },
    { 
      url: "https://i.postimg.cc/0yQdb0tw/Whats-App-Image-2024-11-14-at-2-12-10-PM.jpg", 
      titulo: "Tenga en cuenta", 
      descripcion: "🚔👮‍♂️ El Gaula de la Policía te recuerda: ¡Cuelga y bloquea! No caigas en extorsión ⚠️. Reporta al ☎️ 165 gratis. ¡Protege tu seguridad del 👤🕵️!" 
    },
    { 
      url: "https://i.postimg.cc/y8t9b5FJ/442372258-7860661773955999-3864680411337824859-n.jpg", 
      titulo: "Buscanos en WhatsApp", 
      descripcion: "Conoce el nuevo canal de difusión que tenemos con toda la actualidad de la Camara de Comercio de Pamplona" 
    },
    {
      titulo: "#JuntosProgresamosMás",
      descripcion: "Renueva tu Registro Mercantil y empieza con toda el 2025",
      url: "https://i.postimg.cc/150ZtrLr/473428151-624428056625843-1483357311328560928-n.jpg",
    },
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
