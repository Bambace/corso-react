import React, { useState } from 'react';
import './Button.css'
export default function Button() {
    // Estado para manejar si el botón ha sido clickeado o no
    const [isLiked, setIsLiked] = useState(false);

    // Función para manejar el clic
    const handleClick = (e) => {
        e.stopPropagation();
        setIsLiked(!isLiked); // Cambia el estado al opuesto
    };

    return (
        <button onClick={handleClick}>
            {isLiked ? (
                <img className='button-green' src="https://cdn-icons-png.flaticon.com/128/14025/14025020.png" alt="corazon verde" />
            ) : (
                <img className='button-black' src="https://cdn-icons-png.flaticon.com/128/14399/14399051.png" alt="corazon negro" />
            )}
        </button>
    );
}