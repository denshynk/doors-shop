import React from "react";
import axios from "axios";

import { useCart } from "../../hooks/useCart";
import Info from "../Info";
import OrderFormModal from "../OrderForm/OrderFormModal";

import styles from "./Drawer.module.scss";

function Drawer({ onClose, items = [], onRemove, opened }) {
	const { cartItems, updateQuantity, totalPriceCART, setCartItems } = useCart();
	const [orderId, setOrderId] = React.useState(null);
	const [isOrderComlete, setIsOrderComlete] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleQuantityChange = (itemId, newQuantity) => {
		const parsedQuantity = parseInt(newQuantity, 10);
		// Check if parsedQuantity is a valid number and within the allowed range
		if (
			!isNaN(parsedQuantity) &&
			parsedQuantity >= 1 &&
			parsedQuantity <= 999
		) {
			updateQuantity(itemId, parsedQuantity);
		} else {
			// If the entered quantity is invalid, you may choose to show a message or take other actions.
			// For now, let's assume you want to set it to 1 (minimum allowed quantity).
			updateQuantity(itemId, 1);
		}
	};

	const handleQuantityDecrease = (itemId) => {
		const currentItem = cartItems.find((item) => item.dinamicID === itemId);
		const newQuantity = Math.max(currentItem.quantity - 1, 1);
		updateQuantity(itemId, newQuantity);
	};

	const handleQuantityIncrease = (itemId) => {
		updateQuantity(
			itemId,
			cartItems.find((item) => item.dinamicID === itemId).quantity + 1
		);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const OnClickOrder = async (person) => {
		try {
			setIsLoading(true);

			const cleanedCartItems = cartItems.map(
				({ id, dinamicID, ...rest }) => rest
			);

			const response = await axios.get(
				"https://server.barbadoors.com.ua/orders/count"
			);
			const ordersCount = Number(response.data.count);

			const { data } = await axios.post(
				"https://server.barbadoors.com.ua/orders",
				{
					_id: ordersCount,
					items: cleanedCartItems,
					person: person,
					totalPriceCART: totalPriceCART,
				}
			);

			const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
			const newOrder = {
				id: data.id,
				items: cartItems,
			};
			const updatedOrders = [...existingOrders, newOrder];

			localStorage.setItem("orders", JSON.stringify(updatedOrders));
			setOrderId(ordersCount);
			setIsOrderComlete(true);

			// Очищаем cartItems в localStorage и в состоянии
			localStorage.removeItem("cartItems");
			setCartItems([]);
		} catch (error) {
			// alert("Помилка під час створення замовлення");
			setIsOrderComlete(true);

			// Очищаем cartItems в localStorage и в состоянии
			localStorage.removeItem("cartItems");
			setCartItems([]);
		}
		setIsLoading(false);
	};

	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
			<div className={styles.drawer}>
				{!isModalOpen ? (
					<div className="p-30 d-flex flex-column w100p">
						<h2 className="mb-30 d-flex justify-between ">
							Кошик
							<img
								onClick={onClose}
								className="removebtn cu-p"
								src={process.env.PUBLIC_URL + "/img/delete.svg"}
								alt="delete"
							/>
						</h2>
						{items.length > 0 ? (
							<div className="contentBasket d-flex">
								<div className="items">
									{items.map((obj) => (
										<div
											key={obj.id}
											className="cartItem d-flex align-center mb-20"
										>
											<div
												style={{ backgroundImage: `url(/${obj.imageUrl})` }}
												className="cartItemImg"
											></div>
											<div className={styles.fuckingDrawer}>
												<p className="mb-5">{obj.title}</p>
												<b>{obj.totalPrice} грн</b>
											</div>
											<div className="CandeQuantity d-flex align-center">
												<button
													className="button-drawer"
													onClick={() => handleQuantityDecrease(obj.dinamicID)}
												>
													-
												</button>
												<input
													className={styles.drawerINputs}
													type="text"
													placeholder={obj.quantity}
													value={obj.quantity}
													onChange={(e) =>
														handleQuantityChange(obj.dinamicID, e.target.value)
													}
												></input>
												<button
													className="button-drawer"
													onClick={() => handleQuantityIncrease(obj.dinamicID)}
												>
													+
												</button>
											</div>
											<img
												onClick={() => onRemove(obj.dinamicID)}
												className="removebtn"
												src={process.env.PUBLIC_URL + "/img/delete.svg"}
												alt="delete"
											/>
										</div>
									))}
								</div>
							</div>
						) : (
							<Info
								title={
									isOrderComlete ? "Замовлення оформленно" : "Кошик порожній"
								}
								description={
									isOrderComlete
										? `Ваше замовлення № ${orderId} , скоро з Вами зв'яжеться адміністратор`
										: "Додатйте хоча б один товар у кошик"
								}
								image={
									isOrderComlete
										? `${process.env.PUBLIC_URL + "/img/orderComplete.png"}`
										: `${process.env.PUBLIC_URL + "/img/empty-cart.jpg"}`
								}
							/>
						)}

						{items.length > 0 ? (
							<div className="cartTotalBlock">
								<ul>
									<li>
										<span>Сума замовлення:</span>
										<div></div>
										<b>{totalPriceCART} грн</b>
									</li>
								</ul>
								<button
									disabled={isLoading}
									onClick={handleOpenModal}
									className="redButton"
								>
									Оформити замовлення
									<img
										src={process.env.PUBLIC_URL + "/img/slider.svg"}
										alt="arrow"
									/>
								</button>
							</div>
						) : (
							<div></div>
						)}
					</div>
				) : (
					<OrderFormModal
						handleCloseModal={handleCloseModal}
						OnClickOrder={OnClickOrder}
						title={"Оформлення замовлення"}
						description={"Додатйте хоча б один товар в кошик"}
						image={
							isOrderComlete
								? `${process.env.PUBLIC_URL + "/img/orderComplete.png"}`
								: `${process.env.PUBLIC_URL + "/img/empty-cart.jpg"}`
						}
					/>
				)}
			</div>
		</div>
	);
}

export default Drawer;
