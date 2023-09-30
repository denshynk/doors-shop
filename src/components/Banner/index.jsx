import React, { useEffect, useState } from "react";
import styles from "./Banner.module.scss";

function Banner() {
	const [activeSlide, setActiveSlide] = useState(0);
	const totalSlides = 2;

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
		}, 5000);

		return () => clearInterval(interval);
	}, [totalSlides]);

	return (
		<div className={styles.wrappper}>
			<div className={styles.banner}>
				{Array.from({ length: totalSlides }).map((_, index) => (
					<img
						key={index}
						src={`./img/BANER${index + 1}.png`}
						alt={`Banner ${index + 1}`}
						className={[
							styles.slide,
							index === activeSlide ? styles.active : null,
						].join(" ")}
						style={{
							opacity: index === activeSlide ? 1 : 0,
							transition: "opacity 0.5s ease-in-out",
						}}
					/>
				))}
			</div>
		</div>
	);
}

export default Banner;
