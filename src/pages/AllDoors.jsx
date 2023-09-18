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

	if (items.length === 0) {
		return (
			<div className="favOrdEmpty1">
				<div className="cartEmpty d-flex align-center justify-center flex-column flex">
					<img
						className="mb-20"
						width="40%"
						height="40%"
						src={process.env.PUBLIC_URL + "/img/database.svg"}
						alt="Empty"
					/>
					<h1>Вибачте за тимчасові незручності</h1>
					<p className="opacity-6">
						Ми намагатимося поповнити список нашої бази данних найбличим часов
					</p>
				</div>
			</div>
		);
	}

	
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
				if (item.category === "door") {
					return (
						<Card
							key={index}
							onPlus={(product) => onAddToCart(product)}
							onFavorite={(product) => onAddToFavorite(product)}
							loading={isLoading}
							{...item}
						/>
					);
				} else {
					return (
						
						<CardOutFullPage
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
