import React, { useEffect } from "react";
import './styles.css'

function VideoVisor({ videoUrl }) {
  useEffect(() => {
    const handlePlayerStateChange = (event) => {
      if (event.data === 0) {
        // Agrega el parámetro de bucle cuando el video finaliza
        event.target.src += '&loop=1';
      }
    };

    // Agrega el event listener para detectar el cambio de estado del reproductor
    const player = document.getElementById('videoPlayer');
    player.addEventListener('onStateChange', handlePlayerStateChange);

    return () => {
      // Elimina el event listener cuando el componente se desmonta
      player.removeEventListener('onStateChange', handlePlayerStateChange);
    };
  }, [videoUrl]);

  return (
    <div className="w-full" id="visor">
      <iframe
        id="videoPlayer"
        className="relative h-full w-full"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoVisor;