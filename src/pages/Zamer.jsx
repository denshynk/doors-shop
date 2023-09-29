import React from "react";

function Zamer() {
	return (
		<div className="ZAMER">
			<h1 className="zamer">
				Виклик Замірщика для Встановлення та Виготовлення Ідеальних Дверей
			</h1>
			<div className="textwrap d-flex mr-10">
				<div className="nowrap">Телефонуйте нам за номерами телефону</div>

				<a className="phoneNumber" href="tel:+380683023003">
					+380683023003
				</a>
				<a className="phoneNumber" href="tel:+380980235488">
					+380980235488
				</a>
			</div>
			<span className="d-flex ">
				<p className="">
					Ви мрієте про ідеальні двері, що гармонійно впишуться у ваш інтер'єр
					та точно підійдуть до проєму у стіні? Наша команда готова здійснити
					замір та виготовити двері, що відповідають всім вашим побажанням.
				</p>
				<img src="./img/zamer/01.png" alt="Замір 1" width={"40%"} />
			</span>
			<span className="d-flex ">
				<img src="./img/zamer/02.png" alt="Замір 2" width={"40%"} />
				<p className="">
					Наші професійні замірщики володіють великим досвідом у вимірюванні
					приміщень, щоб забезпечити точність та врахувати всі нюанси
					конструкції. Вони допоможуть визначити оптимальні параметри для
					майбутніх дверей, забезпечуючи їх ідеальне встановлення в проємі вашої
					стіни.
				</p>
			</span>
			<span className="d-flex ">
				<p className="">
					Наша компанія пропонує широкий вибір матеріалів та дизайнів, щоб кожен
					клієнт зміг знайти ідеальний варіант. Ми враховуємо ваші уподобання та
					бюджет, щоб надати вам двері, які відповідають всім вашим потребам.
				</p>
				<img src="./img/zamer/03.png" alt="Замір 3" width={"40%"} />
			</span>
			<span className="d-flex  justify-center">
				<img src="./img/zamer/04.png" alt="Замір 3" width={"40%"} />
				<p className="">
					Нехай ваші двері стануть окрасою вашого приміщення та надійним засобом
					забезпечення комфорту та безпеки вашого дому. Замовте замір вже
					сьогодні та дозвольте нам реалізувати вашу мрію про ідеальні двері!
				</p>
			</span>
		</div>
	);
}

export default Zamer;