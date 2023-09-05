import Card from "../components/Card";

function Favorites({ items, onAddToFavorite, onAddToCart }) {
	return (
		<div>
			<h2>Обрані</h2>
			<div className="containerItem  ">
				{items.map((obj, index) => (
					<Card
						key={index}
						favorited={true}
						onFavorite={onAddToFavorite}
						onPlus={(product) => onAddToCart(product)}
						{...obj}
					/>
				))}
			</div>
		</div>
	);
}

export default Favorites;
