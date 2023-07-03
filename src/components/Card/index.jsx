import styles from './Card.module.scss';
import React from 'react';

function Card({ title, price, imageUrl, onPlus, onFavorite}) {
	const [isAdded, setIsAdded] = React.useState(false);
	
	const onClickPlus = () => {
		onPlus({title, price, imageUrl,});
		setIsAdded(!isAdded);
	};

	const [isAddedFavorite, setIsAddedFavorite] = React.useState(false);
	
	const onClickFavorite = () => {
		onFavorite();
		setIsAddedFavorite(!isAddedFavorite);
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onClickFavorite}>
				<img src={isAddedFavorite ? "./img/onLike.svg" : "./img/123.svg"} alt="Unliked" />
			</div>
			<center>
				<img width={90} height={180} src={imageUrl} alt="Product" />
			</center>
			<h5>{title}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Ціна:</span>
					<b>{price} грн</b>
				</div>
					<img className={styles.plus} onClick={onClickPlus} width={90} height={27} src={isAdded ? "./img/btn-check.svg" : "./img/plus.svg"} alt="Plus"></img>
			</div>
		</div>
	);
}
export default Card;
