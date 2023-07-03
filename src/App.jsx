/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect(() => {
		fetch('https://64a30178b45881cc0ae5fdb6.mockapi.io/Items').then((res) => {
		return res.json();
	}).then(json => {
		setItems(json)
	});
	}, []);

	const onAddToCart = (product) => {
		setCartItems(prev => [...prev, product]);
	}

	return (
		<div className="main">
			<Header onClickBasket={() => setCartOpened(true)} />
			{cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
			<div className="main">
				<div className="wrapper">
					<h2>Популярні моделі</h2>
					<div className="containerItem">
						{items.map((obj) => (
							<Card
								title={obj.title}
								price={obj.price}
								imageUrl={obj.imageUrl}
								onPlus={(product) => onAddToCart(product)}
								onFavorite ={() => console.log('Добавить в закладки')}
							/>
						))}
					</div>

				</div>
			</div>
		</div>
	);
}

export default App;
