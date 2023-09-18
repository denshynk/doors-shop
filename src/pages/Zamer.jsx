import React from "react";

function Zamer() {
	return (
		<div className="favOrdEmpty">
			<div className="cartEmpty d-flex align-center justify-center flex-column flex">
				<img
					className="mb-20"
					width="auto"
					height="120px"
					src={process.env.PUBLIC_URL + "/img/emojiSad.png"}
					alt="Empty"
				/>
				<h1>Вибачте за тимчасові незручності</h1>
				<p className="opacity-6">
					Наразі наш сайт знаходиться на етапі раннього релізу, з найближчим
					оновленням ми це виправимо
				</p>
			</div>
		</div>
	);
}

export default Zamer;
