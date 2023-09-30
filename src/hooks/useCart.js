import React from "react";

import AppContext from "../context";


export const useCart = () => {
	const { cartItems, setCartItems } = React.useContext(AppContext);

	const updateQuantity = (itemId, newQuantity) => {
		const updatedCartItems = cartItems.map((item) =>
			item.dinamicID === itemId
				? {
						...item,
						quantity: Number(newQuantity),
						totalPrice: item.totalPriceOne * Number(newQuantity),
				  }
				: item
		);

		setCartItems(updatedCartItems);
	};

	const totalPriceCART = cartItems.reduce(
		(sum, obj) => obj.totalPrice + sum,
		0
	);

	return { cartItems, setCartItems, updateQuantity, totalPriceCART };
};
