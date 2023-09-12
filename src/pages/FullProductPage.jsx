import React from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context";
import ProductConfigComponent from "../components/ConfigDoors";

function FullProductPage({ onPlus, cartItems}) {
	const [selectedOptions, setSelectedOptions] = React.useState({
		selectedSize: null,
		selectedBox: null,
		selectedFrame: null,
		selectedBoard: null,
	});
	const onClickPlus = () => {
		const dinamicID = cartItems.length > 0 ? cartItems.length + 1 : 1;
		console.log(cartItems.length);
		onPlus({
			dinamicID,
			id,
			title,
			totalPrice,
			selectedOptions,
			imageUrl,
			quantity,
		});
	};
	const [selectedOptionsCost, setSelectedOptionsCost] = React.useState(null);
	const { category, id } = useParams();
	const { items } = React.useContext(AppContext);
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
		if (selectedItem) {
			setTotalPrice(Number(selectedOptionsCost) * quantity);
		}
	}, [selectedItem, selectedOptionsCost, quantity]);

	console.log(selectedOptionsCost);
	console.log(selectedOptions);

	const handleTotalPriceChange = (newTotalPrice) => {
		setTotalPrice(newTotalPrice);
	};

	const handleQuantityChange = (newQuantity) => {
		try {
			if (newQuantity < 1) {
				newQuantity = 1;
			}
			setQuantity(newQuantity);
			setTotalPrice(Number(selectedItem?.price) * newQuantity || 0);
		} catch (error) {
			console.error("Error while handling quantity change:", error);
		}
	};

	console.log(selectedItem);

	if (!selectedItem) {
		return <div>Loading...</div>;
	}

	const { title, imageUrl, about } = selectedItem;

	return (
		<div className="FullOrderPages">
			<div>
				<div className="orderPage">
					<div className="conttainer mt-50">
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
				<h1 className="pl-20 pr-20 pt-20 mb-5 pb-5">Палітра кольорів</h1>
				<p className=" RALtext">
					Саме для Вас ми пофарбуємо двері в будь який колір з палітри RAL
				</p>
				<img className="RAL" src={process.env.PUBLIC_URL + "/img/RAL.png"}/>
			</div>
		</div>
	);
}

export default FullProductPage;
