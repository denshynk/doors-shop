import React from "react";
import AppContext from "../context";
import Card from "../components/Card";
import CardOutFullPage from "../components/CardOutFullPage";

function Favorites({ onAddToFavorite, onAddToCart }) {
	const { favorites } = React.useContext(AppContext);

	if (favorites.length === 0) {
		return (
			<div
				className="favOrdEmpty"
			>
				<div className="cartEmpty d-flex align-center justify-center flex-column flex">
					<img
						className="mb-20"
						width="auto"
						height="120px"
						src={process.env.PUBLIC_URL + "/img/emojiSad.png"}
						alt="Empty"
					/>
					<h1>Список Обраних порожній</h1>
					<p className="opacity-6">
						Наразі ви не додали ні один товар до обраних
					</p>
				</div>
			</div>
		);
	}

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
