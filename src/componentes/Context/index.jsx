import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const ImagenesContext = createContext();

// Proveedor del contexto
export const ImagenesProvider = ({ children }) => {
  // Estado para almacenar las imágenes, inicializado con imágenes predeterminadas
  const [imagenes, setImagenes] = useState([
    { url: "https://i.postimg.cc/kgBDFXGD/441533923-462431496158834-9023948063994655330-n.jpg", titulo: "#todoenlaVUE", descripcion: "Haz tu vida más fácil y regístrate en El Guro Emprendedor, el portal gratuito para emprendedores y microempresarios." },
    { url: "https://i.postimg.cc/76myW0Q4/438302983-461813379553979-4329611901029718256-n.jpg", titulo: "Feliz Aniversario", descripcion: "Gracias por apoyar a todos los empresarios y emprendedores del sector de la artesanía y a los artistitas de nuestra región en #ElPaisDeLaBelleza " },
    { url: "https://i.postimg.cc/QtwVy2zh/438301725-7824147357607441-918737923866674437-n.jpg", titulo: "VUE Pamplona", descripcion: "¡Transforma tus sueños empresariales en realidad en tiempo récord con la VUE! 🚀✨¡Tan fácil como suena! 🕒 Ingresa a www.vue.gov.co " },
    { url: "https://i.postimg.cc/y8t9b5FJ/442372258-7860661773955999-3864680411337824859-n.jpg", titulo: "Buscanos en WhatsApp", descripcion: "Conoce el nuevo canal de difusión que tenemos con toda la actualidad de la Camara de Comercio de Pamplona" },
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
