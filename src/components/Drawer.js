function Drawer({ onClose, items = [], onRemove }) {
	return (
		<div className="overlay">
			<div className="drawer d-flex">
				<div className="p-30 d-flex flex-column ">
					<h2 className="mb-30 d-flex justify-between ">
						Кошик
						<img
							onClick={onClose}
							className="removebtn cu-p"
							src="./img/delete.svg"
							alt="delete"
						/>
					</h2>
					{items.length > 0 ? (
						<div className="items">
							{items.map((obj) => (
								<div key={obj.id} className="cartItem d-flex align-center mb-20">
									<div
										style={{ backgroundImage: `url(${obj.imageUrl})` }}
										className="cartItemImg"
									></div>
									<div className="mr-20 flex">
										<p className="mb-5">{obj.title}</p>
										<b>{obj.price} грн</b>
									</div>
									<img
										onClick={() => onRemove(obj.id)}
										className="removebtn"
										src="./img/delete.svg"
										alt="delete"
									/>
								</div>
							))}
						</div>
					) : (
						<div className="cartEmpty d-flex align-center justify-center flex-column flex">
							<img
								className="mb-20"
								width="120px"
								height="120px"
								src="./img/empty-cart.jpg"
								alt="Empty"
							/>
							<h2>Корзина пустая</h2>
							<p className="opacity-6">
								Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
							</p>
							<button onClick={onClose} className="redButton">
								<img src="./img/slider.svg" alt="Arrow" />
								Вернуться назад
							</button>
						</div>
					)}

					{items.length > 0 ? (
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
					) : (
						<div></div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Drawer;
