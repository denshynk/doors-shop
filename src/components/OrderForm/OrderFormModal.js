import React from "react";

function OrderFormModal({ handleCloseModal, OnClickOrder, title }) {
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		phoneNumber: "+380",
		address: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			/^(\+380)\d{9}$/.test(formData.phoneNumber) &&
			formData.firstName
		) {
			OnClickOrder(formData);
			handleCloseModal();
		} else {
			alert(
				"Будь ласка, заповніть всі поля, або перевірте, чи правильно написаний номер. Записуйте номер з +380"
			);
		}
	};

	const isFormValid =
		/^(\+380)\d{9}$/.test(formData.phoneNumber) && formData.firstName;

	return (
		<div className="cartEmpty d-flex align-center justify-between flex-column flex">
			<div className="d-flex align-center justify-start p-30">
				<h2 className="">{title}</h2>
				<img
					onClick={handleCloseModal}
					className="removebtn cu-p ml-5 p-20 "
					src={process.env.PUBLIC_URL + "/img/delete.svg"}
					alt="delete"
				/>
			</div>
			<div className="d-flex">
				<form className="" onSubmit={handleSubmit}>
					<label>
						Ім'я
						<input
							className="formClient d-flex"
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
						/>
					</label>
					<label>
						Прізвище
						<input
							className="formClient  d-flex"
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
						/>
					</label>
					<label>
						Номер телефону
						<input
							className="formClient  d-flex"
							type="text"
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleChange}
						/>
					</label>
					<label>
						Адреса
						<input
							className="formClient  d-flex	"
							type="text"
							name="address"
							value={formData.address}
							onChange={handleChange}
						/>
					</label>
				</form>
			</div>
			{isFormValid ? (
				<button type="submit" className="redButtonADD" onClick={handleSubmit}>
					Оформити замовлення
					<img
						className="arrow"
						src={process.env.PUBLIC_URL + "/img/slider.svg"}
						alt="Arrow"
					/>
				</button>
			) : (
				<button type="button" className="redButtonADD" disabled>
					Заповніть форму
				</button>
			)}
		</div>
	);
}

export default OrderFormModal;
