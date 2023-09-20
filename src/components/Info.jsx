import React from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
	const { closeBasket } = React.useContext(AppContext);
	return (
		<div className="cartEmpty d-flex align-center justify-center flex-column flex w100p p-0">
			<img
				className="mb-20"
				width="auto"
				height="120px"
				src={image}
				alt="Empty"
			/>
			<h2>{title}</h2>
			<p className="opacity-6">{description}</p>
			<button onClick={() => closeBasket()} className="redButton">
				<img src={process.env.PUBLIC_URL + "/img/slider.svg"} alt="Arrow" />
				Повернутися назад
			</button>
		</div>
	);
};

export default Info;
