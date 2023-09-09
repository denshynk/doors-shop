import React from "react";
import axios from "axios";

import { useCart } from "../../hooks/useCart";
import Info from "../Info";

import styles from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, items = [], onRemove, opened }) {
	const { cartItems, setCartItems, totalPrice } = useCart();
	const [orderId, setOrderId] = React.useState(null);
	const [isOrderComlete, setIsOrderComlete] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);

	const OnClickOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post(
				"https://64a30178b45881cc0ae5fdb6.mockapi.io/orders",
				{
					items: cartItems,
				}
			);
			setOrderId(data.id);
			setIsOrderComlete(true);
			setCartItems([]);

			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
				await axios.delete(
					"https://64a30178b45881cc0ae5fdb6.mockapi.io/cart/" + item.id
				);
				await delay(1000);
			}
		} catch (error) {
			alert("Ошибка при создании ззаказа");
		}
		setIsLoading(false);
	};

	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
			<div className={styles.drawer}>
				<div className="p-30 d-flex flex-column ">
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
						<div className="items">
							{items.map((obj) => (
								<div
									key={obj.id}
									className="cartItem d-flex align-center mb-20"
								>
									<div
										style={{ backgroundImage: `url(${obj.imageUrl})` }}
										className="cartItemImg"
									></div>
									<div className="mr-20 flex">
										<p className="mb-5">{obj.title}</p>
										<b>{obj.price} грн</b>
									</div>
									<img
										onClick={() => onRemove(obj.id)}
										className="removebtn"
										src={process.env.PUBLIC_URL + "/img/delete.svg"}
										alt="delete"
									/>
								</div>
							))}
						</div>
					) : (
						<Info
							title={
								isOrderComlete ? "Замовлення оформленно" : "Корзина пустая"
							}
							description={
								isOrderComlete
									? `Ваш заказ № ${orderId} , скоро с Вами свяжеться абминистратор`
									: "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
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
									<b>{totalPrice} грн</b>
								</li>
							</ul>
							<button
								disabled={isLoading}
								onClick={OnClickOrder}
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
			</div>
		</div>
	);
}

export default Drawer;
