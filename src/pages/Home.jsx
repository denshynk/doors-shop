import Card from "../components/Card";

function Home({
	items,
	searchValue,
	onAddToCart,
	onAddToFavorite,
	cartItems,
	isLoading,
}) {
	const renderItems = () => {
		const filtredItems = items.filter((item) =>
			item.title.toLowerCase().includes(searchValue)
		);
		return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
			<Card
				key={index}
				onPlus={(product) => onAddToCart(product)}
				onFavorite={(product) => onAddToFavorite(product)}
				added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
				loading={isLoading}
				{...item}
			/>
		));
	};

	return (
		<div>
			<h2>
				{searchValue
					? `Поиск по запросу: "${searchValue}"`
					: "Популярні товари"}
			</h2>
			<div className="containerItem">{renderItems()}</div>
		</div>
	);
}

export default Home;
