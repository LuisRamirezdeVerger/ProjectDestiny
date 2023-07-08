import './Galeria.css';
import React, { useState } from "react";
import test from '../images/fotoPruebaWeb.jpg';


const Galeria = () => {
    
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        if (selectedImage === image) {
            setSelectedImage(null);
        } else {
            setSelectedImage(image)
        }
    }

    //const handleImageClick = (image) => {
    //    setSelectedImage((prevImage) => (prevImage === image ? null : image));
    //};

    const images = [

        {
          url:  test,
          title: "titulo A",
        },
        {
            url:  test,
            title: "titulo b",
          },
      
      ];

return(
    //
   <div className="galeria" onMouseLeave={() => setSelectedImage(null)}>
    
        {images.map((image,index) => (
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
                <img 
                src={selectedImage.url}
                alt={selectedImage.title} />
                <p>{selectedImage.title}</p>
            </div>
        )}
   </div>
    );
};

export default Galeria;