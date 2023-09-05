/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import axios from "axios";

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");
	const [favorites, setFovorites] = React.useState([]);

	const onChangeSerchInput = (event) => {
		setSearchValue(event.target.value);
	};

	React.useEffect(() => {
		axios
			.get("https://64a30178b45881cc0ae5fdb6.mockapi.io/Items")
			.then((res) => {
				setItems(res.data);
			});
		axios
			.get("https://64a30178b45881cc0ae5fdb6.mockapi.io/cart")
			.then((res) => {
				setCartItems(res.data);
			});
		axios
			.get("https://64a30178b45881cc0ae5fdb6.mockapi.io/favorites")
			.then((res) => {
				setFovorites(res.data);
			});
	}, []);

	const openBasket = () => {
			setCartOpened(true);
			document.body.style.overflow = "hidden"; // Запретить скролл body
		};

	const closeBasket = () => {
			setCartOpened(false);
			document.body.style.overflow = "auto"; // Включить скролл body
		};

	const onAddToCart = (product) => {
		axios.post("https://64a30178b45881cc0ae5fdb6.mockapi.io/cart", product);
		setCartItems((prev) => [...prev, product]);
	};

	const onRemoveItemCard = (id) => {
		axios.delete(`https://64a30178b45881cc0ae5fdb6.mockapi.io/cart/${id}`);
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	const onAddToFavorite = async (product) => {
		try {
			if (favorites.find((favObj) => favObj.id === product.id)) {
				axios.delete(
					`https://64a30178b45881cc0ae5fdb6.mockapi.io/favorites/${product.id}`
				);
			} else {
				const { data } = await axios.post(
					"https://64a30178b45881cc0ae5fdb6.mockapi.io/favorites",
					product
				);
				setFovorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert("Не удалось добавить в избранные"); 
		}
	};

	return (
		<div className="main">
			<Header
				value={searchValue}
				onDelete={() => setSearchValue("")}
				onChangeSerch={onChangeSerchInput}
				onClickBasket={() => openBasket(true)}
			/>
			{cartOpened && (
				<Drawer
					items={cartItems}
					onClose={() => closeBasket(false)}
					onRemove={onRemoveItemCard}
				/>
			)}

			<div className="main">
				<div className="wrapper">
					<Routes>
						<Route
							path="/"
							element={
								<Home
									items={items}
									searchValue={searchValue}
									setSearchValue={setSearchValue}
									onAddToCart={onAddToCart}
									onAddToFavorite={onAddToFavorite}
								/>
							}
						/>
						<Route
							path="/favorites"
							element={
								<Favorites
									items={favorites}
									onAddToFavorite={onAddToFavorite}
									onAddToCart={onAddToCart}
								/>
							}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
