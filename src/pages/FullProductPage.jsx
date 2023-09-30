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

	const filteredItems = items.filter((item) => item.category === category);
	let selectedItem;
	try {
		selectedItem = filteredItems.find((item) => Number(item.id) === Number(id));
	} catch (error) {
		console.error("Error while finding selected item:", error);
	}
	const [selectedOptionsCost, setSelectedOptionsCost] = React.useState(0);
	const [doorItems, setDoorItems] = React.useState([]);
	const [furnituraItems, setFurnituraItems] = React.useState([]);
	const [mainImage, setMainImage] = React.useState(
		selectedItem?.imageUrl || ""
	);

	React.useEffect(() => {
		if (selectedItem) {
			setMainImage(selectedItem.imageUrl);
		}
	}, [selectedItem]);

	const handleImageChange = (color) => {
		if (selectedItem) {
			if (color === "white") {
				setMainImage(selectedItem.imageUrl);
			} else if (selectedItem.colorImage) {
				const newImage = selectedItem.colorImage.find((img) =>
					img.includes(color)
				);
				if (newImage) {
					setMainImage(newImage);
				}
			} else {
				console.error("selectedItem or colorImage is undefined");
			}
		}
	};

	const renderColorButtons = () => {
		const colors = [
			"izum",
			"black",
			"red",
			"brown",
			"cream",
			"grey",
			"milk",
			"navi",
			"night",
			"semigrey",
			"white",
		];

		return colors.map((color, index) => {
			const colorName = `${color}`;
			let colorButtonStyle;

			if (color === "white") {
				colorButtonStyle = {
					backgroundColor: `url(/img/doors/door${id}.png)`,
					backgroundSize: "cover",
					borderRadius: "50%",
					width: "25px",
					height: "25px",
					margin: "5px",
					cursor: "pointer",
				};
			} else {
				colorButtonStyle = {
					backgroundColor: `url(/img/doors/door1.${color}.png)`,
					backgroundSize: "cover",
					borderRadius: "50%",
					width: "25px",
					height: "25px",
					margin: "5px",
					cursor: "pointer",
				};
			}

			const buttonClass = `color-button ${color}`; // Додали клас для кнопки

			return (
				<button
					key={index}
					style={colorButtonStyle}
					className={buttonClass} // Додали клас до кнопки
					onClick={() => handleImageChange(color)}
					title={colorName}
				></button>
			);
		});
	};

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
			totalPriceOne,
		});
	};

	const [quantity, setQuantity] = React.useState(1);
	const [totalPrice, setTotalPrice] = React.useState(0);
	const totalPriceOne = totalPrice / quantity;



	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

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
				.filter((item) => item.subcategory === "doorhandle")
				.sort(() => 0.5 - Math.random())
				.slice(0, 4);

			setDoorItems(filteredDoors);
			setFurnituraItems(filteredFurnitura);
		};

		filterItems();
	}, [selectedItem, selectedOptionsCost, quantity, totalPrice, items]);

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
								src={"/" + mainImage}
								alt={title}
							/>
							<div className="color-buttons mt-15 " style={{ width: "290px" }}>
								{renderColorButtons()}
							</div>
						</div>

						<div className="borderFullPage p-20">
							<div>
								<h1 className="fullpagetitle">Міжкімнатні двері {title}</h1>
							
								<div className="colorImages"></div>
								<h4 className="fullpagetitle">Колір:</h4>

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
								<div>
									<h1 className="delivery">Доставка</h1>
									<ul>
										<li>Київ - від 500 грн</li>
										<li>Доставка по Україні (Нова Пошта)</li>
										<li>Самовивіз зі складу</li>
									</ul>
								</div>

								<div>
									<h1 className="payment">Оплата</h1>
									<ul>
										<li>Готівкою</li>
										<li>Visa, MasterCard або Приват24</li>
										<li>Безготівкова</li>
									</ul>
								</div>

								<div>
									<h1 className="installation">Встановлення</h1>
									<li>Від 1500 грн (Київ і область)</li>
								</div>
							</div>
						</div>
					</div>
					<h1 className="ABOUTPRODUCT">Про товар</h1>
					<p className="aboutTEXT">{about}</p>
					<h1 className="ABOUTPRODUCT">Палітра кольорів</h1>
					<p className=" aboutTEXT">
						Саме для Вас ми пофарбуємо двері в будь який колір з палітри RAL
					</p>
					<img
						className="RAL"
						src={process.env.PUBLIC_URL + "/img/RAL.png"}
						alt="ral"
					/>
					<h1 className="pl-20 pr-20 pt-20 mb-5 pb-5">Разом з цим купують</h1>
					<div className="containerItem">{renderFurnituraItems()}</div>
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
				<h1 className="ABOUTPRODUCT">Про товар</h1>
				<p className="aboutTEXT">{about}</p>
				<h1 className="pl-20 pr-20 pt-20 mb-5 pb-5">Разом з цим купують</h1>
				<div className="containerItem">{renderDoorItems()}</div>
			</div>
		</div>
	);
}

export default FullProductPage;
