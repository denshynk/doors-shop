function Card() {
    return (
    <div className="card">
	<div className="favorite">
		<img src="./img/b_like.svg" alt="Unliked" />
	</div>
	<center>
		<img width={90} height={180} src="./img/doors/door1.png" alt="Product" />
	</center>
	<h5>Діері фарбовані міжкімнатні, сучасна PRIMA</h5>
	<div className="d-flex justify-between align-center">
		<div className="d-flex flex-column">
			<span>Ціна:</span>
			<b>6000 грн</b>
		</div>
		<button className="button">
			<img width={90} height={27} src="./img/plus.svg" alt="Plus"></img>
		</button>
	</div>
</div>
);
}
export default Card;