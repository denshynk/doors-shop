import React, { useState } from "react";



function Collage() {
	const context = require.context(
		"../../public/colage",
		false,
		/\.(jpg|jpeg|png)$/
	);
	const allImages = context.keys().map(context);

	const [loadedImages, setLoadedImages] = useState(12);

	const loadMoreImages = () => {
		setLoadedImages((prev) => prev + 8);
	};

	const handleImageLoad = () => {
		// Эта функция вызывается при полной загрузке каждого изображения
		// Мы не делаем ничего в этом примере, но вы можете добавить сюда
		// логику, которая сработает после полной загрузки изображения.
	};

	return (
		<div className="collage">
			{allImages.slice(0, loadedImages).map((image, index) => {
				const randomMaxWidth = Math.floor(Math.random() * (25 - 21) + 20);
				return (
					<img
						key={index}
						src={process.env.PUBLIC_URL + image.replace("./", "/")}
						alt={`Фото ${index + 1}`}
						style={{ maxWidth: `${randomMaxWidth}%`, display: "none" }}
						onLoad={handleImageLoad}
						ref={(el) => {
							el && (el.style.display = "block");
						}} // Показываем изображение после полной загрузки
					/>
				);
			})}
			{loadedImages < allImages.length && (
				<button className="redButton" onClick={loadMoreImages}>
					Завантажити ще
				</button>
			)}
		</div>
	);
}

export default Collage;
