import "./Galeria.css";
import React, { useState } from "react";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.png";
import seven from "../images/7.png";
import eight from "../images/8.png";
import nine from "../images/9.png";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  //const handleImageClick = (image) => {
  //    setSelectedImage((prevImage) => (prevImage === image ? null : image));
  //};

  const images = [
    {
      url: one,
      title: "Espacio amplio y luminoso",
    },
    {
      url: two,
      title: "Decoración varia.",
    },
    // {
    //   url: three,
    //   title: "Entretenimiento para todos los públicos",
    // },
    {
      url: four,
      title: "Espacio de exposición de contenido/ambigur",
    },
    {
      url: five,
      title: "Espacio para diferentes eventos",
    },
    {
      url: six,
      title: "Decoración",
    },
    {
      url: seven,
      title: "Buena ambientación e iluminación",
    },
    {
      url: eight,
      title: "También tenemos pantallas",
    },
    {
      url: nine,
      title: "Disfruta!",
    },
  ];

  return (
    <div className="background">
      <div className="galeria" onMouseLeave={() => setSelectedImage(null)}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.title}
            className={`galeria-image ${
              selectedImage === image ? "galeria-image-selected" : ""
            }`}
            onClick={() => handleImageClick(image)}
          />
        ))}

        {selectedImage && (
          <div className="imagen-seleccionada">
            <img src={selectedImage.url} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galeria;
