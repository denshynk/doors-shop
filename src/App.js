/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import AppContext from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import FullProductPage from "./pages/FullProductPage";

import axios from "axios";
import Orders from "./pages/Orders";

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState('');
	const [favorites, setFavorites] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);


	const onChangeSerchInput = (event) => {
		setSearchValue(event.target.value);
	};

	 React.useEffect(() => {
			// Функция загрузки данных из Local Storage
			const loadDataFromLocalStorage = () => {
				const savedItems = localStorage.getItem("items");
				const savedCartItems = localStorage.getItem("cartItems");
				const savedFavorites = localStorage.getItem("favorites");

				if (savedItems) setItems(JSON.parse(savedItems));
				if (savedCartItems) setCartItems(JSON.parse(savedCartItems));
				if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
				setIsLoading(false);
			};

			// Если данные уже есть в Local Storage, загружаем их
			if (localStorage.getItem("items")) {
				loadDataFromLocalStorage();
			} else {
				// Иначе, загружаем данные из Mock API
				async function fetchData() {
					try {
						setIsLoading(true);
						const [itemsResponse] =
							await Promise.all([
								axios.get("https://64a30178b45881cc0ae5fdb6.mockapi.io/Items"),
							]);

						setItems(itemsResponse.data);
						setIsLoading(false);

						// Сохраняем данные в Local Storage
						localStorage.setItem("items", JSON.stringify(itemsResponse.data));
					} catch (error) {
						alert("Ошибка при запросе данных");
						console.error(error);
					}
				}

				fetchData();
			}
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
	try {
		const updatedCartItems = [...cartItems];
		const productIndex = updatedCartItems.findIndex(
			(item) => item.id === product.id
		);

		if (productIndex !== -1) {
			updatedCartItems.splice(productIndex, 1);
		} else {
			updatedCartItems.push(product);
		}

		setCartItems(updatedCartItems);
		localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
	} catch (error) {
		alert("ошибка при добавлении в корзину");
		console.error(error);
	}
};
	




const onRemoveItemCard = (id) => {
	try {
		const updatedCartItems = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedCartItems);
		localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
	} catch (error) {
		alert("Ошибка удаления из корзины");
		console.error(error);
	}
};

const onAddToFavorite = (product) => {
	try {
		const updatedFavorites = [...favorites];

		const existingFavoriteIndex = updatedFavorites.findIndex(
			(favObj) => favObj.title === product.title
		);

		if (existingFavoriteIndex !== -1) {
			updatedFavorites.splice(existingFavoriteIndex, 1);
		} else {
			updatedFavorites.push(product);
		}

		setFavorites(updatedFavorites);
		localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
	} catch (error) {
		alert("Не удалось добавить в избранные");
		console.error(error);
	}
};


	const isItemAdded = (id) => {
		return cartItems.some((product) => Number(product.parentId) === Number(id));
	};


	


	return (
		<AppContext.Provider
			value={{
				items,
				cartItems,
				favorites,
				isItemAdded,
				onAddToFavorite,
				setCartOpened,
				closeBasket,
				setCartItems,
			}}
		>
			<div className="main">
				<Header
					value={searchValue}
					onDelete={() => setSearchValue("")}
					onChangeSerch={onChangeSerchInput}
					onClickBasket={() => openBasket(true)}
				/>

				<Drawer
					items={cartItems}
					onClose={() => closeBasket(false)}
					onRemove={onRemoveItemCard}
					opened={cartOpened}
				/>

				<div className="main">
					<div className="wrapper">
						<Routes>
							<Route
								path="/"
								element={
									<Home
										items={items}
										cartItems={cartItems}
										searchValue={searchValue}
										setSearchValue={setSearchValue}
										onAddToCart={onAddToCart}
										onAddToFavorite={onAddToFavorite}
										isLoading={isLoading}
									/>
								}
							/>
							<Route
								path="favorites"
								element={
									<Favorites
										onAddToFavorite={onAddToFavorite}
										onAddToCart={onAddToCart}
									/>
								}
							/>
							<Route
								path="orders"
								element={
									<Orders
										onAddToFavorite={onAddToFavorite}
										onAddToCart={onAddToCart}
									/>
								}
							/>
							<Route
								path="product/:category/:id"
								element={
									<FullProductPage

										onAddToFavorite={onAddToFavorite}
										onAddToCart={onAddToCart}
										
									/>
								}
							/>
						</Routes>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
