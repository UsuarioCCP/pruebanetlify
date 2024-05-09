import React, { useState, useEffect} from "react";
import './styles.css'

function Reloj() {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    const dateString = currentTime.toLocaleDateString(undefined, options);
    const monthString = new Intl.DateTimeFormat(undefined, { month: 'long' }).format(currentTime);
  
    return (
      <div className='clock'>
        <div className="time">{timeString}</div>
        <div className="date">{dateString}</div>
      </div>
    );
  }
  
  export default Reloj