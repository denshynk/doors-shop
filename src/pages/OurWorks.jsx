import React, { useState } from "react";
import "./Collage.css"; // Файл стилей для модального окна

function Collage() {
  const context = require.context(
    "../../public/colage",
    false,
    /\.(jpg|jpeg|png)$/
  );
  const allImages = context.keys().map(context);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Отключаем прокрутку фона
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Включаем прокрутку фона
  };

  return (
    <div className="collage">
      {allImages.map((image, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + image.replace("./", "/")}
          alt={`Фото ${index + 1}`}
          onClick={() => openModal(image)}
        />
      ))}

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={process.env.PUBLIC_URL + selectedImage.replace("./", "/")}
              alt="Full size"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Collage;
