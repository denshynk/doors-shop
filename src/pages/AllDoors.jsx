import React from "react";
import Card from "../components/Card";

function AllDoors({
	items,
	searchValue,
	onAddToCart,
	onAddToFavorite,
	isLoading,
}) {
	const renderItems = () => {
		const filteredItems = items.filter(
			(item) =>
				item.title.toLowerCase().includes(searchValue.toLowerCase()) &&
				item.category === "door"
		);

		return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
			<Card
				key={index}
				onPlus={(product) => onAddToCart(product)}
				onFavorite={(product) => onAddToFavorite(product)}
				loading={isLoading}
				{...item}
			/>
		));
	};

	return (
		<div>

			<div className="containerItem">{renderItems()}</div>
		</div>
	);
}

export default AllDoors;
