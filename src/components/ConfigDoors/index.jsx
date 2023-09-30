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
	const [customWidth, setCustomWidth] = useState("");
	const [customHeight, setCustomHeight] = useState("");
	const [selectedSizeCustom, setSelectedSizeCustom] = useState(null);

	// Используем эффект для обновления общей цены при изменении выбранных опций
	useEffect(() => {
		let sizeToSet = selectedSize;
		if (selectedSize === "Власний розмір") {
			sizeToSet = selectedSizeCustom;
		}

		const options = {
			selectedSize: sizeToSet,
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
		if (selectedSize === "900 x 2000 мм") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedSize === "900 x 2000 мм") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedSize === "Власний розмір") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBox === "Ні") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedBox === "Коробка Стандарт 75*40*2070 мм. дерев’яна (+3 200 грн)"
		) {
			newTotalPrice += 3200; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedBox ===
			"Коробка Компланарна, 75*40*2070 mm. дерев’яна (+4 200 грн)"
		) {
			newTotalPrice += 4200; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedBox === "Коробка Інсайт 75*40*2070 mm. дерев’яна (+5 200 грн)"
		) {
			newTotalPrice += 5200; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBox === "Коробка в розмір проєму (Індивідуальний прорахунок)") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedFrame === "Ні") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedFrame ===
			"Лиштва телескопічна 70*12*2200 на 1 сторону (+1 600 грн)"
		) {
			newTotalPrice += 1600; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (
			selectedFrame ===
			"Лиштва телескопічна 70*12*2200 на 2 сторони (+3 200 грн)"
		) {
			newTotalPrice += 3200; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedFrame === "Лиштва фігурна-індивідуальний прорахунок") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBoard === "Ні") {
			newTotalPrice += 0; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBoard === "Добірна дошка 180*10*2070 мм (+2 300 грн)") {
			newTotalPrice += 2300; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBoard === "Добірна дошка 360*10*2070 мм (4 200 грн)") {
			newTotalPrice += 4200; // Пример: 100 грн за размер 600 x 2000 мм
		}
		if (selectedBoard === "Добірна дошка 90*10*2070 мм (+1 200 грн)") {
			newTotalPrice += 1200; // Пример: 100 грн за размер 600 x 2000 мм
		}
		// Повторите этот процесс для остальных опций
		// Обновляем общую цену
		setSelectedOptionsCost(newTotalPrice);
	}, [
		selectedSizeCustom,
		selectedItem,
		selectedSize,
		selectedBox,
		selectedFrame,
		selectedBoard,
		setSelectedOptionsCost,
		setSelectedOptions,
	]);

	// Функции обработки выбора пользователем

	useEffect(() => {
		if (selectedSize === "Власний розмір" && customWidth && customHeight) {
			setSelectedSizeCustom(`${customWidth}x${customHeight}`);
		} else {
			setSelectedSizeCustom("");
		}
	}, [selectedSize, customWidth, customHeight]);

	const handleCustomWidthChange = (e) => {
		setCustomWidth(e.target.value);
	};

	const handleCustomHeightChange = (e) => {
		setCustomHeight(e.target.value);
	};

	const handleSizeSelect = (size) => {
		if (size === "Власний розмір") {
			setSelectedSize(size);
		} else {
			setSelectedSize(size);
		}
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

				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() => handleSizeSelect("Власний розмір")}
						checked={selectedSize === "Власний розмір"}
					/>
					<span className="checkmark"></span>
					<li>Власний розмір</li>
				</label>
				{selectedSize === "Власний розмір" && (
					<div className="d-flex gap-10">
						<input
							type="text"
							placeholder="Ширина"
							value={customWidth}
							onChange={handleCustomWidthChange}
						/>
						<input
							type="text"
							placeholder="Висота"
							value={customHeight}
							onChange={handleCustomHeightChange}
						/>
					</div>
				)}
			</div>

			{/* Индивидуальный размер */}
			{selectedSize === "custom" && (
				<div className="custom-size">
					{/* Здесь должен быть код для всплывающего окна */}
				</div>
			)}

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
								"Коробка Стандарт 75*40*2070 мм. дерев’яна (+3 200 грн)"
							)
						}
						checked={
							selectedBox ===
							"Коробка Стандарт 75*40*2070 мм. дерев’яна (+3 200 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Коробка Стандарт 75*40*2070 мм. дерев’яна (+3 200 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoxSelect(
								"Коробка Компланарна, 75*40*2070 mm. дерев’яна (+4 200 грн)"
							)
						}
						checked={
							selectedBox ===
							"Коробка Компланарна, 75*40*2070 mm. дерев’яна (+4 200 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Коробка Компланарна, 75*40*2070 mm. дерев’яна (+4 200 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoxSelect(
								"Коробка Інсайт 75*40*2070 mm. дерев’яна (+5 200 грн)"
							)
						}
						checked={
							selectedBox ===
							"Коробка Інсайт 75*40*2070 mm. дерев’яна (+5 200 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Коробка Інсайт 75*40*2070 mm. дерев’яна (+5 200 грн)</li>
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
								"Лиштва телескопічна 70*12*2200 на 1 сторону (+1 600 грн)"
							)
						}
						checked={
							selectedFrame ===
							"Лиштва телескопічна 70*12*2200 на 1 сторону (+1 600 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Лиштва телескопічна 70*12*2200 на 1 сторону (+1 600 грн)</li>
				</label>

				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleFrameSelect(
								"Лиштва телескопічна 70*12*2200 на 2 сторони (+3 200 грн)"
							)
						}
						checked={
							selectedFrame ===
							"Лиштва телескопічна 70*12*2200 на 2 сторони (+3 200 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Лиштва телескопічна 70*12*2200 на 2 сторони (+3 200 грн)</li>
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
							handleBoardSelect("Добірна дошка 90*10*2070 мм (+1 200 грн)")
						}
						checked={selectedBoard === "Добірна дошка 90*10*2070 мм (+1 200 грн)"}
					/>
					<span className="checkmark"></span>
					<li>Добірна дошка 90*10*2070 мм (+1 200 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoardSelect("Добірна дошка 180*10*2070 мм (+2 300 грн)")
						}
						checked={
							selectedBoard === "Добірна дошка 180*10*2070 мм (+2 300 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Добірна дошка 180*10*2070 мм (+2 300 грн)</li>
				</label>
				<label className="chekid-19">
					<input
						type="checkbox"
						onChange={() =>
							handleBoardSelect("Добірна дошка 360*10*2070 мм (4 200 грн)")
						}
						checked={
							selectedBoard === "Добірна дошка 360*10*2070 мм (4 200 грн)"
						}
					/>
					<span className="checkmark"></span>
					<li>Добірна дошка 360*10*2070 мм (4 200 грн)</li>
				</label>

				{/* Добавьте остальные чекбоксы для добірної дошки */}
			</div>
		</div>
	);
};

export default ConfigDoors;
