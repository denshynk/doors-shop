/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState('');
	const [favorites, setFovorites] = React.useState([]);

	const onChangeSerchInput = (event) => {
		setSearchValue(event.target.value);
	}

	React.useEffect(() => {
		 	axios.get('https://64a30178b45881cc0ae5fdb6.mockapi.io/Items').then(res => {
				setItems(res.data);
		});
			axios.get('https://64a30178b45881cc0ae5fdb6.mockapi.io/cart').then(res => {
				setCartItems(res.data);
			})
	}, []);

	const onAddToCart = (product) => {
		axios.post('https://64a30178b45881cc0ae5fdb6.mockapi.io/cart', product);
		setCartItems((prev) => [...prev, product]);
	}

	const onRemoveItemCard = (id) => {
		axios.delete(`https://64a30178b45881cc0ae5fdb6.mockapi.io/cart/${id}`);
		setCartItems((prev) => prev.filter(item => item.id !== id));
	}

	const onAddToFavorite = (product) => {
		axios.post(
			"https://64a30178b45881cc0ae5fdb6.mockapi.io/favorites", product);
		setFovorites((prev) => [...prev, product]);
	};

	return (
		<div className="main">
			<Header
			value = {searchValue}
			onDelete = {() => setSearchValue('')}
			onChangeSerch = {onChangeSerchInput}
			onClickBasket={() => setCartOpened(true)} />
			{cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItemCard}/>}
			<div className="main">
				<div className="wrapper">
					<h2>{searchValue ? `Поиск по запросу: "${searchValue}"`: "Популярні товари"}</h2>
					<div className="containerItem">
						{items.filter(item => item.title.toLowerCase().includes(searchValue)).map((obj, index) => (
							<Card
								key = {index}
								title={obj.title}
								price={obj.price}
								imageUrl={obj.imageUrl}
								onPlus={(product) => onAddToCart(product)}
								onFavorite ={(product) => onAddToFavorite(product)}
							/>
						))}
					</div>

				</div>
			</div>
		</div>
	);
}

export default App;
