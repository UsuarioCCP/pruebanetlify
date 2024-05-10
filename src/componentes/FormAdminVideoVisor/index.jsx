import React, { useState } from "react";

const FormAdminVideoVisor = ({ cambioVideoUrl }) => {
    const [newVideoUrl, setNewVideoUrl] = useState("");
    const handleChangeVideo = () => {
        // Lógica para cambiar la URL del video
        // Puedes colocar la llamada a onChangeVideoUrl aquí si es necesario
        localStorage.setItem("videoUrl", newVideoUrl);
        cambioVideoUrl(newVideoUrl);
    
        // Cierra el modal después de realizar los cambios
        setIsAdminOpen(false);
      };

    return(
        <div className="grid grid-cols-4 gap-4">
            <div className="grid col-span-4">
                <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                  Cambio de enlace video
                </h1>
            </div>
            <div className="grid col-span-4 mt-4">
                <div className="flex justify-evenly">
                    <input
                    className="border-2 border-solid border-black-400 w-96"
                    type="text"
                    value={newVideoUrl}
                    placeholder="Ingresa la URL del nuevo video"
                    onChange={(e) => setNewVideoUrl(e.target.value)}
                  />
                  <button onClick={handleChangeVideo} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cambiar Video</button>
                </div>
              </div> 
        </div>
    )
}

export default FormAdminVideoVisor