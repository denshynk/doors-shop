import React, { useState, useEffect } from "react";
import "./ConfigDoors.scss";

const ConfigDoors = ({
	selectedItem,
	setSelectedOptions,
	setSelectedOptionsCost,
}) => {
	const [selectedSize, setSelectedSize] = useState(null);
	const [selectedBox, setSelectedBox] = useState(null);
	const [selectedFrame, setSelectedFrame] = useState(null);
	const [selectedBoard, setSelectedBoard] = useState(null);

	// Используем эффект для обновления общей цены при изменении выбранных опций
	useEffect(() => {
		const options = {
			selectedSize,
			selectedBox,
			selectedFrame,
			selectedBoard,
		};
		setSelectedOptions(options);
		// Вычисляем новую общую цену в зависимости от выбранных опций
		let newTotalPrice = selectedItem ? Number(selectedItem?.price) : 0;

		// Проверяем каждую опцию и добавляем ее стоимость к общей цене
		if (selectedSize === "600 x 2000 мм") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedSize === "700 x 2000 мм") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedSize === "800 x 2000 мм") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedSize === "90x200") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBox === "Ні") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedBox === "Коробка Стандарт 75*40*2070 мм. дерев’яна (+2 200 грн)"
		) {
			newTotalPrice += 2200; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedBox ===
			"Коробка Компланарна, 75*40*2070 mm. дерев’яна (+3 400 грн)"
		) {
			newTotalPrice += 3400; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedBox === "Коробка Інсайт 75*40*2070 mm. дерев’яна (+4 400 грн)"
		) {
			newTotalPrice += 4400; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedBox === "Коробка в розмір проєму (Індивідуальний прорахунок)"
		) {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedFrame === "Ні") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedFrame === "Лиштва телескопічна 70*12*2200 на 1 сторону (+900 грн)"
		) {
			newTotalPrice += 900; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedFrame ===
			"Лиштва телескопічна 70*12*2200 на 2 сторони (+1 800 грн)"
		) {
			newTotalPrice += 1800; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedFrame === "Лиштва фігурна-індивідуальний прорахунок") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBoard === "Ні") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBoard === "Добірна дошка 180*10*2070 мм (+1 500 грн)") {
			newTotalPrice += 1500; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBoard === "Добірна дошка 360*10*2070 мм (3 000 грн)") {
			newTotalPrice += 3000; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBoard === "Добірна дошка 90*10*2070 мм (+800 грн)") {
			newTotalPrice += 800; // Пример: 100 грн за размер 600 x 2000 мм
		}

		// Повторите этот процесс для остальных опций

		// Обновляем общую цену
		setSelectedOptionsCost(newTotalPrice);
	}, [
		selectedItem,
		selectedSize,
		selectedBox,
		selectedFrame,
		selectedBoard,
		setSelectedOptionsCost,
		setSelectedOptions,
	]);

	// Функции обработки выбора пользователем
	const handleSizeSelect = (size) => {
		setSelectedSize(size);
	};

	const handleBoxSelect = (box) => {
		setSelectedBox(box);
	};

	const handleFrameSelect = (frame) => {
		setSelectedFrame(frame);
	};

	const handleBoardSelect = (board) => {
		setSelectedBoard(board);
	};

	return (
		<div className="product-config">
			{/* Размер полотна */}
			<div className="config-section">
				<h3>Розмір полотна</h3>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() => handleSizeSelect("600 x 2000 мм")}
						checked={selectedSize === "600 x 2000 мм"}
					/>
					<span className="checkmark"></span>
					<li>600 x 2000 мм</li>
				</label>

				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() => handleSizeSelect("700 x 2000 мм")}
						checked={selectedSize === "700 x 2000 мм"}
					/>
					<span className="checkmark"></span>
					<li>700 x 2000 мм</li>
				</label>

				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() => handleSizeSelect("800 x 2000 мм")}
						checked={selectedSize === "800 x 2000 мм"}
					/>
					<span className="checkmark"></span>
					<li>800 x 2000 мм</li>
				</label>

				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() => handleSizeSelect("900 x 2000 мм")}
						checked={selectedSize === "900 x 2000 мм"}
					/>
					<span className="checkmark"></span>
					<li>900 x 2000 мм</li>
				</label>

				{/* Индивидуальный размер */}
				{selectedSize === "custom" && (
					<div className="custom-size">
						{/* Здесь должен быть код для всплывающего окна */}
					</div>
				)}
			</div>

			{/* Коробка */}
			<div className="config-section">
				<h3>Коробка</h3>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() => handleBoxSelect("Нема")}
						checked={selectedBox === "Нема"}
					/>
					<span className="checkmark"></span>
					<li>Ні</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoxSelect(
								"Коробка Стандарт 75*40*2070 мм. дерев’яна (+2 200 грн)"
							)
						}
						checked={
							selectedBox ===
							"Коробка Стандарт 75*40*2070 мм. дерев’яна (+2 200 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Коробка Стандарт 75*40*2070 мм. дерев’яна (+2 200 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoxSelect(
								"Коробка Компланарна, 75*40*2070 mm. дерев’яна (+3 400 грн)"
							)
						}
						checked={
							selectedBox ===
							"Коробка Компланарна, 75*40*2070 mm. дерев’яна (+3 400 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Коробка Компланарна, 75*40*2070 mm. дерев’яна (+3 400 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoxSelect(
								"Коробка Інсайт 75*40*2070 mm. дерев’яна (+4 400 грн)"
							)
						}
						checked={
							selectedBox ===
							"Коробка Інсайт 75*40*2070 mm. дерев’яна (+4 400 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Коробка Інсайт 75*40*2070 mm. дерев’яна (+4 400 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoxSelect(
								"Коробка в розмір проєму (Індивідуальний прорахунок)"
							)
						}
						checked={
							selectedBox ===
							"Коробка в розмір проєму (Індивідуальний прорахунок)"
						}
					/>
					<span className="checkmark"></span>
					<li>Коробка в розмір проєму (Індивідуальний прорахунок)</li>
				</label>

				{/* Добавьте остальные чекбоксы для коробки */}
			</div>

			{/* Лиштви */}
			<div className="config-section">
				<h3>Лиштва</h3>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() => handleFrameSelect("Нема")}
						checked={selectedFrame === "Нема"}
					/>
					<span className="checkmark"></span>
					<li>Ні</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleFrameSelect(
								"Лиштва телескопічна 70*12*2200 на 1 сторону (+900 грн)"
							)
						}
						checked={
							selectedFrame ===
							"Лиштва телескопічна 70*12*2200 на 1 сторону (+900 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Лиштва телескопічна 70*12*2200 на 1 сторону (+900 грн)</li>
				</label>

				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleFrameSelect(
								"Лиштва телескопічна 70*12*2200 на 2 сторони (+1 800 грн)"
							)
						}
						checked={
							selectedFrame ===
							"Лиштва телескопічна 70*12*2200 на 2 сторони (+1 800 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Лиштва телескопічна 70*12*2200 на 2 сторони (+1 800 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleFrameSelect("Лиштва фігурна-індивідуальний прорахунок")
						}
						checked={
							selectedFrame === "Лиштва фігурна-індивідуальний прорахунок"
						}
					/>
					<span className="checkmark"></span>
					<li>Лиштва фігурна-індивідуальний прорахунок</li>
				</label>

				{/* Добавьте остальные чекбоксы для лиштв */}
			</div>

			{/* Добірна дошка */}
			<div className="config-section">
				<h3>Добірна дошка</h3>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() => handleBoardSelect("Нема")}
						checked={selectedBoard === "Нема"}
					/>
					<span className="checkmark"></span>
					<li>Ні</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoardSelect("Добірна дошка 90*10*2070 мм (+800 грн)")
						}
						checked={selectedBoard === "Добірна дошка 90*10*2070 мм (+800 грн)"}
					/>
					<span className="checkmark"></span>
					<li>Добірна дошка 90*10*2070 мм (+800 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoardSelect("Добірна дошка 180*10*2070 мм (+1 500 грн)")
						}
						checked={
							selectedBoard === "Добірна дошка 180*10*2070 мм (+1 500 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Добірна дошка 180*10*2070 мм (+1 500 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoardSelect("Добірна дошка 360*10*2070 мм (3 000 грн)")
						}
						checked={
							selectedBoard === "Добірна дошка 360*10*2070 мм (3 000 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Добірна дошка 360*10*2070 мм (3 000 грн)</li>
				</label>

				{/* Добавьте остальные чекбоксы для добірної дошки */}
			</div>
		</div>
	);
};

export default ConfigDoors;
