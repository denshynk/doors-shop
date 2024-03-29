import React from "react";
import Card from "../components/Card";
import CardOutFullPage from "../components/CardOutFullPage";

function Favorites({ onAddToFavorite, onAddToCart }) {
	const [orders, setOrders] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		// Load orders from localStorage
		const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
		setOrders(savedOrders);
		setIsLoading(false);
	}, []);


	if (orders.length === 0) {
		return (
			<div className="favOrdEmpty">
				<div className="cartEmpty d-flex align-center justify-center flex-column flex">
					<img
						className="mb-20"
						width="auto"
						height="120px"
						src={process.env.PUBLIC_URL + "/img/emojiSad.png"}
						alt="Empty"
					/>
					<h1>Тут порожньо</h1>
					<p className="opacity-6">
						Купіть будь який товар та побачите його у списку
					</p>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="containerItem">
				{orders
					.reduce((prev, obj) => [...prev, ...obj.items], [])
					.map((items, index) => {
						if (items.category === "door") {
							return (
								<Card
									key={index}
									onFavorite={onAddToFavorite}
									onPlus={onAddToCart}
									{...items}
								/>
							);
						} else {
							return (
								<CardOutFullPage
									key={index}
									onFavorite={onAddToFavorite}
									onPlus={onAddToCart}
									{...items}
								/>
							);
						}
					})}
			</div>
		</div>
	);
}

export default Favorites;
