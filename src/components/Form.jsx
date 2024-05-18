import { useState } from 'react';
import axios from 'axios';
import Alert from './Alert';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		number: '',
		date: '',
	});
	const [alert, setAlert] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const emailPadrao = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|com\.br|net|org|edu|gov|mil|info|biz|co\.uk|org\.uk|ac\.uk|ca|de|fr|jp|eu|es|it|cn|in|us)$/i;
		const numberPadrao = /^[0-9]+$/;
		const validacao = {
			name: formData.name.trim() !== '',
			email: emailPadrao.test(formData.email),
			number: numberPadrao.test(formData.number) && formData.number.length >= 11,
			date: formData.date !== '',
		};

		const invalidFields = Object.keys(validacao).filter((key) => !validacao[key]);

		if (invalidFields.length > 0) {
			const messages = {
				name: 'Por favor, preencha o campo Name',
				email: 'Email inválido',
				number: 'Número de telefone inválido. Deve ter pelo menos 11 dígitos com o DDD',
				date: 'Por favor, preencha o campo Data',
			};
			setAlert({ type: 'error', message: messages[invalidFields[0]] });
			return;
		}

		try {
			await axios.post('http://localhost/projeto/ontological-clinic/index.php', formData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
			setAlert({ type: 'success', message: 'Dados enviados com sucesso!' });
			// Limpar o formulário após o envio bem-sucedido, se desejado
			setFormData({
				name: '',
				email: '',
				number: '',
				date: '',
			});
		} catch (error) {
			console.log(error);
			setAlert({ type: 'error', message: 'Ocorreu um erro ao enviar os dados: ' + error.message });
		}
	};

	return (
		<>
			<footer className="form text-white">
				<div className="container">
					<h1 className="title text-transform">Marcar Consulta</h1>
					<div className="row row-cols align-items-center justify-content-center">
						<div className="col">
							{alert && <Alert message={alert.message} type={alert.type} />}
							<form className="form-contact" onSubmit={handleSubmit}>
								<span className="title-agenda">Agende seu horário</span>
								<div className="mb-3">
									<label htmlFor="name" className="form-label">
										Seu Nome
									</label>
									<input type="text" className="form-control" id="name" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
								</div>

								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Seu Email
									</label>
									<input type="email" className="form-control" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
								</div>

								<div className="mb-3">
									<label className="form-label" htmlFor="number">
										Seu Telefone
									</label>
									<input type="number" className="form-control tel" id="number" name="number" placeholder="Telefone" value={formData.number} onChange={handleChange} required />
								</div>

								<div className="mb-3">
									<label htmlFor="date" className="form-label">
										Agende seu Horário
									</label>
									<input type="datetime-local" className="form-control data" id="date" name="date" value={formData.date} onChange={handleChange} required />
								</div>

								<button type="submit" className="btn btn-primary btn-form">
									Enviar
								</button>
							</form>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Form;
