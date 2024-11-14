// Snowfall.js
import React, { useEffect, useState } from "react";
import "./Snowfall.css";

const Snowfall = ({ snowflakeCount = 50, fallSpeed = 3 }) => {
  const [flakes, setFlakes] = useState([]);

  // Función para seleccionar un tamaño aleatorio (grande, mediano, pequeño)
  const getRandomSize = () => {
    const sizes = [
      `${Math.random() * 0.5 + 0.5}rem`, // Pequeño (0.5-1 rem)
      `${Math.random() * 0.5 + 1.5}rem`, // Mediano (1.5-2 rem)
      `${Math.random() * 1 + 2}rem`,     // Grande (2-3 rem)
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  // Función para seleccionar una clase de color aleatoria
  const getRandomColorClass = () => {
    const colors = ["red-snowflake", "green-snowflake", "yellow-snowflake", "white-snowflake"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    // Generar copos de nieve con posiciones, velocidades, tamaños y colores aleatorios
    const newFlakes = Array.from({ length: snowflakeCount }).map(() => ({
      left: Math.random() * 200, // Posición inicial horizontal aleatoria
      animationDuration: `${Math.random() * (fallSpeed + 2) + fallSpeed}s`,
      size: getRandomSize(),     // Tamaño aleatorio
      colorClass: getRandomColorClass(), // Clase de color aleatoria
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
          }}
        >
          <span
            className={`material-symbols-outlined ${flake.colorClass}`}
            style={{
              fontSize: flake.size, // Aplicar tamaño directamente al span
            }}
          >
            ac_unit
          </span>
        </div>
      ))}
    </div>
  );
};

export { Snowfall };