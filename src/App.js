/* eslint-disable jsx-a11y/alt-text */
function App() {
	return (
		<div className="header">
			<div className="menu">
				<div className="container">
					<li>
						<a href="">Доставка і оплата</a>
					</li>
					<li>
						<a href="">Про магазин</a>
					</li>
					<li>
						<a href="">Контакти</a>
					</li>
					<li>
						<a href="">FAQ</a>
					</li>
					<li>
						<a href="">Встановлення дверей</a>
					</li>
				</div>
			</div>
			<header className="topheader">
				<div className="headerLeft">
					<img width={167} height={116} src="/img/logo.png" />
				</div>
				<div className="headerMiddle">
					<p>+3800971234567</p>
					<p>+3800971234567</p>
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
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M29.0477 32C29.8629 32 30.5239 31.3391 30.5239 30.5238C30.5239 29.7086 29.8629 29.0476 29.0477 29.0476C28.2324 29.0476 27.5715 29.7086 27.5715 30.5238C27.5715 31.3391 28.2324 32 29.0477 32Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M1 1H6.90476L10.861 20.7662C10.9959 21.4458 11.3657 22.0563 11.9054 22.4908C12.4452 22.9253 13.1206 23.1561 13.8133 23.1429H28.1619C28.8547 23.1561 29.5301 22.9253 30.0698 22.4908C30.6096 22.0563 30.9793 21.4458 31.1143 20.7662L33.4762 8.38095H8.38095"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<span>1250 грн</span>
					</li>
				</ul>
			</header>
			<div className="uperheader">
				<h4>Головна</h4>
				<h4>Наші роботи</h4>
				<h4>Послуги</h4>
				<h4>Про компанію</h4>
				<h4>Контакти</h4>
				<h4>Виклик замірщика</h4>
			</div>
			<div className="wrapper">
				<h2>Популярні моделі</h2>
			</div>
		</div>
	);
}

export default App;
