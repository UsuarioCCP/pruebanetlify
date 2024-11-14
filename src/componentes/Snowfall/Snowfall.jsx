// Snowfall.js
import React, { useEffect, useState } from 'react';
import './Snowfall.css';

const Snowfall = ({ snowflakeCount = 50, fallSpeed = 3 }) => {
  const [flakes, setFlakes] = useState([]);

  // Función para seleccionar un tamaño aleatorio (grande, mediano, pequeño)
  const getRandomSize = () => {
    const sizes = [
      `${Math.random() * 0.5 + 0.5}rem`, // Pequeño (1-2 rem)
      `${Math.random() * 0.5 + 1.5}rem`, // Mediano (2-4 rem)
      `${Math.random() * 1 + 2}rem`, // Grande (4-5 rem)
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  // Función para seleccionar un filtro de color navideño aleatoriamente
  const getRandomFilter = () => {
    const filters = [
      'hue-rotate(200deg) saturate(100) brightness(0.8)',  // Rojo
       // Verde
      'hue-rotate(230deg) saturate(150) brightness(1)',  // Amarillo
      'saturate(0) brightness(2.2)',                                 // Blanco
    ];
    return filters[Math.floor(Math.random() * filters.length)];
  };

  useEffect(() => {
    // Generar copos de nieve con posiciones, velocidades, tamaños y colores aleatorios
    const newFlakes = Array.from({ length: snowflakeCount }).map(() => ({
      left: Math.random() * 250, // Posición inicial horizontal aleatoria
      animationDuration: `${Math.random() * (fallSpeed + 2) + fallSpeed}s`,
      size: getRandomSize(), // Tamaño aleatorio
      filter: getRandomFilter(), // Asignar un filtro de color aleatorio
    }));
    setFlakes(newFlakes);
  }, [snowflakeCount, fallSpeed]);

  return (
    <div className="snowfall">
      {flakes.map((flake, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: flake.animationDuration,
            fontSize: flake.size, // Aplicar tamaño aleatorio
            filter: flake.filter, // Aplicar el filtro de color
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  );
};

export {Snowfall};