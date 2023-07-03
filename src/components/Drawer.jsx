function Drawer({onClose, items = []}) {
	return (
		<div className="overlay">
			<div className="drawer d-flex">
				<div className="p-30 d-flex flex-column ">
					<h2 className="mb-30 d-flex justify-between ">
						Кошик
						<img onClick={onClose}
							className="removebtn cu-p"
							src="./img/delete.svg"
							alt="delete"
						/>
					</h2>

					<div className="items">
						{items.map((obj) =>(
							<div className="cartItem d-flex align-center mb-20">
							<div
								style={{ backgroundImage: `url(${obj.imageUrl})` }}
								className="cartItemImg"
							></div>
							<div className="mr-20 flex">
								<p className="mb-5">{obj.title}</p>
								<b>{obj.price} грн</b>
							</div>
							<img className="removebtn" src="./img/delete.svg" alt="delete" />
						</div>
						))}
					</div>
					<div className="cartTotalBlock">
						<ul>
							<li>
								<span>Сума замовлення:</span>
								<div></div>
								<b>12000 грн</b>
							</li>
						</ul>
						<button className="redButton">
							Оформити замовлення
							<img src="./img/slider.svg" alt="arrow" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Drawer;