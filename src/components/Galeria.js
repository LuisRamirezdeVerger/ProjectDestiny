import './Galeria.css'
import React, { useState } from "react";



const Galeria = () => {
    
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image)
    };

    const images = [

        {
          url:  'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.vegaradio.com%2Fmedia%2Fk2%2Fitems%2Fcache%2F1d11e5ebeed3c42540f69555bbe34fb8_XL.jpg&tbnid=IHCVPr4A9LH-_M&vet=12ahUKEwiUrK2Mu_X_AhWEnCcCHYZRC-cQMygKegUIARDUAQ..i&imgrefurl=https%3A%2F%2Fwww.vegaradio.com%2Fnoticias%2Fllega-el-buenos-aires-blues-festival&docid=c_UwjO2vSFnnjM&w=1366&h=572&itg=1&q=el%20blues%20del%20boss&ved=2ahUKEwiUrK2Mu_X_AhWEnCcCHYZRC-cQMygKegUIARDUAQ',
          title: "titulo A",
        },
      
      ];

return(
   <div className="galeria">
    
        {images.map((image,index) => (
            <img
                key={index}
                src={image.url}
                alt={image.title}
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
        )};
   </div>
);};

export default Galeria;