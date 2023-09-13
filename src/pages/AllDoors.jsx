import React from "react";
import Card from "../components/Card";
import CardOutFullPage from "../components/CardOutFullPage";

function AllDoors({
	items,
	searchValue,
	onAddToCart,
	onAddToFavorite,
	isLoading,
}) {

	
	const renderItems = () => {
		return items
			.filter((item) => {
				const { title} = item || {};
				return (
					title ||
					title.toLowerCase().includes(searchValue.toLowerCase())
				);
			})
			.map((item, index) => {
				if (item.category === "furnitura" && 'paganag') {
					return (
						<CardOutFullPage
							key={index}
							onPlus={(product) => onAddToCart(product)}
							onFavorite={(product) => onAddToFavorite(product)}
							loading={isLoading}
							{...item}
						/>
					);
				} else {
					return (
						<Card
							key={index}
							onPlus={(product) => onAddToCart(product)}
							onFavorite={(product) => onAddToFavorite(product)}
							loading={isLoading}
							{...item}
						/>
					);
				}
			});
	};

	return (
		<div>
			<div className="containerItem">{renderItems()}</div>
		</div>
	);
}

export default AllDoors;
