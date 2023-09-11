import React, { useState, useEffect } from "react";

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar automáticamente de imagen cada 3 segundos
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      // Limpiar el intervalo cuando el componente se desmonta
      clearInterval(interval);
    };
  }, [images]);

  const handleImageChange = (index) => {
    // Cambiar la imagen manualmente al hacer clic en un punto de navegación
    setCurrentImageIndex(index);
  };

  return (
    <div className="slideshow">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />

      <div className="navigation-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? "active" : ""}
            onClick={() => handleImageChange(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
