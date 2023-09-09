import React from "react";
import AppContext from "../context";
import Card from "../components/Card";

function Favorites({ onAddToFavorite, onAddToCart }) {
	
	const { favorites } = React.useContext(AppContext);

	return (
		<div>
			<h2>Обрані</h2>
			<div className="containerItem  ">
				{favorites.map((obj, index) => (
					<Card
						key={index}
						favorited={true}
						onFavorite={onAddToFavorite}
	//					onPlus={(product) => onAddToCart(product)}
						{...obj}
					/>
				))}
			</div>
		</div>
	);
}

export default Favorites;
