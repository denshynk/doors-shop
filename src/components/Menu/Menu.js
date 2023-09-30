import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

function MenuLogo() {
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCategoriesDoorsOpen, setIsCategoriesDoorsOpen] = useState(false);
	const [isCategoriesFurnitureOpen, setIsCategoriesFurnitureOpen] =
		useState(false);
	const [isCategoriesPaganageOpen, setIsCategoriesPaganageOpen] =
		useState(false);
	const [isCategoriesEntryDoorsOpen, setIsCategoriesEntryDoorsOpen] =
		useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const handleMenuButtonClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleCategoriesDoorsClick = () => {
		setIsCategoriesDoorsOpen(!isCategoriesDoorsOpen);
		setIsCategoriesPaganageOpen(false);
		setIsCategoriesFurnitureOpen(false);
		setIsCategoriesEntryDoorsOpen(false);
	};

	const handleCategoriesFurnitureClick = () => {
		setIsCategoriesFurnitureOpen(!isCategoriesFurnitureOpen);
		setIsCategoriesPaganageOpen(false);
		setIsCategoriesDoorsOpen(false);
		setIsCategoriesEntryDoorsOpen(false);
	};

	const handleCategoriesPaganageClick = () => {
		setIsCategoriesPaganageOpen(!isCategoriesPaganageOpen);
		setIsCategoriesFurnitureOpen(false);
		setIsCategoriesDoorsOpen(false);
		setIsCategoriesEntryDoorsOpen(false);
	};

	const handleCategoriesEntryDoorsClick = () => {
		setIsCategoriesEntryDoorsOpen(!isCategoriesEntryDoorsOpen);
		setIsCategoriesPaganageOpen(false);
		setIsCategoriesFurnitureOpen(false);
		setIsCategoriesDoorsOpen(false);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 800);
		};

		const handleClickOutsideMenu = (event) => {
			const headerLeft = document.querySelector(".headerLeft");

			if (headerLeft && !headerLeft.contains(event.target)) {
				setIsChecked(false);
				setIsMenuOpen(false);
				setIsCategoriesFurnitureOpen(false);
				setIsCategoriesDoorsOpen(false);
				setIsCategoriesPaganageOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		document.addEventListener("click", handleClickOutsideMenu);

		return () => {
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("click", handleClickOutsideMenu);
		};
	}, []);

	return (
		<div className="headerLeft d-flex ">
			{isWideScreen ? (
				<Link to="/">
					<img
						width={"100px"}
						height={"62,4875622px"}
						src={process.env.PUBLIC_URL + "/img/logo.png"}
						alt="logo"
					/>
				</Link>
			) : (
				<div className={styles.contain}>
					<label className="hamburger">
						<input
							type="checkbox"
							onClick={handleMenuButtonClick}
							checked={isChecked}
							onChange={() => setIsChecked(!isChecked)}
						/>
						<svg viewBox="0 0 32 32">
							<path
								className="liner line-top-bottom"
								d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
							></path>
							<path className="liner" d="M7 16 27 16"></path>
						</svg>
					</label>

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
									Міжкімнатні двері
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
									onClick={handleCategoriesEntryDoorsClick}
								>
									Вхідні двері
									{isCategoriesEntryDoorsOpen && (
										<div className={styles.dropdowContentContent}>
											{}
											<Link
												to="/entrydoors"
												onClick={() => setIsMenuOpen(false)}
											>
												Всі Двері
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
								<a
									className="PHONE"
									href="tel:+380683023003"
									onClick={() => setIsMenuOpen(false)}
								>
									+380683023003
								</a>
								<a
									className="PHONE2"
									href="tel:+380996064593"
									onClick={() => setIsMenuOpen(false)}
								>
									+380996064593
								</a>
							</div>
						)}
					</span>
				</div>
			)}
		</div>
	);
}

export default MenuLogo;
