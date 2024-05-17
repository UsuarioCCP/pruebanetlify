import React, { useState, useEffect } from 'react';

function FormBaner() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [
      "Agendate con la Cámara de Comercio y consulta los beneficios de estar formalizado en www.camarapamplona.org.co",
      "Recuerda nuestro horario de atención Lunes a Viernes de 8:00am - 12:00pm y de 2:00pm - 6:00pm",
      "Nuestros asesores estan aquí para brindarte la información que necesitas",
      "La generación de oportunidades de emprendimiento, fortalecimiento y aceleración empresarial de la región, son nuestro compromiso",
      "Siguenos en nuestras redes sociales Facebook, Instagram y Twitter como # Camara de Comercio de Pamplona",
      "Prestador de Servicios Turisticios-Alojamientos, no olvides alimentar día a día tu Tarjeta de Registro de Alojamiento",
      "Recuerda nuestros canales de contacto: ccpamplona@camarapamplona.org.co, teléfonos (60)75680993 - 75684696 - 75682047 y WhatsApp: 333 033 3569",
      "Recuerda que el término de ley para atender tus tramites es de QUINCE (15) DÍAS HÁBILES",
      "No olvides calificar el servicio prestado por nuestro personal, pregunta con nuestras Asesoras como hacerlo",
      "Además de tu registro en Cámara de Comercio, adquieres responsabilidades tributarias en la DIAN y en la Alcaldía Municipal (Impuesto de Industria y Comercio).",
      "Si tienes actividades de alto impacto, debes gestionar los permisos necesarios ante las autoridades locales (Planeación municipal, sayco y acinpro, bomberos, entre otros).",
      "Recuerda que puedes realizar tu matrícula mercantil mediante la Ventanilla Unica Empresarial VUE, aplica solo para Pamplona."
    ];
    setMessages(storedMessages);
  }, []);

  const agregarNuevoMensaje = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado de envío del formulario
    const newMessages = [...messages, "Nuevo mensaje"];
    setMessages(newMessages);
  };

  const quitarMensaje = (index, event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado de envío del formulario
    const newMessages = [...messages];
    newMessages.splice(index, 1); // Remover elemento en el índice dado
    setMessages(newMessages);
  };

  const handleChange = (index, event) => {
    const newMessages = [...messages];
    newMessages[index] = event.target.value;
    setMessages(newMessages);
  };

  const handleSave = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado de envío del formulario
    localStorage.setItem('messages', JSON.stringify(messages));
    alert('Mensajes guardados!');
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {messages.map((message, index) => (
        <div key={index} className="flex flex-col mb-4">
          <div className="flex justify-between">
            <label className="mb-2 font-semibold text-gray-700">Mensaje {index + 1}</label>
            <button className="text-red-600" onClick={(event) => quitarMensaje(index, event)}>
              X
            </button>
          </div>
          <textarea
            minLength="15"
            maxLength="145"
            value={message}
            onChange={(e) => handleChange(index, e)}
            rows="2"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ width: '100%' }}
          />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <button 
          onClick={agregarNuevoMensaje} 
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
        >
          Agregar Mensaje
        </button>
        <button 
          onClick={handleSave} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Guardar Mensajes
        </button>
      </div>
    </div>
  );
}

export default FormBaner;
