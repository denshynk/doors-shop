import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.scss";

function MenuLogo() {
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCategoriesDoorsOpen, setIsCategoriesDoorsOpen] =
		React.useState(false);
	const [isCategoriesFurnitureOpen, setIsCategoriesFurnitureOpen] =
		React.useState(false);
	const [isCategoriesPaganageOpen, setIsCategoriesPaganageOpen] =
		React.useState(false);

	const handleMenuButtonClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

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

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 800);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div className="headerLeft d-flex ">
			{isWideScreen ? (
				<Link to="/">
					<img
						width={"100px"}
						height={"70px"}
						src={process.env.PUBLIC_URL + "/img/logo.png"}
						alt="logo"
					/>
				</Link>
			) : (
				<div className={styles.contain}>
					<img
						onClick={handleMenuButtonClick}
						width={"45px"}
						height={"45px"}
						src={process.env.PUBLIC_URL + "/img/cube1.png"}
						alt="menu"
					/>
					<span className={styles.MenuDropdown}>
						{isMenuOpen && (
							<div className={styles.dropdownContent}>
								<Link to="/" onClick={() => setIsMenuOpen(false)}>
									Головна
								</Link>
								<span
									className={styles.dropdown}
									onClick={handleCategoriesDoorsClick}
								>
									Двері
									{isCategoriesDoorsOpen && (
										<div className={styles.dropdowContentContent}>
											{}
											<Link to="/doors" onClick={() => setIsMenuOpen(false)}>
												Всі Двері
											</Link>
											<Link
												to="/withglass"
												onClick={() => setIsMenuOpen(false)}
											>
												Зі склом
											</Link>
											<Link to="/frosted" onClick={() => setIsMenuOpen(false)}>
												З фрезеруванням
											</Link>

											{}
										</div>
									)}
								</span>
								<span
									className={styles.dropdown}
									onClick={handleCategoriesPaganageClick}
								>
									Погонаж
									{isCategoriesPaganageOpen && (
										<div className={styles.dropdowContentContent}>
											{}
											<Link to="/pogonag" onClick={() => setIsMenuOpen(false)}>
												Весь погонаж
											</Link>
											<Link to="/dobor" onClick={() => setIsMenuOpen(false)}>
												Добірна дошка
											</Link>
											<Link to="/lyshtva" onClick={() => setIsMenuOpen(false)}>
												Лиштва
											</Link>
											<Link to="/korob" onClick={() => setIsMenuOpen(false)}>
												Коробка
											</Link>

											{}
										</div>
									)}
								</span>
								<span
									className={styles.dropdown}
									onClick={handleCategoriesFurnitureClick}
								>
									Фурнітура
									{isCategoriesFurnitureOpen && (
										<div className={styles.dropdowContentContent}>
											{}
											<Link
												to="/furnitura"
												onClick={() => setIsMenuOpen(false)}
											>
												Вся фурнітура
											</Link>
											<Link
												to="/doorhandle"
												onClick={() => setIsMenuOpen(false)}
											>
												Ручки
											</Link>
											<Link to="/latches" onClick={() => setIsMenuOpen(false)}>
												Замикачі та накладки
											</Link>
											<Link to="/locks" onClick={() => setIsMenuOpen(false)}>
												Замки
											</Link>
											<Link to="/petli" onClick={() => setIsMenuOpen(false)}>
												Петлі
											</Link>
											{}
										</div>
									)}
								</span>
								<Link to="/zamer" onClick={() => setIsMenuOpen(false)}>
									Виклик замірщика
								</Link>
								<Link to="/ourworks" onClick={() => setIsMenuOpen(false)}>
									Наші роботи
								</Link>
							</div>
						)}
					</span>
				</div>
			)}
		</div>
	);
}

export default MenuLogo;
