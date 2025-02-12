import React, { useState } from 'react';
import './Play.css'
export default function Play() {
    // Estado para manejar si el botón ha sido clickeado o no
    const [isPlay, setIsPlay] = useState(false);

    // Función para manejar el clic
    const handleClick = (e) => {
        e.stopPropagation();
        setIsPlay(!isPlay); // Cambia el estado al opuesto
    };

    return (
        <button onClick={handleClick}>
            {isPlay ? (
                <img className='play-green' src="https://cdn-icons-png.flaticon.com/128/727/727240.png" alt="corazon verde" />
            ) : (
                <img className='play-black' src="https://cdn-icons-png.flaticon.com/128/727/727245.png" alt="play negro" />
            )}
        </button>
    );
}