import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import React from "react";

function Card({
	id,
	title,
	price,
	imageUrl,
	onPlus,
	onFavorite,
	favorited = false,
	added = false,
	loading = false
}) {
	const [isAdded, setIsAdded] = React.useState(added);

	const onClickPlus = () => {
		onPlus({ id, title, price, imageUrl });
		setIsAdded(!isAdded);
	};

	const [isAddedFavorite, setIsAddedFavorite] = React.useState(favorited);

	const onClickFavorite = () => {
		onFavorite({ id, title, price, imageUrl });
		setIsAddedFavorite(!isAddedFavorite);
	};

	return (
		<div className={styles.card}>
			{loading ? (
				<ContentLoader
					speed={4}
					width={300}
					height={391}
					viewBox="0 0 300 391"
					backgroundColor="#7a0000"
					foregroundColor="#dbc9c9"
				>
					<rect x="352" y="253" rx="0" ry="0" width="294" height="104" />
					<rect x="0" y="0" rx="6" ry="6" width="34" height="34" />
					<rect x="40" y="0" rx="20" ry="20" width="120" height="250" />
					<rect x="0" y="277" rx="8" ry="8" width="198" height="15" />
					<rect x="0" y="297" rx="8" ry="8" width="130" height="15" />
					<rect x="0" y="360" rx="10" ry="10" width="88" height="20" />
					<rect x="108" y="360" rx="10" ry="10" width="88" height="20" />
					<rect x="0" y="340" rx="7" ry="7" width="75" height="15" />
				</ContentLoader>
			) : (
				<>
					<div className={styles.favorite} onClick={onClickFavorite}>
						<img
							src={isAddedFavorite ? "./img/onLike.svg" : "./img/123.svg"}
							alt="Unliked"
						/>
					</div>
					<center>
						<img width={120} height={250} src={imageUrl} alt="Product" />
					</center>
					<h5>{title}</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Ціна:</span>
							<b>{price} грн</b>
						</div>
						<img
							className={styles.plus}
							onClick={onClickPlus}
							width={90}
							height={27}
							src={isAdded ? "./img/btn-check.svg" : "./img/plus.svg"}
							alt="Plus"
						></img>
					</div>
				</>
			)}
		</div>
	);
}
export default Card;
