import React from "react";
import Card from "../components/Card";

import CardOutFullPage from "../components/CardOutFullPage";

function Orders() {
	const [orders, setOrders] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		// Load orders from localStorage
		const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
		setOrders(savedOrders);
		setIsLoading(false);
	}, []);

	return (
		<div>
			<h2>Мої замовлення</h2>
			<div className="containerItem">
				{isLoading
					? []
					: orders
						.reduce((prev, obj) => [...prev, ...obj.items], [])
						.map((items, index) => {
							if (items.category === "door") {
								return (
									<Card
										key={index}
										loading={isLoading}
										{...items}
									/>
								);
							} else {
								return (
									<CardOutFullPage key={index} loading={isLoading} {...items} />
								);
							}
						})}
			</div>
		</div>
	);
}

export default Orders;
