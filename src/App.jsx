/* eslint-disable jsx-a11y/alt-text */
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const cardArr = [
	{
		title: "Двері фарбовані міжкімнатні, сучасна PRIMA",
		price: 6000,
		imageUrl: "./img/doors/door1.png",
	},
	{
		title: "Двері фарбовані міжкімнатні, сучасна PRIMA",
		price: 6000,
		imageUrl: "./img/doors/door2.png",
	},
	{
		title: "Двері фарбовані міжкімнатні, сучасна PRIMA",
		price: 6000,
		imageUrl: "./img/doors/door3.png",
	},
	{
		title: "Двері фарбовані міжкімнатні, сучасна PRIMA",
		price: 6000,
		imageUrl: "./img/doors/door4.png",
	},
];

function App() {
	return (
		<div className="main">
			<Header />
			<Drawer />
			<div className="main">
				<div className="wrapper">
					<h2>Популярні моделі</h2>
					<div className="d-flex ">
						{cardArr.map((obj) => (
							<Card
								title={obj.title}
								price={obj.price}
								imageUrl={obj.imageUrl}
								onClick={() => console.log(obj)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
