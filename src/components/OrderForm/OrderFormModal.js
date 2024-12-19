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

		if (/^(\+380)\d{9}$/.test(formData.phoneNumber) && formData.firstName) {
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
		<div className="redButtonOrderForm p-30 d-flex flex-column justify-between w100p">
			<h2 className="mb-30 d-flex justify-between">
				{title}
				<img
					onClick={handleCloseModal}
					className="removebtn cu-p ml-5 "
					src={process.env.PUBLIC_URL + "/img/delete.svg"}
					alt="delete"
				/>
			</h2>

			<div className="">
				<form className="formClient" style={{width:"100%"}} onSubmit={handleSubmit}>
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
				<button type="submit" className="redButton" onClick={handleSubmit}>
					Оформити замовлення
					<img src={process.env.PUBLIC_URL + "/img/slider.svg"} alt="Arrow" />
				</button>
			) : (
				<button type="button" className="redButton" disabled>
					Заповніть форму
				</button>
			)}
		</div>
	);
}

export default OrderFormModal;
