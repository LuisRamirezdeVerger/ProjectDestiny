import './Galeria.css';
import React, { useState } from "react";
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import seven from '../images/7.png';
import eight from '../images/8.png';
import nine from '../images/9.png';


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
          url:  one,
          title: "titulo A",
        },
        {
            url:  two,
            title: "titulo b",
        },
        {
            url:  three,
            title: "titulo b",
        },
        {
            url:  four,
            title: "titulo b",
        },
        {
            url:  five,
            title: "titulo b",
        },
        {
            url:  six,
            title: "titulo b",
        },
        {
            url:  seven,
            title: "titulo b",
        },
        {
            url:  eight,
            title: "titulo b",
        },
        {
            url:  nine,
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