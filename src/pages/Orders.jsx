import React from "react";
import axios from "axios";

import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
	const { onAddToCart, onAddToFavorite} = React.useContext(AppContext);
	const [orders, setOrders] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		(async () => {
		try {
            	const { data } = await axios.get(
								"https://64a30178b45881cc0ae5fdb6.mockapi.io/orders"
							);
							setOrders(
								data.reduce((prev, obj) => [...prev, ...obj.items], [])
							);
							setIsLoading(false);
        } catch (error) {
            alert('Ошибка при запросе заказов');
            console.log(error)
        }
		})();
	}, []);

	return (
		<div>
			<h2>Мої замовлення</h2>
			<div className="containerItem  ">
				{(isLoading ? [...Array(8)] : orders).map((item, index) => (
					<Card
						key={index}
						loading={isLoading}
						{...item}
					/>
				))}
			</div>
		</div>
	);
}

export default Orders;
