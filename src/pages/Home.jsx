import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";


function Home({
	items,
	searchValue,
	onAddToCart,
	onAddToFavorite,
	isLoading,
	
}) {


	const renderItems = () => {
		const filtredItems = items.filter((item) =>
			item.title.toLowerCase().includes(searchValue)
		);

		return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
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
			<Banner/>
			<h2>
				{searchValue
					? `Поиск по запросу: "${searchValue}"`
					: "Популярні товари"}
			</h2>
			<div className="containerItem">{renderItems()}</div>
		</div>
	);
}

export default Home;
