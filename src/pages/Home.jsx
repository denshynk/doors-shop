import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";

function Home({ items, searchValue, onAddToCart, onAddToFavorite, isLoading }) {
	const [filteredItems, setFilteredItems] = useState([]);

	useEffect(() => {
		// Функция для фильтрации и сохранения результатов в состоянии
		const filterItems = () => {
			const filtered = searchValue
				? items.filter((item) =>
						item.title.toLowerCase().includes(searchValue.toLowerCase())
				  )
				: getRandomItems();
			setFilteredItems(filtered);
		};

		filterItems(); // Инициализация при загрузке
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchValue, items]);

	const getRandomItems = () => {
		const shuffledItems = items.sort(() => 0.5 - Math.random());
		return shuffledItems.slice(0, 8);
	};

	const renderItems = () => {
		return filteredItems.map((item, index) => (
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
			<Banner />
			<h2>
				{searchValue
					? `Пошук за запитом: "${searchValue}"`
					: "Популярні товари"}
			</h2>
			<div className="containerItem">{renderItems()}</div>
		</div>
	);
}

export default Home;
