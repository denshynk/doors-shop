import React from "react";

import AppContext from "../context";

export const useCart = () => {
	const { cartItems, setCartItems } = React.useContext(AppContext);
	const totalPriceCART = cartItems.reduce(
		(sum, obj) => obj.totalPrice + sum,
		0
	);

	return { cartItems, setCartItems, totalPriceCART };
};
