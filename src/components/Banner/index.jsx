import React from "react";
import styles from "./Banner.module.scss";

function Banner() {
	const [activeSlide, setActiveSlide] = React.useState(0);

	const handleLeftHalfClick = () => {
		if (activeSlide > 0) {
			setActiveSlide(activeSlide - 1);
		}
	};

	const handleRightHalfClick = () => {
		// Предполагая, что у вас есть знание о количестве слайдов.
		const totalSlides = 2; // Замените этим значением на общее количество слайдов.

		if (activeSlide < totalSlides - 1) {
			setActiveSlide(activeSlide + 1);
		}
	};

	return (
		<div className={styles.banner}>
			<div className="d-flex justify-between">
				<div onClick={handleLeftHalfClick}>
					<img
						className={styles.logo}
						src="./img/Barbadoors.png"
						alt="banner"
					/>
					<div className={styles.container}>
						<h1 className={styles.prima}>Високоякісні двері</h1>
						<h1 className={styles.forever}>з гарантією 12 місяців</h1>
					</div>
				</div>
				<div onClick={handleRightHalfClick}>
					<img
						className={styles.banerdoors}
						src="./img/banerlogo.png"
						alt="component"
					/>
				</div>
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
