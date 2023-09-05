import Card from "../components/Card";

function Home({items, searchValue, onAddToCart, onAddToFavorite}) {
	return (
		<div>
			<h2>
				{searchValue
					? `Поиск по запросу: "${searchValue}"`
					: "Популярні товари"}
			</h2>
			<div className="containerItem">
				{items
					.filter((item) => item.title.toLowerCase().includes(searchValue))
					.map((obj, index) => (
						<Card
							key={index}
							onPlus={(product) => onAddToCart(product)}
                            onFavorite={(product) => onAddToFavorite(product)}
                            {...obj}
						/>
					))}
			</div>
		</div>
	);
}

export default Home;