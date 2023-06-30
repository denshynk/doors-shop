import styles from './Card.module.scss';

function Card(props) {

	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src="./img/123.svg" alt="Unliked" />
			</div>
			<center>
				<img width={90} height={180} src={props.imageUrl} alt="Product" />
			</center>
			<h5>{props.title}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Ціна:</span>
					<b>{props.price} грн</b>
				</div>
				<button className="button d-flex" onClick={props.onClick}>
					<img width={90} height={27} src="./img/plus.svg" alt="Plus"></img>
				</button>
			</div>
		</div>
	);
}
export default Card;
