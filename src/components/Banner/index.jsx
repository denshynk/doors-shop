// Banner.js
import React from "react";
import styles from "./Banner.module.scss";

function Banner() {
	return (
		<div className={styles.banner}>
			<div className="d-flex justify-between">
				<div>
					<img
						className={styles.logo}
						width={300}
						height={300}
						src="./img/Barbadoors.png"
						alt="banner"
					/>
					<div className={styles.container}>
						<h1 className={styles.prima}>Високоякісні двері</h1>
						<h1 className={styles.forever}>з гарантією 12 місяців</h1>
					</div>
				</div>
				<img
					className={styles.banerdoors}
					width={900}
					height={450}
					src="./img/banerlogo.png"
					alt="component"
				/>
			</div>
			<div className={styles.HI}>
				<h1 className={styles.hello}>Раді вітати Вас в світі дверей </h1>
				<h1 className={styles.barbados}>BARBADOORS</h1>
			</div>
			<p>Тут Ви знайдете ідеальні двері для Вашої оселі!</p>
		</div>
	);
}

export default Banner;
