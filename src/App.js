/* eslint-disable jsx-a11y/alt-text */
// комент для пушша и пула проверки информации 
function App() {
	return (
		<div className="main">
			<div className="header">
				<div className="upheader">
					<div className="container">
						<li className="d-flex position: absolute">
							<a href="google.com">Доставка і оплата</a>
							<a href="google.com">Про магазин</a>
							<a href="google.com">Контакти</a>
							<a href="google.com">FAQ</a>
							<a href="google.com">Встановлення дверей</a>
						</li>
					</div>
				</div>
				<header className="topheader">
					<div className="container justify-between">
						<div className="d-flex align-center ">
							<div className="headerLeft d-flex ">
								<img width={130} height={80} src="./img/logo.png" />
							</div>
							<div className="search-block">
								<img
									color="ffffff"
									width={20}
									height={20}
									src="./img/search.svg"
									alt="Search"
								/>
								<input placeholder="Пошук..." />
							</div>
						</div>
						<div className="headerMiddle d-flex align-center ">
							<div>
								<p>+3800971234567</p>
								<p>+3800971234567</p>
							</div>
						</div>
						<ul className="headerRight">
							<li>
								<svg
									width="35"
									height="33"
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
								<span>1250 грн</span>
							</li>
						</ul>
					</div>
				</header>
				<div className="uperheader">
					<div className="container">
						<li className="d-flex position: absolute">
							<a href="www.google.com">Головна</a>
							<a href="www.google.com">Наші роботи</a>
							<a href="www.google.com">Послуги</a>
							<a href="www.google.com">Про компанію</a>
							<a href="www.google.com">Контакти</a>
							<a href="www.google.com">Виклик замірщика</a>
						</li>
					</div>
				</div>
			</div>
			<div className="main">
				<div style={{ display: "none" }} className="overlay">
					<div className="drawer d-flex">
						<div className="p-30 d-flex flex-column ">
							<h2 className="mb-30 d-flex justify-between ">
								Корзина
								<img
									className="removebtn cu-p"
									src="./img/delete.svg"
									alt="delete"
								/>
							</h2>

							<div className="items">
								<div className="cartItem d-flex align-center mb-20">
									<div
										style={{ backgroundImage: "url(./img/doors/door1.png)" }}
										className="cartItemImg"
									></div>
									<div className="mr-20 flex">
										<p className="mb-5">
											Діері фарбовані міжкімнатні, сучасна PRIMA
										</p>
										<b>6000 грн</b>
									</div>
									<img
										className="removebtn"
										src="./img/delete.svg"
										alt="delete"
									/>
								</div>
								<div className="cartItem d-flex align-center mb-20">
									<div
										style={{ backgroundImage: "url(./img/doors/door1.png)" }}
										className="cartItemImg"
									></div>
									<div className="mr-20 flex">
										<p className="mb-5">
											Діері фарбовані міжкімнатні, сучасна PRIMA
										</p>
										<b>6000 грн</b>
									</div>
									<img
										className="removebtn"
										src="./img/delete.svg"
										alt="delete"
									/>
								</div>
							</div>
							<div className="cartTotalBlock">
								<ul>
									<li>
										<span>Сума замовлення:</span>
										<div></div>
										<b>12000 грн</b>
									</li>
								</ul>
								<button className="greenButton">
									Оформити замовлення
									<img src="./img/slider.svg" alt="arrow" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="wrapper">
					<h2>Популярні моделі</h2>
					<div className="d-flex ">
						<div className="card">
							<div className="favorite">
								<img src="./img/b_like.svg" alt="Unliked" />
							</div>
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door1.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door2.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door3.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door4.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
					</div>
					<div className="d-flex mt-25">
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door5.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door6.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door7.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door8.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
					</div>
					<div className="d-flex mt-25">
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door9.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door10.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door11.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
						<div className="card">
							<center>
								<img
									width={90}
									height={180}
									src="./img/doors/door12.png"
									alt="Product"
								/>
							</center>
							<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
							<div className="d-flex justify-between align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>6000 грн</b>
								</div>
								<button className="button">
									<img
										width={90}
										height={27}
										src="./img/plus.svg"
										alt="Plus"
									></img>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
