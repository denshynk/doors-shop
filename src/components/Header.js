import { Link } from "react-router-dom";
import React from "react";

import { useCart } from "../hooks/useCart";

import MenuLogo from "./Menu/Menu";

function Header(props) {
	const { totalPriceCART } = useCart();
	const [isCategoriesDoorsOpen, setIsCategoriesDoorsOpen] =
		React.useState(false);
	const [isCategoriesFurnitureOpen, setIsCategoriesFurnitureOpen] =
		React.useState(false);
	const [isCategoriesPaganageOpen, setIsCategoriesPaganageOpen] =
		React.useState(false);

	const handleCategoriesDoorsClick = () => {
		setIsCategoriesDoorsOpen(!isCategoriesDoorsOpen);
		setIsCategoriesPaganageOpen(false);
		setIsCategoriesFurnitureOpen(false);
	};

	const handleCategoriesFurnitureClick = () => {
		setIsCategoriesFurnitureOpen(!isCategoriesFurnitureOpen);
		setIsCategoriesPaganageOpen(false);
		setIsCategoriesDoorsOpen(false);
	};

	const handleCategoriesPaganageClick = () => {
		setIsCategoriesPaganageOpen(!isCategoriesPaganageOpen);
		setIsCategoriesFurnitureOpen(false);
		setIsCategoriesDoorsOpen(false);
	};

	return (
		<div className="header">
			<header className="topheader">
				<div className="container ">
					<div className="d-flex align-center ">
						<MenuLogo />
						<div className="search-block">
							<img
								color="ffffff"
								width={"8%"}
								height={"8%"}
								src={process.env.PUBLIC_URL + "/img/search.svg"}
								alt="Search"
							/>
							{props.value && (
								<img
									onClick={props.onDelete}
									className="clear cu-p"
									src={process.env.PUBLIC_URL + "/img/delete.svg"}
									alt="delete"
								/>
							)}
							<input
								onChange={props.onChangeSerch}
								value={props.value}
								placeholder="Пошук..."
							/>
						</div>
					</div>
					<div className="headerMiddle d-flex align-center ">
						<ul>
							<p>+380683023003</p>
							<p>+380980235488</p>
						</ul>
					</div>
					<ul className="headerRight cu-p d-flex justify-between">
						<Link to="/orders">
							<img
								className="user d-flex"
								color="ffffff"
								src={process.env.PUBLIC_URL + "/img/user.svg"}
								width={"25px"}
								height={"25px"}
								alt="user"
							/>
						</Link>
						<Link to="/favorites">
							<img
								className="heart d-flex"
								color="ffffff"
								src={process.env.PUBLIC_URL + "/img/heart.svg"}
								alt="user"
							/>
						</Link>
						<li
							onClick={props.onClickBasket}
							className="backBasket align-center cu-p"
						>
							<svg
								width={"25px"}
								height={"25px"}
								viewBox="0 0 35 33"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.8096 32C13.6248 32 14.2858 31.3391 14.2858 30.5238C14.2858 29.7086 13.6248 29.0476 12.8096 29.0476C11.9943 29.0476 11.3334 29.7086 11.3334 30.5238C11.3334 31.3391 11.9943 32 12.8096 32Z"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M29.0477 32C29.8629 32 30.5239 31.3391 30.5239 30.5238C30.5239 29.7086 29.8629 29.0476 29.0477 29.0476C28.2324 29.0476 27.5715 29.7086 27.5715 30.5238C27.5715 31.3391 28.2324 32 29.0477 32Z"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M1 1H6.90476L10.861 20.7662C10.9959 21.4458 11.3657 22.0563 11.9054 22.4908C12.4452 22.9253 13.1206 23.1561 13.8133 23.1429H28.1619C28.8547 23.1561 29.5301 22.9253 30.0698 22.4908C30.6096 22.0563 30.9793 21.4458 31.1143 20.7662L33.4762 8.38095H8.38095"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span>{totalPriceCART} грн</span>
						</li>
					</ul>
				</div>
			</header>
			<div className="uperheader">
				<div className="container">
					<li className="d-flex position: absolute">
						<span
							className="dropdownUperHeader"
							onClick={handleCategoriesDoorsClick}
						>
							Двері
							{isCategoriesDoorsOpen && (
								<div className="dropdown-content">
									{}
									<Link to="/doors">Всі Двері</Link>
									<Link to="/withglass">Зі склом</Link>
									<Link to="/frosted">З фрезеруванням</Link>

									{}
								</div>
							)}
						</span>
						<span
							className="dropdownUperHeader"
							onClick={handleCategoriesPaganageClick}
						>
							Погонаж
							{isCategoriesPaganageOpen && (
								<div className="dropdown-content">
									{}
									<Link to="/pogonag">Весь погонаж</Link>
									<Link to="/dobor">Добірна дошка</Link>
									<Link to="/lyshtva">Лиштва</Link>
									<Link to="/korob">Коробка</Link>

									{}
								</div>
							)}
						</span>
						<span
							className="dropdownUperHeader	"
							onClick={handleCategoriesFurnitureClick}
						>
							Фурнітура
							{isCategoriesFurnitureOpen && (
								<div className="dropdown-content">
									{}
									<Link to="/furnitura">Вся фурнітура</Link>
									<Link to="/doorhandle">Ручки</Link>
									<Link to="/latches">Замикачі та накладки</Link>
									<Link to="/locks">Замки</Link>
									<Link to="/petli">Петлі</Link>
									{}
								</div>
							)}
						</span>

						<Link to="/zamer">Виклик замірщика</Link>
						<Link to="/ourworks">Наші роботи</Link>
					</li>
				</div>
			</div>
		</div>
	);
}
export default Header;
