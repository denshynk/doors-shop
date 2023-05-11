/* eslint-disable jsx-a11y/alt-text */
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/drawer";

function App() {
	return (
		<div className="main">
			<Header />
			<Drawer />
			<div className="main">
				<div className="wrapper">
					<h2>Популярні моделі</h2>
					<div className="d-flex ">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
