import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import React from "react";
import AppContext from "../../context";
import { Link } from "react-router-dom";

function Card({
	id,
	title,
	category,
	price,
	totalPrice,
	imageUrl,
	onPlus,
	onFavorite,
	loading = false,
}) {
	const { isItemAdded, favorites } = React.useContext(AppContext);
	const [favorited, setFavorited] = React.useState(false);
	const object = { id, title, price, imageUrl, category };

	React.useEffect(() => {
		const isFavorite = favorites.some((item) => item.id === id);
		setFavorited(isFavorite);
	}, [favorites, id]);

	const onClickFavorite = () => {
		onFavorite(object);
		setFavorited(!favorited);
	};

	console.log(object);

	return (
		<div className={styles.card}>
			{loading ? (
				<ContentLoader
					speed={4}
					width={300}
					height={391}
					viewBox="0 0 300 391"
					backgroundColor="#ad3434"
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
					{onFavorite && (
						<div className={styles.favorite} onClick={onClickFavorite}>
							<img
								src={
									process.env.PUBLIC_URL +
									"/" +
									(favorited ? "./img/onLike.svg" : "./img/123.svg")
								}
								alt={favorited ? "Liked" : "Unliked"}
							/>
						</div>
					)}
					{onPlus && (
						<Link to={`/product/${category}/${id}`}>
							<center>
								<img
									width={120}
									height={250}
									src={process.env.PUBLIC_URL + "/" + imageUrl}
									alt="Product"
								/>
							</center>
							<h5>Міжкімнатні двері {title}</h5>
							<div className="d-flex justify-between  align-center">
								<div className="d-flex flex-column">
									<span>Ціна:</span>
									<b>{price >= 0 ? price : totalPrice} грн</b>
								</div>
								{onPlus && (
									<Link to={`/product/${category}/${id}`}>
										<img
											className={styles.plus}
											width={90}
											height={27}
											src={
												isItemAdded(id)
													? process.env.PUBLIC_URL + "/img/btn-check.svg"
													: process.env.PUBLIC_URL + "/img/plus.svg"
											}
											alt="Plus"
										/>
									</Link>
								)}
							</div>
						</Link>
					)}
				</>
			)}
		</div>
	);
}

export default Card;
