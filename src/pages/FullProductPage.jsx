import React from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context";

function FullProductPage({ onAddToFavorite, onAddToCart }) {
	const { id } = useParams();
	const { items } = React.useContext(AppContext);
	const selectedItem = items.find((item) => Number(item.id) === Number(id));
	if (!selectedItem) {
		return <div>Loading...</div>; // Можно показать какой-то прелоадер, если товар не найден
	}

	const { title, price, imageUrl, about } = selectedItem;

	return (
		<div>
			<h1>{title}</h1>
			<img
				src={"/" + imageUrl}
				alt={title}
			/>
			<p>Цена: {price} грн</p>
			<p>{about}</p>
		</div>
	);
}

export default FullProductPage;
