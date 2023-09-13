import React from "react";
import AppContext from "../context";
import Card from "../components/Card";
import CardOutFullPage from "../components/CardOutFullPage"; // Импортируем компонент

function Favorites({ onAddToFavorite, onAddToCart }) {
	const { favorites } = React.useContext(AppContext);
	console.log(favorites);
	return (
		<div>
			<div className="containerItem">
				{favorites.map((obj, index) => {
					if (obj.category === "furnitura") {
						return (
							<CardOutFullPage
								key={index}
								favorited={true}
								onFavorite={onAddToFavorite}
								onPlus={onAddToCart}
								{...obj}
							/>
						);
					} else {
						return (
							<Card
								key={index}
								favorited={true}
								onFavorite={onAddToFavorite}
								onPlus={onAddToCart}
								{...obj}
							/>
						);
					}
				})}
			</div>
		</div>
	);
}

export default Favorites;
