import { useContext } from 'react';
import { ImagenesContext } from '../Context';
import './styles.css'

const FormCarousel = () => {
  const { imagenes, actualizarImagenes } = useContext(ImagenesContext);

  let numColumns = 1;
  if (imagenes.length >= 2 && imagenes.length <= 5) {
    numColumns = imagenes.length;
  } else if (imagenes.length > 5) {
    numColumns = 6; // Limitar a un máximo de 5 columnas
  }

  // Crear el estilo para distribuir equitativamente las columnas
  const gridStyle = {
    display: 'grid',
    gap: '1rem', // Espacio entre elementos del grid
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`, // Distribuir las columnas equitativamente
  };

  const agregarNuevaImagen = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado de envío del formulario
    const nuevaImagen = { url: '', titulo: '', descripcion: '' };
    const nuevasImagenes = [...imagenes, nuevaImagen];
    actualizarImagenes(nuevasImagenes);
  };

  const quitarImagen = (index) => {
    const nuevasImagenes = [...imagenes];
    nuevasImagenes.splice(index, 1); // Remover elemento en el índice dado
    actualizarImagenes(nuevasImagenes);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedImages = [...imagenes];
    updatedImages[index][name] = value;
    actualizarImagenes(updatedImages);
  };

  const handleSaveChanges = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  
    localStorage.setItem('carouselImages', JSON.stringify(imagenes));
    console.log('Cambios guardados en localStorage:', imagenes);
  
    window.alert('¡Cambios guardados exitosamente!'); // Mostrar alerta de éxito
  };
  return (
    <div style={gridStyle}>
      {imagenes.map((imagen, index) => (
        <div key={index} className="relative bg-white border-4 border-gray-500 rounded-lg drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-center text-lg font-bold text-gray-900 dark:text-white">Imagen {index + 1}</h1>
          <button className="absolute top-1 right-1 text-red-600" onClick={() => quitarImagen(index)}>
            X
          </button>
          <div className="p-4">
            <label className="block text-sm font-medium text-gray-900 dark:text-white">URL</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
              name="url"
              placeholder="Ingresa la URL de la imagen"
              value={imagen.url}
              onChange={(e) => handleInputChange(index, e)}
            />
            {imagen.url && (
              <img
                className="mt-4 mx-auto object-fill w-[13rem] h-[12rem]"
                src={imagen.url}
                alt={`Imagen ${index + 1}`}
              />
            )}
            <label className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">Título</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
              maxLength="20"
              name="titulo"
              placeholder="Ingresa título corto"
              value={imagen.titulo}
              onChange={(e) => handleInputChange(index, e)}
            />
            <label className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
            <textarea
              className="form-textarea resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              name="descripcion"
              maxLength="115"
              placeholder="Descripción no mayor a 115 caracteres"
              value={imagen.descripcion}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
        </div>
      ))}
      <div className="flex justify-evenly col-span-6 mt-4">
        {/* Botón para agregar nueva imagen */}
        <div className="col-span-2 mt-1">
          <button onClick={agregarNuevaImagen} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full">Agregar Imagen</button>
        </div>

        {/* Botón para guardar cambios */}
        <div className="col-span-2 mt-1">
          <button onClick={(e) => handleSaveChanges(e)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full">Guardar Cambios</button>
        </div>
      </div>
    </div>
  );
};

export default FormCarousel;
