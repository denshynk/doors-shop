/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import AppContext from "./context";

import Home from "./pages/Home";
import AllDoors from "./pages/AllDoors";
import Favorites from "./pages/Favorites";
import FullProductPage from "./pages/FullProductPage";
import OurWorks from "./pages/OurWorks";
import Zamer from "./pages/Zamer";

import axios from "axios";
import Orders from "./pages/Orders";


const apiUrl = process.env.REACT_APP_API_URL;

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");
	const [favorites, setFavorites] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [itemsGlas, setItemsGlas] = React.useState([]);
	const [itemsFrosted, setItemsFrosted] = React.useState([]);
	const [itemsFurnitura, setItemsFurnitura] = React.useState([]);
	const [itemsDoorhandel, setItemsDoorhandel] = React.useState([]);
	const [itemsLatches, setItemslatches] = React.useState([]);
	const [itemsLocks, setItemsLocks] = React.useState([]);
	const [itemsPogonag, setItemsPogonag] = React.useState([]);
	const [itemsDobor, setItemsDobor] = React.useState([]);
	const [itemsLyshtva, setItemsLyshtva] = React.useState([]);
	const [itemsKorob, setItemsKorob] = React.useState([]);
	const [itemsDoors, setItemsDoors] = React.useState([]);
	const [itemsPetli, setItemsPetli] = React.useState([]);

	const onChangeSerchInput = (event) => {
		setSearchValue(event.target.value);
	};

	React.useEffect(() => {
		// Функция загрузки данных из Local Storage
		const loadDataFromLocalStorage = () => {
			const savedCartItems = localStorage.getItem("cartItems");
			const savedFavorites = localStorage.getItem("favorites");

			if (savedCartItems) setCartItems(JSON.parse(savedCartItems));
			if (savedFavorites) setFavorites(JSON.parse(savedFavorites));

			setIsLoading(false);
		};
		loadDataFromLocalStorage();

		// Если данные уже есть в Local Storage, загружаем их
		async function fetchData() {
			try {
				setIsLoading(true);
				const [itemsResponse] = await Promise.all([
					axios.get(`${apiUrl}/items`),
				]);

				const allItems = itemsResponse.data;

				const doors = allItems.filter((item) => item.category === "door");

				const withGlassItems = allItems.filter(
					(item) => item.subcategory === "with glass"
				);
				const frostedItems = allItems.filter(
					(item) => item.subcategory === "frosted"
				);
				const petli = allItems.filter((item) => item.subcategory === "petli");

				const furnitura = allItems.filter(
					(item) => item.category === "furnitura"
				);
				const doorhandle = allItems.filter(
					(item) => item.subcategory === "doorhandle"
				);
				const latches = allItems.filter(
					(item) => item.subcategory === "latches"
				);
				const locks = allItems.filter((item) => item.subcategory === "locks");

				const pogonag = allItems.filter((item) => item.category === "pogonag");
				const dobor = allItems.filter((item) => item.subcategory === "dobor");
				const lyshtva = allItems.filter(
					(item) => item.subcategory === "lyshtva"
				);
				const korob = allItems.filter((item) => item.subcategory === "korob");

				setItemsPetli(petli);
				setItemsDoors(doors);
				setItemsPogonag(pogonag);
				setItemsDobor(dobor);
				setItemsLyshtva(lyshtva);
				setItemsKorob(korob);
				setItemsLocks(locks);
				setItemslatches(latches);
				setItemsDoorhandel(doorhandle);
				setItemsFurnitura(furnitura);
				setItemsGlas(withGlassItems);
				setItemsFrosted(frostedItems);
				setItems(itemsResponse.data);
				setIsLoading(false);

				// Сохраняем items в localStorage
				localStorage.setItem("items", JSON.stringify(itemsResponse.data));
			} catch (error) {
				alert("Помилка при запиті даних");
				console.error(error);
			}
		}

		fetchData();
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
			updatedCartItems.push(product);
			setCartItems(updatedCartItems);
			localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
		} catch (error) {
			alert("Помилка при додаванні до кошика");
			console.error(error);
		}
	};

	const onRemoveItemCard = (dinamicID) => {
		try {
			const updatedCartItems = cartItems.filter(
				(item) => item.dinamicID !== dinamicID
			);
			setCartItems(updatedCartItems);
			localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
		} catch (error) {
			alert("Помилка видалення з кошика");
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
			alert("Неможливо додати до обраних");
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
					onRemove={(dinamicID) => onRemoveItemCard(dinamicID)}
					opened={cartOpened}
				/>

				<div className="main1">
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
								path="/product/:category/:id"
								element={
									<FullProductPage
										items={items}
										cartItems={cartItems}
										onPlus={(product) => onAddToCart(product)}
										onAddToFavorite={onAddToFavorite}
										onAddToCart={onAddToCart}
										isLoading={isLoading}
									/>
								}
							/>
							<Route
								path="doors"
								element={
									<AllDoors
										title={"Всі двері"}
										all={items}
										items={itemsDoors}
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
								path="frosted"
								element={
									<AllDoors
										title={"З фрезеруванням"}
										items={itemsFrosted}
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
								path="withglass"
								element={
									<AllDoors
										title={"Зі склом"}
										items={itemsGlas}
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
								path="furnitura"
								element={
									<AllDoors
										title={"Вся фурнітура"}
										items={itemsFurnitura}
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
								path="doorhandle"
								element={
									<AllDoors
										title={"Дверні ручки"}
										items={itemsDoorhandel}
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
								path="latches"
								element={
									<AllDoors
										title={"Замикачі"}
										items={itemsLatches}
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
								path="locks"
								element={
									<AllDoors
										title={"Замки"}
										items={itemsLocks}
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
								path="dobor"
								element={
									<AllDoors
										title={"Добірна дошка"}
										items={itemsDobor}
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
								path="korob"
								element={
									<AllDoors
										title={"Коробка"}
										items={itemsKorob}
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
								path="lyshtva"
								element={
									<AllDoors
										title={"Лиштва"}
										items={itemsLyshtva}
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
								path="pogonag"
								element={
									<AllDoors
										title={"Весь пагонаж"}
										items={itemsPogonag}
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
								path="petli"
								element={
									<AllDoors
										title={"Петлі"}
										items={itemsPetli}
										cartItems={cartItems}
										searchValue={searchValue}
										setSearchValue={setSearchValue}
										onAddToCart={onAddToCart}
										onAddToFavorite={onAddToFavorite}
										isLoading={isLoading}
									/>
								}
							/>

							<Route path="zamer" element={<Zamer />} />

							<Route path="ourworks" element={<OurWorks items={items} />} />
						</Routes> 
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
