import React from "react";
import { useParams } from "react-router-dom";
import ProductConfigComponent from "../components/ConfigDoors";
import Card from "../components/Card";
import CardOutFullPage from "../components/CardOutFullPage";

function FullProductPage({
	items,
	onPlus,
	cartItems,
	onAddToCart,
	onAddToFavorite,
	isLoading,
}) {
	const { category, id } = useParams();
	const [selectedOptionsCost, setSelectedOptionsCost] = React.useState(0);
	const [doorItems, setDoorItems] = React.useState([]);
	const [furnituraItems, setFurnituraItems] = React.useState([]);
	const [pogonagItems, setPogonagItems] = React.useState([]);
	const [selectedOptions, setSelectedOptions] = React.useState({
		selectedSize: null,
		selectedBox: null,
		selectedFrame: null,
		selectedBoard: null,
	});
	const onClickPlus = () => {
		const dinamicID = cartItems.length > 0 ? cartItems.length + 1 : 1;
		onPlus({
			id,
			title,
			dinamicID,
			totalPrice,
			category,
			selectedOptions,
			imageUrl,
			quantity,
		});
	};

	const filteredItems = items.filter((item) => item.category === category);
	let selectedItem;
	try {
		selectedItem = filteredItems.find((item) => Number(item.id) === Number(id));
	} catch (error) {
		console.error("Error while finding selected item:", error);
	}

	const [quantity, setQuantity] = React.useState(1);
	const [totalPrice, setTotalPrice] = React.useState(0);

	React.useEffect(() => {
		if (selectedItem && selectedItem.category === "door") {
			setTotalPrice(Number(selectedOptionsCost) * quantity);
		} else {
			setTotalPrice(selectedItem?.price * quantity);
		}
		const filterItems = () => {
			const filteredDoors = items
				.filter((item) => item.category === "door")
				.sort(() => 0.5 - Math.random())
				.slice(0, 8);

			const filteredFurnitura = items
				.filter((item) => item.category === "furnitura")
				.sort(() => 0.5 - Math.random())
				.slice(0, 4);

			const filteredPoganag = items
				.filter((item) => item.category === "pogonag")
				.sort(() => 0.5 - Math.random())
				.slice(0, 4);

			setDoorItems(filteredDoors);
			setFurnituraItems(filteredFurnitura);
			setPogonagItems(filteredPoganag);
		};

		filterItems();
	}, [selectedItem, selectedOptionsCost, quantity, totalPrice, items]);

	console.log(doorItems);

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

	const handleTotalPriceChange = (newTotalPrice) => {
		setTotalPrice(newTotalPrice);
	};

	const handleQuantityChange = (newQuantity) => {
		try {
			if (newQuantity < 1) {
				newQuantity = 1;
			}
			setQuantity(newQuantity);
			setTotalPrice(Number(selectedItem?.price) * newQuantity || 1);
		} catch (error) {
			console.error("Error while handling quantity change:", error);
		}
	};

	if (!selectedItem) {
		return <div>Loading...</div>;
	}

	const { title, imageUrl, about } = selectedItem;

	if (category === "door") {
		return (
			<div className="FullOrderPages">
				<div>
					<div className="orderPage justify-around">
						<div className="conttainerdoors mt">
							<img
								className=""
								width={290}
								height={620}
								src={"/" + imageUrl}
								alt={title}
							/>
						</div>
						<div className="borderFullPage p-20">
							<div>
								<h1 className="fullpagetitle">Міжкімнатні двері {title}</h1>
								<h4 className="model">Модел:{title}</h4>
								<ProductConfigComponent
									selectedItem={selectedItem}
									onTotalPriceChange={handleTotalPriceChange}
									setSelectedOptions={setSelectedOptions}
									setSelectedOptionsCost={setSelectedOptionsCost}
								/>
							</div>
						</div>
						<div className="totalprice">
							<p className="totalPRICE">Загальна ЦІНА: {totalPrice} грн</p>

							<div className="quantity-control">
								<div className="border-quantity-control">
									<button onClick={() => handleQuantityChange(quantity - 1)}>
										<div className="buttonQuantity">-</div>
									</button>
									<input
										type="number"
										value={quantity}
										onChange={(e) =>
											handleQuantityChange(Number(e.target.value))
										}
									/>
									<button
										onClick={() => handleQuantityChange(quantity + Number(1))}
									>
										<div className="buttonQuantity">+</div>
									</button>
								</div>
							</div>

							<div className="d-flex justify-center">
								<button className="quantity-button" onClick={onClickPlus}>
									<div className="addtoCart">Додати в кошик</div>
								</button>
							</div>
							<div className="addH2">
								<div className="delivery">
									<h1>Доставка</h1>
									<ul>
										<li>Київ - від 500 грн</li>
										<li>Доставка по Україні (Нова Пошта)</li>
										<li>Самовивіз зі складу</li>
									</ul>
								</div>

								<div className="payment">
									<h1>Оплата</h1>
									<ul>
										<li>Готівкою</li>
										<li>Visa, MasterCard або Приват24</li>
										<li>Безготівкова</li>
									</ul>
								</div>

								<div className="installation">
									<h1>Встановлення</h1>
									<li>Від 1500 грн (Київ і область)</li>
								</div>
							</div>
						</div>
					</div>
					<h1 className="p-20 mb-5">Про товар</h1>
					<p className="pb-20 pl-20 pl-20 mt-5">{about}</p>
					<h1 className="pl-20 pr-20 pt-20 mb-5 pb-5">Палітра кольорів</h1>
					<p className=" RALtext">
						Саме для Вас ми пофарбуємо двері в будь який колір з палітри RAL
					</p>
					<img
						className="RAL"
						src={process.env.PUBLIC_URL + "/img/RAL.png"}
						alt="ral"
					/>
					<h1 className="pl-20 pr-20 pt-20 mb-5 pb-5">Разом з цим купують</h1>
					<div className="containerItem">{renderFurnituraItems()}</div>
					<div className="containerItem">{renderPogonagItems()}</div>
				</div>
			</div>
		);
	}
	return (
		<div className="FullOrderPages">
			<div>
				<div className="orderPage justify-around ">
					<div>
						<h1 className="fullpagetitle">{title}</h1>
						<h4 className="model">Модел:{title}</h4>
						<div className="conttainer">
							<img
								className=""
								width={620}
								height={620}
								src={"/" + imageUrl}
								alt={title}
							/>
						</div>
					</div>

					<div className="totalprice">
						<p className="totalPRICE">Загальн ЦІНА: {totalPrice} грн</p>

						<div className="quantity-control">
							<div className="border-quantity-control">
								<button onClick={() => handleQuantityChange(quantity - 1)}>
									<div className="buttonQuantity">-</div>
								</button>
								<input
									type="number"
									value={quantity}
									onChange={(e) => handleQuantityChange(Number(e.target.value))}
								/>
								<button
									onClick={() => handleQuantityChange(quantity + Number(1))}
								>
									<div className="buttonQuantity">+</div>
								</button>
							</div>
						</div>

						<div className="d-flex justify-center">
							<button className="quantity-button" onClick={onClickPlus}>
								<div className="addtoCart">Додати в кошик</div>
							</button>
						</div>
						<div className="addH2">
							<div className="delivery">
								<h1>Доставка</h1>
								<ul>
									<li>Київ - від 500 грн</li>
									<li>Доставка по Україні (Нова Пошта)</li>
									<li>Самовивіз зі складу</li>
								</ul>
							</div>

							<div className="payment">
								<h1>Оплата</h1>
								<ul>
									<li>Готівкою</li>
									<li>Visa, MasterCard або Приват24</li>
									<li>Безготівкова</li>
								</ul>
							</div>

							<div className="installation">
								<h1>Встановлення</h1>
								<li>Від 1500 грн (Київ і область)</li>
							</div>
						</div>
					</div>
				</div>
				<h1 className="p-20 mb-5">Про товар</h1>
				<p className="pb-20 pl-20 pl-20 mt-5">{about}</p>
				<h1 className="pl-20 pr-20 pt-20 mb-5 pb-5">Разом з цим купують</h1>
				<div className="containerItem">{renderDoorItems()}</div>
			</div>
		</div>
	);
}

export default FullProductPage;
