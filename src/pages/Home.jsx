import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import CardOutFullPage from "../components/CardOutFullPage";

function Home({ items, searchValue, onAddToCart, onAddToFavorite, isLoading }) {
	const [doorItems, setDoorItems] = useState([]);
	const [furnituraItems, setFurnituraItems] = useState([]);
	const [pogonagItems, setPogonagItems] = useState([]);

	useEffect(() => {
		const filterItems = () => {
			const filteredDoors = items
				.filter(
					(item) =>
						item.category === "door" &&
						item.title.toLowerCase().includes(searchValue.toLowerCase())
				)
				.sort(() => 0.5 - Math.random())
				.slice(0, 12);

			const filteredFurnitura = items
				.filter(
					(item) =>
						item.category === "furnitura" &&
						item.title.toLowerCase().includes(searchValue.toLowerCase())
				)
				.sort(() => 0.5 - Math.random())
				.slice(0, 12);

			const filteredPoganag = items
				.filter(
					(item) =>
						item.category === "pogonag" &&
						item.title.toLowerCase().includes(searchValue.toLowerCase())
				)
				.sort(() => 0.5 - Math.random())
				.slice(0, 12);

			setDoorItems(filteredDoors);
			setFurnituraItems(filteredFurnitura);
			setPogonagItems(filteredPoganag);
		};

		filterItems();
	}, [searchValue, items]);

	const renderDoorItems = () => {
		return doorItems.map((item, index) => (
			<Card
				key={index}
				onPlus={(product) => onAddToCart(product)}
				onFavorite={(product) => onAddToFavorite(product)}
				loading={isLoading}
				{...item}
			/>
		));
	};

	const renderFurnituraItems = () => {
		return furnituraItems.map((item, index) => (
			<CardOutFullPage
				key={index}
				onPlus={(product) => onAddToCart(product)}
				onFavorite={(product) => onAddToFavorite(product)}
				loading={isLoading}
				{...item}
			/>
		));
	};

	const renderPogonagItems = () => {
		return pogonagItems.map((item, index) => (
			<CardOutFullPage
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
			<div className="containerItem">{renderDoorItems()}</div>
			<h2>Дверна фурнітура</h2>
			<div className="containerItem">{renderFurnituraItems()}</div>
			<h2>Погонаж</h2>
			<div className="containerItem">{renderPogonagItems()}</div>
		</div>
	);
}

export default Home;
